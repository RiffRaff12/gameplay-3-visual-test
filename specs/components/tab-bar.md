---
name: Tab Bar
category: Navigation
status: stable
---

## Overview

Full-width frosted-glass bottom navigation bar. Absorbs the iOS home indicator via bottom padding. Each tab item is a flex-1 column with an icon above a label.

Always rendered at the bottom of the viewport. One active tab at a time — toggle with `--active` / `--inactive` modifiers.

## Anatomy

- `.tab-bar` — outer frosted bar
  - `.tab-bar-item.tab-bar-item--active` — selected tab (dark text)
  - `.tab-bar-item.tab-bar-item--inactive` — unselected tab (muted text)
    - Icon (SVG or icon component)
    - `<span class="text-tab">` — label

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--size-tab-bar` | `87px` | Total bar height |
| `--safe-bottom` | `34px` | Bottom padding — covers iOS home indicator |
| `--color-bg-tabbar` | `rgba(255,255,255,0.92)` | Frosted glass background |
| `--blur-glass` | `12px` | Backdrop blur |
| `--size-tab-item` | `52px` | Individual tab height |
| `--size-dot` | `3px` | Gap between icon and label |
| `--text-size-tab` | `10.5px` | Tab label font size |
| `--text-tracking-wide` | `0.1px` | Tab label letter spacing |
| `--primitive-space-px` | `1px` | Tab item vertical padding |
| `--primitive-space-1-5` | `6px` | Tab item horizontal padding |

Tailwind color tokens: `text-zinc-950` (active), `text-zinc-400` (inactive)

## States

| State | Class | Description |
|-------|-------|-------------|
| Active | `.tab-bar-item--active` | Dark text (`--color-text`) |
| Inactive | `.tab-bar-item--inactive` | Muted text (`--color-text-muted`) |

## Code example

```html
<nav class="tab-bar">
  <button class="tab-bar-item tab-bar-item--active">
    <!-- icon -->
    <span class="text-tab">Home</span>
  </button>
  <button class="tab-bar-item tab-bar-item--inactive">
    <!-- icon -->
    <span class="text-tab">Archive</span>
  </button>
  <button class="tab-bar-item tab-bar-item--inactive">
    <!-- icon -->
    <span class="text-tab">Community</span>
  </button>
</nav>
```

## Cross-references

- [nav-header.md](nav-header.md) — top counterpart
- [typography.md](typography.md) — `.text-tab` class
