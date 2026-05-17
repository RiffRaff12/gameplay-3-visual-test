---
name: Navigation Header
category: Navigation
status: stable
---

## Overview

Sticky frosted-glass top bar. Absorbs the iOS status bar via a fixed top padding. Contains a logo row on the left and an actions cluster on the right. Always `position: sticky; top: 0`.

Do not use multiple nav headers on one screen.

## Anatomy

- `.nav-header` — outer sticky bar (frosted glass)
  - `.nav-logo-row` — left side: icon + app name
    - `.nav-logo-btn` — small rounded icon button (app icon or back button)
    - `<span>` — app or page title text
  - `.nav-actions` — right side: tab selector + icon button(s)

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--size-nav` | `99px` | Total height (safe area + content) |
| `--safe-top` | `47px` | Top padding — absorbs iOS status bar |
| `--safe-left` | `18px` | Left padding |
| `--safe-right` | `12px` | Right padding |
| `--z-nav` | `10` | Stacks above page content |
| `--color-bg-nav` | `rgba(255,255,255,0.85)` | Frosted glass background |
| `--blur-glass` | `12px` | Backdrop blur |
| `--text-size-body` | `15px` | Nav font size |
| `--text-tracking-normal` | `-0.075px` | Nav letter spacing |
| `--size-logo-row` | `26px` | Logo row height |
| `--size-logo-btn` | `26px` | Logo button size |
| `--elevation-glass-btn` | `--primitive-shadow-sm` | Logo button shadow |
| `--primitive-space-2` | `8px` | Logo row gap |
| `--primitive-space-1` | `4px` | Actions gap |
| `--size-nav-actions-h` | `36px` | Actions cluster height |
| `--size-nav-actions-w` | `110px` | Actions cluster width |

## States

`.nav-logo-btn` — no explicit hover/active states defined yet; inherits browser defaults.

## Code example

```html
<header class="nav-header">
  <div class="nav-logo-row">
    <button class="nav-logo-btn">
      <!-- icon svg -->
    </button>
    <span class="text-section-title">Gameplay</span>
  </div>
  <div class="nav-actions">
    <!-- tab selector tabs, icon button -->
  </div>
</header>
```

## Cross-references

- [tab-bar.md](tab-bar.md) — bottom counterpart
- [buttons.md](buttons.md) — `.btn-icon` used inside `.nav-actions`
