# Token Reference

Master map of every CSS variable in `tokens.css`. Components reference Layer 2 names only. Layer 1 primitives are referenced only inside `tokens.css`.

---

## Layer 1 — Primitives

### Color

| Variable | Value |
|----------|-------|
| `--primitive-white` | `#ffffff` |
| `--primitive-black` | `#000000` |
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

### Spacing (4 px base grid)

| Variable | Value | Notes |
|----------|-------|-------|
| `--primitive-space-px` | `1px` | Border widths |
| `--primitive-space-0-75` | `3px` | Sub-grid micro gap |
| `--primitive-space-1` | `4px` | 1 unit |
| `--primitive-space-1-5` | `6px` | 1.5 units |
| `--primitive-space-2` | `8px` | 2 units |
| `--primitive-space-2-5` | `10px` | 2.5 units |
| `--primitive-space-3` | `12px` | 3 units |
| `--primitive-space-3-5` | `14px` | 3.5 units |
| `--primitive-space-4` | `16px` | 4 units |
| `--primitive-space-4-5` | `18px` | 4.5 units |
| `--primitive-space-5` | `20px` | 5 units |
| `--primitive-space-6` | `24px` | 6 units |
| `--primitive-space-8` | `32px` | 8 units |
| `--primitive-space-8-5` | `34px` | Safe area bottom |
| `--primitive-space-9` | `36px` | 9 units |
| `--primitive-space-11-75` | `47px` | Safe area top (iOS status bar) |

### Typography

| Variable | Value |
|----------|-------|
| `--primitive-font-size-2xs` | `10px` |
| `--primitive-font-size-xs` | `10.5px` |
| `--primitive-font-size-sm` | `12px` |
| `--primitive-font-size-sm-plus` | `12.5px` |
| `--primitive-font-size-base` | `13px` |
| `--primitive-font-size-body` | `15px` |
| `--primitive-font-size-md` | `16px` |
| `--primitive-font-size-lg` | `17px` |
| `--primitive-font-size-xl` | `18px` |
| `--primitive-font-size-2xl` | `28px` |
| `--primitive-font-weight-normal` | `400` |
| `--primitive-font-weight-medium` | `500` |
| `--primitive-font-weight-semibold` | `600` |
| `--primitive-line-height-body` | `21.75px` |
| `--primitive-line-height-heading` | `24.65px` |
| `--primitive-tracking-tighter` | `-0.8px` |
| `--primitive-tracking-tight` | `-0.4px` |
| `--primitive-tracking-snug` | `-0.2px` |
| `--primitive-tracking-normal` | `-0.075px` |
| `--primitive-tracking-wide` | `0.1px` |
| `--primitive-tracking-wider` | `0.2px` |

### Border radius

| Variable | Value |
|----------|-------|
| `--primitive-radius-sm` | `9px` |
| `--primitive-radius-md` | `14px` |
| `--primitive-radius-lg` | `8px` |
| `--primitive-radius-full` | `9999px` |

### Shadows

| Variable | Value |
|----------|-------|
| `--primitive-shadow-xs` | `rgba(0,0,0,0.04) 0px 1px 2px 0px` |
| `--primitive-shadow-sm` | `rgba(255,255,255,0.4) 0px 1px 0px 0px inset, rgba(0,0,0,0.08) 0px 1px 2px 0px` |

### Z-index

| Variable | Value |
|----------|-------|
| `--primitive-z-10` | `10` |
| `--primitive-z-100` | `100` |
| `--primitive-z-200` | `200` |

### Motion

| Variable | Value |
|----------|-------|
| `--primitive-duration-fast` | `150ms` |
| `--primitive-duration-base` | `200ms` |
| `--primitive-duration-slow` | `300ms` |
| `--primitive-easing-default` | `ease-in-out` |
| `--primitive-easing-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--primitive-blur-glass` | `12px` |

### Component sizes

