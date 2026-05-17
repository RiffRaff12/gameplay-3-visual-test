---
name: Elevation & Shadows
category: Foundation
---

## Shadow tokens

| Token | Primitive | Raw value | Purpose |
|-------|-----------|-----------|---------|
| `--elevation-card` | `--primitive-shadow-xs` | `rgba(0,0,0,0.04) 0px 1px 2px 0px` | Subtle lift for session cards |
| `--elevation-glass-btn` | `--primitive-shadow-sm` | `rgba(255,255,255,0.4) 0px 1px 0px 0px inset, rgba(0,0,0,0.08) 0px 1px 2px 0px` | Glass-effect icon button |

## Frosted glass pattern

The nav header and tab bar use a frosted glass treatment — a semi-transparent background combined with `backdrop-filter: blur`. This is not a `box-shadow`; it is composed of two tokens:

| Token | Value | Property |
|-------|-------|----------|
| `--color-bg-nav` | `rgba(255,255,255,0.85)` | `background` |
| `--color-bg-tabbar` | `rgba(255,255,255,0.92)` | `background` |
| `--blur-glass` | `12px` | `backdrop-filter: blur(var(--blur-glass))` |

The nav is slightly more transparent (0.85) than the tab bar (0.92) so content scrolling behind it reads clearly while the tab bar stays more opaque to remain readable.

## Usage

```css
/* card */
box-shadow: var(--elevation-card);

/* glass button */
box-shadow: var(--elevation-glass-btn);

/* frosted surface */
background: var(--color-bg-nav);
backdrop-filter: blur(var(--blur-glass));
-webkit-backdrop-filter: blur(var(--blur-glass));
```

Never write raw `rgba(...)` values inside a `box-shadow` or `background` property in component CSS. Define the value in `tokens.css` first.
