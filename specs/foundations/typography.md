# Typography

## Overview

The type system uses the device's native system font stack (San Francisco on iOS) via Tailwind's default `font-sans`. All scale values are defined as CSS custom properties so they can be referenced consistently across components. No external font is loaded.

---

## Font Stack

```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

This resolves to San Francisco on iOS/macOS, matching the native iOS aesthetic.

---

## Font Size Scale

10 steps from 10px to 28px. The scale is not linear — it is tuned to iOS UI densities.

| Token | Value | Semantic alias | Use |
|-------|-------|---------------|-----|
| `--primitive-font-size-2xs` | `10px` | `--text-size-2xs` | Avatar initials (md/sm chips) |
| `--primitive-font-size-xs` | `10.5px` | `--text-size-xs`, `--text-size-tab` | Tab bar labels |
| `--primitive-font-size-sm` | `12px` | `--text-size-sm` | Avatar initials (lg chips) |
| `--primitive-font-size-sm-plus` | `12.5px` | `--text-size-label-sm` | Muted labels, "PAID" badge |
| `--primitive-font-size-base` | `13px` | `--text-size-meta`, `--text-size-btn-pill` | Meta text, pill button labels |
| `--primitive-font-size-body` | `15px` | `--text-size-body` | Body copy baseline, card titles |
| `--primitive-font-size-md` | `16px` | `--text-size-label-md` | Medium labels, session names |
| `--primitive-font-size-lg` | `17px` | `--text-size-section-title` | Section headings |
| `--primitive-font-size-xl` | `18px` | `--text-size-stat-md` | Medium statistics |
| `--primitive-font-size-2xl` | `28px` | `--text-size-stat-xl` | Hero statistics (total amount, paid count) |

---

## Font Weights

| Token | Value | Use |
|-------|-------|-----|
| `--primitive-font-weight-normal` / `--text-weight-normal` | `400` | Body copy, tab labels |
| `--primitive-font-weight-medium` / `--text-weight-medium` | `500` | Meta text, pill button labels, tab bar items |
| `--primitive-font-weight-semibold` / `--text-weight-semibold` | `600` | Headings, stat numbers, card titles, avatar initials |

---

## Line Heights

| Token | Value | Use |
|-------|-------|-----|
| `--text-lh-body` | `21.75px` | Body copy — app viewport baseline and `.text-body` |
| `--text-lh-heading` | `24.65px` | Section titles and headings |

---

## Letter Spacing Scale

Negative values tighten iOS-style heading display. Positive values open up small caps and labels.

| Token | Value | Use |
|-------|-------|-----|
| `--text-tracking-tighter` | `-0.8px` | Stat XL numbers (28px) — maximum tightening |
| `--text-tracking-tight` | `-0.4px` | Section titles, stat MD numbers |
| `--text-tracking-snug` | `-0.2px` | Label MD, avatar chips |
| `--text-tracking-normal` | `-0.075px` | Body copy baseline (app viewport default) |
| `--text-tracking-wide` | `+0.1px` | Tab bar labels (small caps feel) |
| `--text-tracking-wider` | `+0.2px` | "PAID" badge — widened for badge legibility |

---

## Text Utility Classes

Named classes in `globals.css` that bundle font-size, weight, line-height, letter-spacing, and color into single utility classes.

| Class | Size | Weight | Tracking | Color | Line height |
|-------|------|--------|----------|-------|-------------|
| `.text-section-title` | 17px | 600 | -0.4px | zinc-950 | 24.65px |
| `.text-stat-xl` | 28px | 600 | -0.8px | zinc-950 | — |
| `.text-stat-xl--paid` | 28px | 600 | -0.8px | green-600 | — |
| `.text-stat-md` | 18px | 600 | -0.4px | — (right-aligned) | — |
| `.text-stat-md--dim` | — (modifier) | — | — | zinc-300 | — |
| `.text-label-md` | 16px | 600 | -0.2px | zinc-950 | — |
| `.text-body` | 15px | 400 | -0.075px | zinc-950 | 21.75px |
| `.text-meta` | 13px | 500 | -0.075px | zinc-600 | — |
| `.text-label-sm` | 12.5px | 400 | — | zinc-400 | — |
| `.text-paid` | 12.5px | 600 | +0.2px | green-700 | — |
| `.text-tab` | 10.5px | 500 | +0.1px | — (inherits) | — |

### Usage notes

- `.text-stat-md--dim` is a modifier — apply it alongside `.text-stat-md` to dim a value (e.g., a denominator like "/10").
- `.text-paid` is always uppercase in markup; the letter-spacing widens the already-small badge text.
- `.text-tab` inherits its color from `.tab-bar-item--active` or `.tab-bar-item--inactive`.