| Variable | Value |
|----------|-------|
| `--primitive-size-nav-height` | `99px` |
| `--primitive-size-nav-safe-left` | `18px` |
| `--primitive-size-nav-safe-right` | `12px` |
| `--primitive-size-logo-row` | `26px` |
| `--primitive-size-logo-btn` | `26px` |
| `--primitive-size-nav-actions-height` | `36px` |
| `--primitive-size-nav-actions-width` | `110px` |
| `--primitive-size-tab-bar-height` | `87px` |
| `--primitive-size-tab-item-height` | `52px` |
| `--primitive-size-btn-icon` | `36px` |
| `--primitive-size-btn-pill-height` | `32px` |
| `--primitive-size-avatar-lg` | `30px` |
| `--primitive-size-avatar-md` | `22px` |
| `--primitive-size-avatar-sm` | `22px` |
| `--primitive-size-progress-track` | `4px` |
| `--primitive-size-dot` | `3px` |

---

## Layer 2 — Semantic Aliases

### Text colors

| Variable | Resolves to | When to use |
|----------|-------------|-------------|
| `--color-text` | `--primitive-zinc-950` | Primary text, headings |
| `--color-text-secondary` | `--primitive-zinc-600` | Card meta, secondary labels |
| `--color-text-muted` | `--primitive-zinc-400` | Inactive tabs, placeholder text |
| `--color-text-icon` | `--primitive-zinc-300` | Decorative icons, stat zero state |
| `--color-text-success` | `--primitive-green-600` | Paid amount numbers |
| `--color-text-success-label` | `--primitive-green-700` | "Paid" label text |

### Background colors

| Variable | Resolves to | When to use |
|----------|-------------|-------------|
| `--color-bg-page` | `--primitive-zinc-50` | Page / scroll area background |
| `--color-bg-card` | `--primitive-white` | Card surfaces |
| `--color-bg-subtle` | `--primitive-zinc-100` | Button backgrounds, unpaid progress |
| `--color-bg-nav` | `rgba(255,255,255,0.85)` | Frosted nav header |
| `--color-bg-tabbar` | `rgba(255,255,255,0.92)` | Frosted tab bar |

### Border colors

| Variable | Resolves to | When to use |
|----------|-------------|-------------|
| `--color-border` | `rgba(0,0,0,0.07)` | Default card border |
| `--color-border-strong` | `rgba(0,0,0,0.12)` | Emphasized dividers |
| `--color-border-warning` | `--primitive-amber-200` | Warning / pending state borders |
| `--color-border-success` | `--primitive-green-200` | Paid / success state borders |
| `--color-border-neutral` | `--primitive-zinc-200` | Neutral chip / tag borders |

### Interactive / accent

| Variable | Resolves to | When to use |
|----------|-------------|-------------|
| `--color-progress-paid` | `--primitive-amber-500` | Paid progress segment fill |
| `--color-progress-unpaid` | `--primitive-zinc-100` | Unpaid progress segment fill |

### Typography

| Variable | Resolves to | Used by |
|----------|-------------|---------|
| `--text-size-2xs` | `10px` | Avatar md/sm font |
| `--text-size-xs` | `10.5px` | — |
| `--text-size-sm` | `12px` | Avatar lg font |
| `--text-size-label-sm` | `12.5px` | `.text-label-sm`, `.text-paid` |
| `--text-size-meta` | `13px` | `.text-meta` |
| `--text-size-btn-pill` | `13px` | `.btn-pill` |
| `--text-size-body` | `15px` | `.app-viewport`, `.nav-header`, `.text-body` |
| `--text-size-label-md` | `16px` | `.text-label-md` |
| `--text-size-section-title` | `17px` | `.text-section-title` |
| `--text-size-stat-md` | `18px` | `.text-stat-md` |
| `--text-size-stat-xl` | `28px` | `.text-stat-xl`, `.text-stat-xl--paid` |
| `--text-size-tab` | `10.5px` | `.tab-bar-item`, `.text-tab` |
| `--text-weight-normal` | `400` | — |
| `--text-weight-medium` | `500` | — |
| `--text-weight-semibold` | `600` | — |
| `--text-lh-body` | `21.75px` | `.app-viewport`, `.text-body` |
| `--text-lh-heading` | `24.65px` | `.text-section-title` |
| `--text-tracking-tighter` | `-0.8px` | `.text-stat-xl` |
| `--text-tracking-tight` | `-0.4px` | `.text-section-title`, `.text-stat-md` |
| `--text-tracking-snug` | `-0.2px` | `.text-label-md`, `.avatar-chip` |
| `--text-tracking-normal` | `-0.075px` | `.app-viewport`, `.text-body`, `.text-meta` |
| `--text-tracking-wide` | `0.1px` | `.tab-bar-item`, `.text-tab` |
| `--text-tracking-wider` | `0.2px` | `.text-paid` |

