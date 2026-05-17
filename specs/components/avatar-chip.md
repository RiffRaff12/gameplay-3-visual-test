---
name: Avatar Chip
category: Data Display
status: stable
---

## Overview

Circular chip showing a player's initials. Used in card player rows and community lists. Three sizes and five color variants corresponding to sport or player category. Color variants are defined as Tailwind bg/text pairs.

## Anatomy

- Single `<div>` or `<span>` with initials text inside.
- Size modifier (`--lg`, `--md`, `--sm`) controls height, width, and font size.
- Color modifier (`--pink`, `--blue`, `--red`, `--yellow`, `--zinc`) controls background and text color.

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--text-tracking-snug` | `-0.2px` | Initials letter spacing |
| `--size-avatar-lg` | `30px` | Large avatar height/width |
| `--size-avatar-md` | `22px` | Medium avatar height/width |
| `--size-avatar-sm` | `22px` | Small avatar height/width (alias of md) |
| `--text-size-sm` | `12px` | Font size for `--lg` |
| `--text-size-2xs` | `10px` | Font size for `--md` and `--sm` |

Tailwind: `rounded-full flex items-center justify-center font-semibold flex-shrink-0`

Color variants use Tailwind pairs:

| Modifier | Background | Text |
|----------|-----------|------|
| `--pink` | `bg-pink-100` | `text-pink-800` |
| `--blue` | `bg-blue-100` | `text-blue-800` |
| `--red` | `bg-red-100` | `text-red-800` |
| `--yellow` | `bg-yellow-100` | `text-yellow-800` |
| `--zinc` | `bg-zinc-100` | `text-zinc-600` |

## States

No interactive states. Static display element.

## Code example

```html
<!-- Large pink avatar -->
<div class="avatar-chip avatar-chip--lg avatar-chip--pink">ZH</div>

<!-- Medium blue avatar -->
<span class="avatar-chip avatar-chip--md avatar-chip--blue">AK</span>

<!-- Grouped row of avatars -->
<div class="flex -space-x-1">
  <div class="avatar-chip avatar-chip--md avatar-chip--pink">ZH</div>
  <div class="avatar-chip avatar-chip--md avatar-chip--blue">AK</div>
  <div class="avatar-chip avatar-chip--md avatar-chip--zinc">+3</div>
</div>
```

## Cross-references

- [session-card.md](session-card.md) — avatars shown in card player row
- [typography.md](typography.md) — inherits semibold weight
