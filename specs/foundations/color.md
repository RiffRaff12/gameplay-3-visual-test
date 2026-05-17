# Color

## Overview

Colors are defined in a two-layer system. Layer 1 (primitives) holds raw hex and rgba values. Layer 2 (semantic aliases) maps those primitives to roles. **Always reference semantic tokens in component CSS; never reference primitives directly.**

---

## Text Colors

| Token | Resolved Value | When to use |
|-------|---------------|-------------|
| `--color-text` | `#09090b` (zinc-950) | Primary body copy, headings, card titles |
| `--color-text-secondary` | `#52525b` (zinc-600) | Supporting labels, meta text, inactive UI copy |
| `--color-text-muted` | `#a1a1aa` (zinc-400) | Placeholders, disabled states, dim stat suffixes |
| `--color-text-icon` | `#d4d4d8` (zinc-300) | Decorative icons, dot separators |
| `--color-text-success` | `#16a34a` (green-600) | Paid status indicators, success counts |
| `--color-text-success-label` | `#15803d` (green-700) | "PAID" badge text (slightly deeper for contrast on light bg) |

---

## Background Colors

| Token | Resolved Value | When to use |
|-------|---------------|-------------|
| `--color-bg-page` | `#fafafa` (zinc-50) | Root page background |
| `--color-bg-card` | `#ffffff` (white) | Card and surface backgrounds |
| `--color-bg-subtle` | `#f4f4f5` (zinc-100) | Unpaid progress segments, hover states, secondary surfaces |
| `--color-bg-nav` | `rgba(255,255,255,0.85)` | Nav header — frosted glass (requires `backdrop-filter: blur(12px)`) |
| `--color-bg-tabbar` | `rgba(255,255,255,0.92)` | Tab bar — frosted glass, slightly more opaque than nav |

### iOS Frosted Glass Pattern

Both `--color-bg-nav` and `--color-bg-tabbar` are semi-transparent whites. They must always be paired with:

```css
backdrop-filter: blur(var(--blur-glass));        /* 12px */
-webkit-backdrop-filter: blur(var(--blur-glass));
```

Without the blur, the translucency reads as flat white and the design intent is lost.

---

## Border Colors

| Token | Resolved Value | When to use |
|-------|---------------|-------------|
| `--color-border` | `rgba(0,0,0,0.07)` | Default card borders, subtle dividers |
| `--color-border-strong` | `rgba(0,0,0,0.12)` | Stronger separation when more contrast is needed |
| `--color-border-warning` | `#fde68a` (amber-200) | Warning state outlines |
| `--color-border-success` | `#bbf7d0` (green-200) | Success / paid state outlines |
| `--color-border-neutral` | `#e4e4e7` (zinc-200) | Neutral dividers between sections |

---

## Avatar Palette

Avatar chips use a pastel background + dark text pairing for legibility at small sizes.

| Variant | Background | Text | Token pair |
|---------|-----------|------|-----------|
| `--pink` | `#fce7f3` (pink-100) | `#9d174d` (pink-800) | `--primitive-pink-100` / `--primitive-pink-800` |
| `--blue` | `#dbeafe` (blue-100) | `#1e40af` (blue-800) | `--primitive-blue-100` / `--primitive-blue-800` |
| `--red` | `#fee2e2` (red-100) | `#991b1b` (red-800) | `--primitive-red-100` / `--primitive-red-800` |
| `--yellow` | `#fef9c3` (yellow-100) | `#92400e` (yellow-800) | `--primitive-yellow-100` / `--primitive-yellow-800` |
| `--zinc` | `#f4f4f5` (zinc-100) | `#52525b` (zinc-600) | `--primitive-zinc-100` / `--primitive-zinc-600` |

Assign colors deterministically per player (e.g. hash of name or index mod 5) so the same player always gets the same color within a session.

---

## Progress / Interactive Colors

| Token | Resolved Value | When to use |
|-------|---------------|-------------|
| `--color-progress-paid` | `#f59e0b` (amber-500) | Filled segments of the payment progress bar |
| `--color-progress-unpaid` | `#f4f4f5` (zinc-100) | Empty segments of the payment progress bar |

---

## Primitive Color Reference

Primitives are listed here for reference only. Do not use them in component CSS.

| Primitive | Value |
|-----------|-------|
| `--primitive-white` | `#ffffff` |
| `--primitive-zinc-50` | `#fafafa` |
| `--primitive-zinc-100` | `#f4f4f5` |
| `--primitive-zinc-200` | `#e4e4e7` |
| `--primitive-zinc-300` | `#d4d4d8` |
| `--primitive-zinc-400` | `#a1a1aa` |
| `--primitive-zinc-600` | `#52525b` |
| `--primitive-zinc-950` | `#09090b` |
| `--primitive-green-200` | `#bbf7d0` |
| `--primitive-green-600` | `#16a34a` |
| `--primitive-green-700` | `#15803d` |
| `--primitive-amber-200` | `#fde68a` |
| `--primitive-amber-500` | `#f59e0b` |
| `--primitive-pink-100` | `#fce7f3` |
| `--primitive-pink-800` | `#9d174d` |
| `--primitive-blue-100` | `#dbeafe` |
| `--primitive-blue-800` | `#1e40af` |
| `--primitive-red-100` | `#fee2e2` |
| `--primitive-red-800` | `#991b1b` |
| `--primitive-yellow-100` | `#fef9c3` |
| `--primitive-yellow-800` | `#92400e` |
