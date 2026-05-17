# Spacing

## Overview

All spacing is built on a **4px base grid**. Primitive tokens map step names (1, 1.5, 2 …) to pixel values. Semantic aliases then give layout-specific names to the most-used steps. Always prefer semantic aliases in component code; reach for primitives only when no semantic alias fits.

---

## Primitive Spacing Scale

| Token | Value | Grid step |
|-------|-------|-----------|
| `--primitive-space-px` | `1px` | — (hairline) |
| `--primitive-space-0-75` | `3px` | 0.75× |
| `--primitive-space-1` | `4px` | 1× |
| `--primitive-space-1-5` | `6px` | 1.5× |
| `--primitive-space-2` | `8px` | 2× |
| `--primitive-space-2-5` | `10px` | 2.5× |
| `--primitive-space-3` | `12px` | 3× |
| `--primitive-space-3-5` | `14px` | 3.5× |
| `--primitive-space-4` | `16px` | 4× |
| `--primitive-space-4-5` | `18px` | 4.5× |
| `--primitive-space-5` | `20px` | 5× |
| `--primitive-space-6` | `24px` | 6× |
| `--primitive-space-8` | `32px` | 8× |
| `--primitive-space-8-5` | `34px` | 8.5× |
| `--primitive-space-9` | `36px` | 9× |
| `--primitive-space-11-75` | `47px` | 11.75× |

---

## Semantic Layout Aliases

| Token | Resolved Value | Where used |
|-------|---------------|------------|
| `--spacing-page-x` | `20px` | Horizontal padding of the full-width page scroll container |
| `--spacing-section-x` | `20px` | Left/right padding inside section header rows |
| `--spacing-section-top` | `24px` | Top padding for `--lg` section headers (extra breathing room) |
| `--spacing-section-bottom` | `8px` | Bottom padding of section header rows, before the list starts |
| `--spacing-list-y` | `4px` | Vertical padding above/below `session-card-list` |
| `--spacing-list-gap` | `10px` | Gap between cards in a list |
| `--spacing-card-x` | `14px` | Left/right inner padding of a card |
| `--spacing-card-top` | `14px` | Top inner padding of a card |
| `--spacing-card-bottom` | `12px` | Bottom inner padding of a card |
| `--spacing-card-gap` | `8px` | Gap between the title cluster and right-side meta in a card |
| `--spacing-meta-gap` | `6px` | Gap between items in the card meta row (icon, sport, separator, time) |
| `--spacing-divider-y` | `8px` | Vertical margin above and below `session-card-divider` |

---

## Safe Area Insets

Safe area tokens absorb iOS hardware chrome so no content is hidden under system UI.

| Token | Value | What it covers |
|-------|-------|----------------|
| `--safe-top` | `47px` | iOS status bar (time, signal, battery) |
| `--safe-bottom` | `34px` | iOS home indicator bar |
| `--safe-left` | `18px` | Left edge notch / padding for nav |
| `--safe-right` | `12px` | Right edge padding for nav |

`--safe-top` is applied as `padding-top` on `.nav-header`. `--safe-bottom` is applied as `padding-bottom` on `.tab-bar`. These values are fixed design-time constants; they do not use CSS env() because the app targets a known device form factor.

---

## Component Size Tokens

Fixed-dimension tokens for interactive elements. These are semantic aliases over the component size primitives.

| Token | Value | Component |
|-------|-------|-----------|
| `--size-nav` | `99px` | Nav header total height |
| `--size-logo-row` | `26px` | Height of the logo row inside nav |
| `--size-logo-btn` | `26px` | Width and height of the nav logo icon button |
| `--size-nav-actions-h` | `36px` | Height of the nav actions cluster |
| `--size-nav-actions-w` | `110px` | Width of the nav actions cluster |
| `--size-tab-bar` | `87px` | Tab bar total height |
| `--size-tab-item` | `52px` | Height of each tab bar button |
| `--size-btn-icon` | `36px` | Width and height of `.btn-icon` |
| `--size-btn-pill` | `32px` | Height of `.btn-pill` |
| `--size-avatar-lg` | `30px` | Large avatar chip diameter |
| `--size-avatar-md` | `22px` | Medium avatar chip diameter |
| `--size-avatar-sm` | `22px` | Small avatar chip diameter (same as md currently) |
| `--size-progress-track` | `4px` | Height of the progress bar track and segments |
| `--size-dot` | `3px` | Diameter of `.dot-separator` and gap between progress segments |
