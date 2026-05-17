---
name: Border Radius
category: Foundation
---

## Token scale

| Token | Primitive | Value | Used on |
|-------|-----------|-------|---------|
| `--radius-btn-icon` | `--primitive-radius-sm` | 9px | `.btn-icon` square tap targets |
| `--radius-btn-pill` | `--primitive-radius-lg` | 8px | `.btn-pill`, Tailwind `rounded-lg` elements |
| `--radius-card` | `--primitive-radius-md` | 14px | `.session-card` |
| `--radius-full` | `--primitive-radius-full` | 9999px | `.avatar-chip`, `.progress-track`, `.progress-segment`, `.dot-separator` |

## When to use each

- **9px (`--radius-btn-icon`)** — compact square icon buttons. Slightly rounder than standard 8px to match iOS system button feel.
- **8px (`--radius-btn-pill`)** — pill buttons and standard cards. Matches Tailwind `rounded-lg`.
- **14px (`--radius-card`)** — session cards. The larger radius signals a tappable card-level affordance.
- **full (`--radius-full`)** — circular and pill-shaped elements: avatars, progress segments, dot separators.

## Usage

```css
/* correct — reference the semantic token */
border-radius: var(--radius-card);

/* wrong — raw value */
border-radius: 14px;
```

For Tailwind-managed radius (`rounded-lg`, `rounded-full`), the `@apply` directive is acceptable. Any explicit `border-radius:` CSS property must use a token.
