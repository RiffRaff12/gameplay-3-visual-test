---
name: Motion & Transitions
category: Foundation
---

## Duration tokens

| Token | Primitive | Value | When to use |
|-------|-----------|-------|-------------|
| `--motion-duration-quick` | `--primitive-duration-fast` | 150ms | Micro-interactions: button press, toggle, hover state |
| `--motion-duration-base` | `--primitive-duration-base` | 200ms | Standard UI transitions: panel open, tab switch |
| `--motion-duration-slow` | `--primitive-duration-slow` | 300ms | Sheet slide-in, modal enter, page transition |

## Easing tokens

| Token | Primitive | Value | When to use |
|-------|-----------|-------|-------------|
| `--motion-easing` | `--primitive-easing-default` | `ease-in-out` | All standard transitions |
| `--primitive-easing-spring` | — | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy entrance animations (not aliased yet — alias before using) |

## Usage

```css
/* standard button transition */
transition: background var(--motion-duration-quick) var(--motion-easing),
            box-shadow var(--motion-duration-quick) var(--motion-easing);

/* sheet slide-in */
transition: transform var(--motion-duration-slow) var(--motion-easing);
```

Never write raw `ms` values in a `transition` property. If none of the three duration steps fits, add a new primitive to `tokens.css` and alias it before using.

## Blur

The frosted glass blur (`--blur-glass`, 12px) is a static filter, not animated. Do not transition `backdrop-filter` — it is expensive on mobile and causes jank on iOS Safari.