### Spacing

| Variable | Resolves to | When to use |
|----------|-------------|-------------|
| `--spacing-page-x` | `20px` | Horizontal page margin |
| `--spacing-section-x` | `20px` | Section header horizontal padding |
| `--spacing-section-top` | `24px` | First section top padding (–lg variant) |
| `--spacing-section-bottom` | `8px` | Section header bottom padding |
| `--spacing-list-y` | `4px` | Card list vertical padding |
| `--spacing-list-gap` | `10px` | Gap between session cards |
| `--spacing-card-x` | `14px` | Card horizontal padding |
| `--spacing-card-top` | `14px` | Card top padding |
| `--spacing-card-bottom` | `12px` | Card bottom padding |
| `--spacing-card-gap` | `8px` | Gap in card top row |
| `--spacing-meta-gap` | `6px` | Gap in meta pill row |
| `--spacing-divider-y` | `8px` | Card divider vertical margin |

### Radius

| Variable | Resolves to | Used by |
|----------|-------------|---------|
| `--radius-card` | `14px` | `.session-card` |
| `--radius-btn-icon` | `9px` | `.btn-icon` |
| `--radius-btn-pill` | `8px` | `.btn-pill` |
| `--radius-full` | `9999px` | `.avatar-chip`, `.progress-*`, `.dot-separator` |

### Elevation

| Variable | Resolves to | Used by |
|----------|-------------|---------|
| `--elevation-card` | `--primitive-shadow-xs` | `.session-card` |
| `--elevation-glass-btn` | `--primitive-shadow-sm` | `.nav-logo-btn` |

### Z-index

| Variable | Resolves to | Used by |
|----------|-------------|---------|
| `--z-nav` | `10` | `.nav-header` |
| `--z-modal` | `100` | Modal overlays (reserved) |
| `--z-toast` | `200` | Toast notifications (reserved) |

### Motion

| Variable | Resolves to | When to use |
|----------|-------------|-------------|
| `--motion-duration-quick` | `150ms` | Button press, micro-interactions |
| `--motion-duration-base` | `200ms` | Standard transitions |
| `--motion-duration-slow` | `300ms` | Sheet/modal enter |
| `--motion-easing` | `ease-in-out` | All transitions |
| `--blur-glass` | `12px` | `backdrop-filter: blur(var(--blur-glass))` |

### Safe areas & component sizes

| Variable | Resolves to | Used by |
|----------|-------------|---------|
| `--safe-top` | `47px` | `.nav-header` padding-top |
| `--safe-bottom` | `34px` | `.tab-bar` padding-bottom |
| `--safe-left` | `18px` | `.nav-header` padding-left |
| `--safe-right` | `12px` | `.nav-header` padding-right |
| `--size-nav` | `99px` | `.nav-header` height |
| `--size-logo-row` | `26px` | `.nav-logo-row` height |
| `--size-logo-btn` | `26px` | `.nav-logo-btn` height/width |
| `--size-nav-actions-h` | `36px` | `.nav-actions` height |
| `--size-nav-actions-w` | `110px` | `.nav-actions` width |
| `--size-tab-bar` | `87px` | `.tab-bar` height |
| `--size-tab-item` | `52px` | `.tab-bar-item` height |
| `--size-btn-icon` | `36px` | `.btn-icon` height/width |
| `--size-btn-pill` | `32px` | `.btn-pill` height |
| `--size-avatar-lg` | `30px` | `.avatar-chip--lg` |
| `--size-avatar-md` | `22px` | `.avatar-chip--md` |
| `--size-avatar-sm` | `22px` | `.avatar-chip--sm` |
| `--size-progress-track` | `4px` | `.progress-track`, `.progress-segment` height |
| `--size-dot` | `3px` | `.dot-separator` height/width; gaps in progress/divider |
