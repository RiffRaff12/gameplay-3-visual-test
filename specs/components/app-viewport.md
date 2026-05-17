---
name: App Viewport
category: Layout
status: stable
---

## Overview

Root scrollable container applied to every page's top-level div. Sets the font baseline for the entire app — font size, line height, and letter spacing cascade to all children.

Do not use on nested elements. One per page.

## Anatomy

- Single `div` wrapping all page content between the nav header and tab bar.

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--text-size-body` | `15px` | Base font size |
| `--text-lh-body` | `21.75px` | Base line height |
| `--text-tracking-normal` | `-0.075px` | Base letter spacing (tight iOS feel) |

Tailwind: `relative flex flex-col text-zinc-950 overflow-hidden`

## States

No interactive states. Static container.

## Code example

```html
<div class="app-viewport">
  <!-- page content -->
</div>
```

## Cross-references

- [nav-header.md](nav-header.md) — sits above app-viewport (sticky)
- [tab-bar.md](tab-bar.md) — sits below app-viewport (fixed)
