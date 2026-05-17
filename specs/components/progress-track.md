---
name: Progress Track
category: Data Display
status: stable
---

## Overview

Segmented horizontal payment progress bar. Each segment represents one player — amber (`--paid`) for collected, zinc (`--unpaid`) for outstanding. Segments are separated by a 3px gap and share equal width via `flex-1`.

Also used (without the paid/unpaid distinction) as the `.session-card-divider` visual divider inside session cards.

## Anatomy

- `.progress-track` — outer flex container, rounded, overflow-hidden
  - `.progress-segment.progress-segment--paid` — one per paid player (amber)
  - `.progress-segment.progress-segment--unpaid` — one per unpaid player (zinc)

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--size-progress-track` | `4px` | Track and segment height |
| `--size-dot` | `3px` | Gap between segments |

Tailwind for track: `flex w-full rounded-full overflow-hidden`
Tailwind for segment: `flex-1 rounded-full`
Tailwind colors: `bg-amber-500` (paid), `bg-zinc-100` (unpaid)

## States

Static. No interactive states. Segment count and paid/unpaid ratio is driven by data.

## Code example

```html
<!-- 3 paid, 2 unpaid out of 5 players -->
<div class="progress-track">
  <div class="progress-segment progress-segment--paid"></div>
  <div class="progress-segment progress-segment--paid"></div>
  <div class="progress-segment progress-segment--paid"></div>
  <div class="progress-segment progress-segment--unpaid"></div>
  <div class="progress-segment progress-segment--unpaid"></div>
</div>
```

## Cross-references

- [session-card.md](session-card.md) — `.session-card-divider` reuses progress segment children
- [dot-separator.md](dot-separator.md) — shares `--size-dot` token
