---
name: Buttons
category: Button
status: stable
---

## Overview

Two button variants: a square icon tap target (`.btn-icon`) and a pill-shaped icon+label button (`.btn-pill`). Both are 36px and 32px tall respectively, matching iOS minimum tap target guidelines.

## Anatomy

### btn-icon
- Single `<button>` with an SVG icon child.

### btn-pill
- `<button>` containing an SVG icon + `<span>` label side by side.

## Tokens used

### btn-icon

| Token | Value | Purpose |
|-------|-------|---------|
| `--radius-btn-icon` | `9px` | Corner radius |
| `--size-btn-icon` | `36px` | Height and width |
| `--primitive-space-px` | `1px` | Vertical padding |
| `--primitive-space-1-5` | `6px` | Horizontal padding |

### btn-pill

| Token | Value | Purpose |
|-------|-------|---------|
| `--size-btn-pill` | `32px` | Height |
| `--primitive-space-2-5` | `10px` | Right padding |
| `--primitive-space-2` | `8px` | Left padding |
| `--primitive-space-1` | `4px` | Icon-label gap |
| `--text-size-btn-pill` | `13px` | Label font size |

Tailwind: `.btn-pill` uses `rounded-lg font-medium text-zinc-950`

## States

Neither button has explicit hover/active/focus/disabled styles defined in the token layer. Add state styles with Tailwind's `hover:`, `active:`, `focus-visible:`, `disabled:` prefixes when needed.

## Code example

```html
<!-- Icon button: e.g. ellipsis menu -->
<button class="btn-icon">
  <svg><!-- icon --></svg>
</button>

<!-- Pill button: e.g. "+ Add session" -->
<button class="btn-pill">
  <svg><!-- plus icon --></svg>
  <span>Add</span>
</button>
```

## Cross-references

- [nav-header.md](nav-header.md) — `.btn-icon` used in `.nav-actions`
- [session-card.md](session-card.md) — `.btn-pill` used in section header
