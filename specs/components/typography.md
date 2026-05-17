---
name: Typography Utilities
category: Typography
status: stable
---

## Overview

Named text utility classes applied to spans, paragraphs, and headings. Each class sets font-size, optionally line-height and letter-spacing, plus a Tailwind font-weight and color. Do not override font-size or letter-spacing with raw values — modify the token instead.

## Classes

| Class | Size token | Weight | Tracking | Line height | Color |
|-------|-----------|--------|----------|-------------|-------|
| `.text-section-title` | `--text-size-section-title` (17px) | semibold | `--text-tracking-tight` (-0.4px) | `--text-lh-heading` (24.65px) | `text-zinc-950` |
| `.text-stat-xl` | `--text-size-stat-xl` (28px) | semibold | `--text-tracking-tighter` (-0.8px) | — | `text-zinc-950` |
| `.text-stat-xl--paid` | `--text-size-stat-xl` (28px) | semibold | `--text-tracking-tighter` (-0.8px) | — | `text-green-600` |
| `.text-stat-md` | `--text-size-stat-md` (18px) | semibold | `--text-tracking-tight` (-0.4px) | — | text-right (no color) |
| `.text-stat-md--dim` | — | — | — | — | `text-zinc-300` |
| `.text-label-md` | `--text-size-label-md` (16px) | semibold | `--text-tracking-snug` (-0.2px) | — | `text-zinc-950` |
| `.text-body` | `--text-size-body` (15px) | — | `--text-tracking-normal` (-0.075px) | `--text-lh-body` (21.75px) | `text-zinc-950` |
| `.text-meta` | `--text-size-meta` (13px) | medium | `--text-tracking-normal` (-0.075px) | — | `text-zinc-600` |
| `.text-label-sm` | `--text-size-label-sm` (12.5px) | — | — | — | `text-zinc-400` |
| `.text-paid` | `--text-size-label-sm` (12.5px) | semibold | `--text-tracking-wider` (0.2px) | — | `text-green-700` |
| `.text-tab` | `--text-size-tab` (10.5px) | medium | `--text-tracking-wide` (0.1px) | — | inherited |

## Usage guidelines

- **Section titles** (`.text-section-title`) — list headers, page titles
- **Stat XL** (`.text-stat-xl` / `--paid`) — hero numbers like total collected amount
- **Stat MD** (`.text-stat-md`) — tabular numbers in card right column; add `--dim` for zero/inactive
- **Label MD** (`.text-label-md`) — primary card label, player name
- **Body** (`.text-body`) — descriptive body text matching the app baseline
- **Meta** (`.text-meta`) — secondary card lines, sport name, time
- **Label SM** (`.text-label-sm`) — tertiary detail: location, notes
- **Paid** (`.text-paid`) — payment status badge label
- **Tab** (`.text-tab`) — tab bar item labels; also applied by `.tab-bar-item`

## Code example

```html
<p class="text-section-title">Upcoming Sessions</p>
<p class="text-label-md">Tuesday Futsal</p>
<p class="text-meta">8 players · 7:00 PM</p>
<span class="text-paid">Paid</span>
<span class="text-stat-xl--paid">RM 160</span>
```

## Cross-references

- [session-card.md](session-card.md) — `.text-label-md`, `.text-meta`, `.text-stat-md`
- [tab-bar.md](tab-bar.md) — `.text-tab`
- [avatar-chip.md](avatar-chip.md) — inherits from `.avatar-chip`
