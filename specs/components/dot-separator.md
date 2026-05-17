---
name: Dot Separator
category: Primitive
status: stable
---

## Overview

A 3×3px filled circle used to visually separate items in a meta row (e.g. sport type · time). Purely decorative — not a semantic element.

## Anatomy

- Single `<span>` with no children.

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--size-dot` | `3px` | Height and width |

Tailwind: `rounded-full bg-zinc-300 flex-shrink-0`

## States

No states. Decorative only.

## Code example

```html
<div class="session-card-meta">
  <span class="text-meta">Futsal</span>
  <span class="dot-separator"></span>
  <span class="text-meta">7:00 PM</span>
</div>
```

## Cross-references

- [session-card.md](session-card.md) — used inside `.session-card-meta`
- [progress-track.md](progress-track.md) — shares `--size-dot` for segment gaps
