# gameplay-3 — AI Instructions

## Stack

Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 3 · PostCSS

## Project structure

```
app/           Next.js app-router pages (layout.tsx, page.tsx, archive/, community/)
globals.css    Component layer — all custom CSS classes live here
tokens.css     Design token system (Layer 1 primitives + Layer 2 semantic aliases)
specs/         Human- and LLM-readable design specs (foundations + components)
scripts/       token-audit.js — CI-ready hardcoded-value scanner
design-reference/  Source HTML files from the original Figma export
```

## Before writing or modifying any UI code

1. **Read the relevant spec** in `specs/`. Start with `specs/tokens/token-reference.md` if you are unsure which token to use.
2. **Use only tokens from `tokens.css`**. Every `color`, `background`, `padding`, `margin`, `gap`, `border-radius`, `font-size`, `font-weight`, `box-shadow`, `z-index`, and `transition` in a CSS rule must reference a `var(--token)`. Raw pixel/hex/rgba values are not permitted outside of `tokens.css`.
3. **Run the token audit** before committing:
   ```bash
   node scripts/token-audit.js
   ```
   Zero errors required. Warnings should be resolved when possible.

## Token architecture (three layers)

| Layer | File | Rule |
|-------|------|------|
| 1 — Primitives | `tokens.css` `:root` block 1 | Raw named values. Only edit to add/change design primitives. |
| 2 — Semantic aliases | `tokens.css` `:root` block 2 | Contextual names → Layer 1 with fallbacks. Use these in components. |
| 3 — Components | `globals.css` `@layer components` | Reference Layer 2 only. Never reference Layer 1 directly or raw values. |

## Adding a new component

1. Find or create a spec file in `specs/components/`.
2. List every token the component needs.
3. If a needed value has no token, add it to `tokens.css` Layer 1 then Layer 2 first.
4. Write the component class in `globals.css` referencing only Layer 2 `var(--token)` names.
5. Run `node scripts/token-audit.js` — must exit 0.

## Tailwind utilities

Tailwind `@apply` directives are allowed for layout, flex, and Tailwind color utilities (e.g. `@apply text-zinc-950 bg-white rounded-full`). However, any property that has a design token (font-size, letter-spacing, border-radius, box-shadow, gap, padding, margin, z-index) must use `var(--token)` as a raw CSS property instead of an `@apply` shorthand.

## Safe areas

This is a mobile-first iOS app. Use safe area tokens — do not hardcode pixel values for top/bottom padding:

```css
padding-top: var(--safe-top);     /* 47px — absorbs iOS status bar */
padding-bottom: var(--safe-bottom); /* 34px — covers home indicator */
```

## Token quick reference

| Need | Token |
|------|-------|
| Primary text | `--color-text` |
| Secondary / muted text | `--color-text-secondary` / `--color-text-muted` |
| Page background | `--color-bg-page` |
| Card background | `--color-bg-card` |
| Card border | `--color-border` |
| Frosted nav bg | `--color-bg-nav` |
| Frosted tab bg | `--color-bg-tabbar` |
| Card shadow | `--elevation-card` |
| Glass button shadow | `--elevation-glass-btn` |
| Body text size | `--text-size-body` |
| Section title | `--text-size-section-title` |
| Card radius | `--radius-card` |
| Nav z-index | `--z-nav` |
| Frosted blur | `--blur-glass` |
| Transition (standard) | `var(--motion-duration-base) var(--motion-easing)` |
