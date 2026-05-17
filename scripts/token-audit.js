#!/usr/bin/env node
/**
 * Token audit — scans CSS files for hardcoded values that should use tokens.
 * Exit code 0 = clean. Exit code 1 = errors found. Warnings do not fail CI.
 *
 * Usage:  node scripts/token-audit.js [--warn-only]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WARN_ONLY = process.argv.includes('--warn-only');

// Files / directories to skip when scanning
const IGNORE_PATHS = [
  'tokens.css',      // token definitions are raw values by design
  'node_modules',
  '.next',
  'scripts',
  'specs',
  'design-reference',
];

// ── Token suggestion maps ─────────────────────────────────────────────────

const COLOR_SUGGESTIONS = {
  '#ffffff': '--color-bg-card or --primitive-white',
  '#fafafa': '--color-bg-page or --primitive-zinc-50',
  '#f4f4f5': '--color-bg-subtle or --primitive-zinc-100',
  '#e4e4e7': '--color-border-neutral or --primitive-zinc-200',
  '#d4d4d8': '--color-text-icon or --primitive-zinc-300',
  '#a1a1aa': '--color-text-muted or --primitive-zinc-400',
  '#52525b': '--color-text-secondary or --primitive-zinc-600',
  '#09090b': '--color-text or --primitive-zinc-950',
  '#bbf7d0': '--color-border-success or --primitive-green-200',
  '#16a34a': '--color-text-success or --primitive-green-600',
  '#15803d': '--color-text-success-label or --primitive-green-700',
  '#fde68a': '--color-border-warning or --primitive-amber-200',
  '#f59e0b': '--color-progress-paid or --primitive-amber-500',
  '#fce7f3': '--primitive-pink-100',
  '#9d174d': '--primitive-pink-800',
  '#dbeafe': '--primitive-blue-100',
  '#1e40af': '--primitive-blue-800',
  '#fee2e2': '--primitive-red-100',
  '#991b1b': '--primitive-red-800',
  '#fef9c3': '--primitive-yellow-100',
  '#92400e': '--primitive-yellow-800',
};

const SPACING_SUGGESTIONS = {
  '1px':  '--primitive-space-px',
  '3px':  '--primitive-space-0-75 or --size-dot',
  '4px':  '--primitive-space-1 or --spacing-list-y or --size-progress-track',
  '6px':  '--primitive-space-1-5 or --spacing-meta-gap',
  '8px':  '--primitive-space-2 or --spacing-card-gap or --spacing-divider-y or --spacing-section-bottom',
  '10px': '--primitive-space-2-5 or --spacing-list-gap',
  '12px': '--primitive-space-3 or --spacing-card-bottom',
  '14px': '--primitive-space-3-5 or --spacing-card-x or --spacing-card-top',
  '16px': '--primitive-space-4',
  '18px': '--primitive-space-4-5',
  '20px': '--primitive-space-5 or --spacing-page-x or --spacing-section-x',
  '24px': '--primitive-space-6 or --spacing-section-top',
  '26px': '--size-logo-row or --size-logo-btn',
  '30px': '--size-avatar-lg',
  '22px': '--size-avatar-md or --size-avatar-sm',
  '32px': '--primitive-space-8 or --size-btn-pill',
  '34px': '--safe-bottom or --primitive-space-8-5',
  '36px': '--primitive-space-9 or --size-btn-icon or --size-nav-actions-h',
  '47px': '--safe-top or --primitive-space-11-75',
  '52px': '--size-tab-item',
  '87px': '--size-tab-bar',
  '99px': '--size-nav',
  '110px': '--size-nav-actions-w',
};

const FONT_SIZE_SUGGESTIONS = {
  '10px':   '--text-size-2xs or --primitive-font-size-2xs',
  '10.5px': '--text-size-xs or --text-size-tab or --primitive-font-size-xs',
  '12px':   '--text-size-sm or --primitive-font-size-sm',
  '12.5px': '--text-size-label-sm or --primitive-font-size-sm-plus',
  '13px':   '--text-size-meta or --text-size-btn-pill or --primitive-font-size-base',
  '15px':   '--text-size-body or --primitive-font-size-body',
  '16px':   '--text-size-label-md or --primitive-font-size-md',
  '17px':   '--text-size-section-title or --primitive-font-size-lg',
  '18px':   '--text-size-stat-md or --primitive-font-size-xl',
  '28px':   '--text-size-stat-xl or --primitive-font-size-2xl',
};

const RADIUS_SUGGESTIONS = {
  '9px':    '--radius-btn-icon or --primitive-radius-sm',
  '14px':   '--radius-card or --primitive-radius-md',
  '8px':    '--radius-btn-pill or --primitive-radius-lg',
  '9999px': '--radius-full or --primitive-radius-full',
};

const ZSCORE_SUGGESTIONS = {
  '10':  '--z-nav or --primitive-z-10',
  '100': '--z-modal or --primitive-z-100',
  '200': '--z-toast or --primitive-z-200',
};

// ── Violation rules ───────────────────────────────────────────────────────

const RULES = [
  {
    name:    'hardcoded-hex-color',
    type:    'error',
    // Match a CSS property (not a custom property definition) with a hex color
    pattern: /^(?!\s*--).*(?:color|background|border(?:-color)?|box-shadow|outline(?:-color)?|fill|stroke)\s*:[^;]*#([0-9a-fA-F]{3,8})\b/,
    extract: (line) => {
      const m = line.match(/#([0-9a-fA-F]{3,8})\b/g);
      return m ? m.map(v => v.toLowerCase()) : [];
    },
    suggest: (val) => COLOR_SUGGESTIONS[val] || 'Add a --color-* or --primitive-* token in tokens.css',
  },
  {
    name:    'hardcoded-rgba-color',
    type:    'error',
    pattern: /^(?!\s*--).*(?:color|background|border(?:-color)?|box-shadow|outline(?:-color)?)\s*:[^;]*rgba?\(\s*[\d.,\s]+\)/,
    extract: (line) => {
      const m = line.match(/rgba?\(\s*[\d.,\s]+\)/g);
      return m || [];
    },
    suggest: () => 'Use --color-border, --color-bg-nav, --elevation-*, or define a new token in tokens.css',
  },
  {
    name:    'hardcoded-spacing',
    type:    'error',
    pattern: /^(?!\s*--).*(?:padding|margin|gap)\s*:[^;]*\b(\d+(?:\.\d+)?px)\b/,
    extract: (line) => {
      const m = line.match(/\b(\d+(?:\.\d+)?px)\b/g);
      return m ? m.filter(v => v !== '0px') : [];
    },
    suggest: (val) => SPACING_SUGGESTIONS[val] || '--primitive-space-* (check tokens.css for closest match)',
  },
  {
    name:    'hardcoded-font-size',
    type:    'error',
    pattern: /^(?!\s*--).*font-size\s*:\s*(\d+(?:\.\d+)?px)/,
    extract: (line) => {
      const m = line.match(/\b(\d+(?:\.\d+)?px)\b/g);
      return m || [];
    },
    suggest: (val) => FONT_SIZE_SUGGESTIONS[val] || '--text-size-* (check tokens.css for closest match)',
  },
  {
    name:    'hardcoded-border-radius',
    type:    'error',
    pattern: /^(?!\s*--).*border-radius\s*:[^;]*\b(\d+(?:\.\d+)?px)\b/,
    extract: (line) => {
      const m = line.match(/\b(\d+(?:\.\d+)?px)\b/g);
      return m || [];
    },
    suggest: (val) => RADIUS_SUGGESTIONS[val] || '--radius-* (check tokens.css)',
  },
  {
    name:    'hardcoded-box-shadow',
    type:    'error',
    pattern: /^(?!\s*--).*box-shadow\s*:[^;]*(?:#[0-9a-fA-F]{3,8}|rgba?\()/,
    extract: () => ['box-shadow with raw color'],
    suggest: () => '--elevation-card or --elevation-glass-btn',
  },
  {
    name:    'hardcoded-z-index',
    type:    'error',
    pattern: /^(?!\s*--).*z-index\s*:\s*(\d+)/,
    extract: (line) => {
      const m = line.match(/z-index\s*:\s*(\d+)/);
      return m ? [m[1]] : [];
    },
    suggest: (val) => ZSCORE_SUGGESTIONS[val] || '--z-nav / --z-modal / --z-toast',
  },
  {
    name:    'hardcoded-transition-duration',
    type:    'warning',
    pattern: /^(?!\s*--).*transition\s*:[^;]*\b(\d+(?:\.\d+)?(?:ms|s))\b/,
    extract: (line) => {
      const m = line.match(/\b(\d+(?:\.\d+)?(?:ms|s))\b/g);
      return m || [];
    },
    suggest: () => '--motion-duration-quick (150ms) / --motion-duration-base (200ms) / --motion-duration-slow (300ms)',
  },
  {
    name:    'hardcoded-blur',
    type:    'warning',
    pattern: /^(?!\s*--).*blur\(\s*(\d+(?:\.\d+)?px)\s*\)/,
    extract: (line) => {
      const m = line.match(/blur\(\s*(\d+(?:\.\d+)?px)\s*\)/g);
      return m || [];
    },
    suggest: () => 'blur(var(--blur-glass)) [12px]',
  },
];

// ── File scanner ──────────────────────────────────────────────────────────

function shouldIgnore(filePath) {
  return IGNORE_PATHS.some(p => filePath.includes(p));
}

function findCssFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (shouldIgnore(full)) continue;
    if (entry.isDirectory()) {
      findCssFiles(full, results);
    } else if (entry.isFile() && /\.css$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function isInsideRootBlock(lines, lineIndex) {
  // Detect if we are inside a :root { } block (skip token definitions)
  let depth = 0;
  let inRoot = false;
  for (let i = 0; i <= lineIndex; i++) {
    const l = lines[i];
    if (/:root\s*\{/.test(l)) { inRoot = true; depth = 0; }
    if (inRoot) {
      depth += (l.match(/\{/g) || []).length;
      depth -= (l.match(/\}/g) || []).length;
      if (depth <= 0 && i < lineIndex) { inRoot = false; }
    }
  }
  return inRoot && depth > 0;
}

function auditFile(filePath) {
  const rel = path.relative(ROOT, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const violations = [];

  lines.forEach((rawLine, i) => {
    const lineNum = i + 1;
    const line = rawLine.trim();

    // Skip blank lines, comments, @import, @tailwind
    if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*') ||
        line.startsWith('@import') || line.startsWith('@tailwind') || line.startsWith('@apply')) {
      return;
    }

    // Skip lines that are token definitions (--variable: value)
    if (/^\s*--[\w-]+\s*:/.test(rawLine)) return;

    // Skip if inside :root block (token definitions)
    if (isInsideRootBlock(lines, i)) return;

    for (const rule of RULES) {
      if (rule.pattern.test(rawLine)) {
        const extracted = rule.extract(rawLine);
        for (const val of extracted) {
          violations.push({
            type: rule.type,
            rule: rule.name,
            file: rel,
            line: lineNum,
            value: val,
            suggestion: rule.suggest(val),
            source: rawLine.trim(),
          });
        }
        break; // one rule per line to avoid duplicate reports
      }
    }
  });

  return violations;
}

// ── Main ──────────────────────────────────────────────────────────────────

function main() {
  const files = findCssFiles(ROOT);
  const allViolations = [];

  for (const f of files) {
    allViolations.push(...auditFile(f));
  }

  const errors   = allViolations.filter(v => v.type === 'error');
  const warnings = allViolations.filter(v => v.type === 'warning');

  if (allViolations.length === 0) {
    console.log('✓ Token audit passed — zero violations.');
    process.exit(0);
  }

  if (errors.length > 0) {
    console.log(`\n── ERRORS (${errors.length}) ── hardcoded values that must use tokens:\n`);
    for (const v of errors) {
      console.log(`  [error] ${v.file}:${v.line}`);
      console.log(`          value     : ${v.value}`);
      console.log(`          use token : ${v.suggestion}`);
      console.log(`          source    : ${v.source}\n`);
    }
  }

  if (warnings.length > 0) {
    console.log(`\n── WARNINGS (${warnings.length}) ── consider using tokens:\n`);
    for (const v of warnings) {
      console.log(`  [warn]  ${v.file}:${v.line}`);
      console.log(`          value     : ${v.value}`);
      console.log(`          use token : ${v.suggestion}`);
      console.log(`          source    : ${v.source}\n`);
    }
  }

  console.log(`\nSummary: ${errors.length} error(s), ${warnings.length} warning(s) across ${files.length} CSS file(s).`);

  if (errors.length > 0 && !WARN_ONLY) {
    process.exit(1);
  }
}

main();
