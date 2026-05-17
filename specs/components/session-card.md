---
name: Session Card
category: Content
status: stable
---

## Overview

Tappable card representing a single sports session. Displays session title, sport type, time, player avatars, payment stats, and a segmented progress bar. Used in vertical lists separated by a section header row.

Use `.session-card-list` + `.section-header-row` to build the surrounding list layout.

## Anatomy

- `.section-header-row` / `.section-header-row--lg` — title row above a list
- `.session-card-list` — vertical flex container for cards
  - `.session-card` — tappable card (white, rounded, shadowed)
    - `.session-card-top` — flex row: left content + right meta cluster
      - Left: title area (`.text-label-md` + `.text-meta`)
      - Right: stat column (`.text-stat-md`, avatar row)
    - `.session-card-meta` — icon + sport label + `.dot-separator` + time
    - `.session-card-divider` — thin segmented bar (reuses `.progress-track` children)
    - Bottom row: avatar group + payment label

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--radius-card` | `14px` | Card border radius |
| `--spacing-card-top` | `14px` | Card top padding |
| `--spacing-card-x` | `14px` | Card horizontal padding |
| `--spacing-card-bottom` | `12px` | Card bottom padding |
| `--color-border` | `rgba(0,0,0,0.07)` | Card border |
| `--elevation-card` | `--primitive-shadow-xs` | Card drop shadow |
| `--spacing-card-gap` | `8px` | Gap in `.session-card-top` |
| `--spacing-meta-gap` | `6px` | Gap in `.session-card-meta` |
| `--size-dot` | `3px` | Gap and height in `.session-card-divider` |
| `--size-progress-track` | `4px` | `.session-card-divider` height |
| `--spacing-divider-y` | `8px` | Divider vertical margin |
| `--spacing-list-y` | `4px` | `.session-card-list` vertical padding |
| `--spacing-page-x` | `20px` | `.session-card-list` horizontal padding |
| `--spacing-list-gap` | `10px` | Gap between cards |
| `--spacing-section-x` | `20px` | Section header horizontal padding |
| `--spacing-section-top` | `24px` | `.section-header-row--lg` top padding |
| `--spacing-section-bottom` | `8px` | Section header bottom padding |

## States

| State | Description |
|-------|-------------|
| Default | White card, subtle border + shadow |
| Active/pressed | No custom style defined — browser default or add with `active:` Tailwind prefix |

## Code example

```html
<div class="section-header-row--lg">
  <span class="text-section-title">Upcoming</span>
  <button class="btn-pill">+ Add</button>
</div>

<div class="session-card-list">
  <button class="session-card">
    <div class="session-card-top">
      <div>
        <p class="text-label-md">Tuesday Futsal</p>
        <p class="text-meta">8 players</p>
      </div>
      <div>
        <p class="text-stat-md">RM 80</p>
        <!-- avatars -->
      </div>
    </div>
    <div class="session-card-meta">
      <!-- icon -->
      <span class="text-meta">Futsal</span>
      <span class="dot-separator"></span>
      <span class="text-meta">7:00 PM</span>
    </div>
    <div class="session-card-divider">
      <!-- progress segments -->
    </div>
  </button>
</div>
```

## Cross-references

- [progress-track.md](progress-track.md) — payment progress bar inside divider row
- [avatar-chip.md](avatar-chip.md) — player initials shown in card
- [dot-separator.md](dot-separator.md) — used in `.session-card-meta`
- [typography.md](typography.md) — `.text-label-md`, `.text-meta`, `.text-stat-md`
- [buttons.md](buttons.md) — `.btn-pill` in section header
