# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```
npm run dev         # starts dev server on http://localhost:8080 (not 3000)
npm run build        # production build
npm run start         # serve production build
npm run lint          # eslint
npm run format        # prettier check (no write)
npm run format:fix    # prettier write
```

There is no test suite/framework configured in this repo currently.

## Architecture

This is a minimal Next.js App Router starter, not a full application — currently a single page (`app/page.tsx`) plus root layout. Its purpose is to demonstrate a baseline stack wiring, so when extending it, follow the existing patterns rather than introducing new ones.

- **State management**: `store/globalStore.ts` defines one Zustand store with a single nested state object `gs: GlobalStateData` and one generic setter `set(key, value)`, not per-field setters. Add new global fields to `GlobalStateData` and read/write them via `gs.<field>` / `set("<field>", value)`, following the same pattern rather than creating new stores or per-field actions.
- **Styling**: Tailwind CSS v4 with the daisyUI plugin (`app/globals.css`). Dark mode is a custom variant (`@custom-variant dark (&:where(.dark, .dark *))`) driven by a `dark` class on `document.documentElement`, not the OS-preference media query. Keep the class in sync with state via a `useEffect` keyed on the theme value (see `app/page.tsx`) rather than toggling the DOM class inline inside the click handler — the effect form also applies on mount, not just on subsequent toggles.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/store/globalStore`.
- **Toasts**: `react-hot-toast`'s `<Toaster>` is mounted once in `app/layout.tsx`; call `toast.*()` from anywhere without re-mounting a provider.
- **Images**: `next.config.ts` sets `images.unoptimized: true`, so images can be sourced from anywhere (or use plain `src` paths) without configuring `remotePatterns`.

## Code style (enforced by lint/format, not just convention)


- ESLint (`eslint.config.mjs`) extends `eslint-config-next` (core-web-vitals + typescript) plus `eslint-config-prettier`, and adds `react/jsx-sort-props` (alphabetical, shorthand props not forced first/last, callbacks last). Let editor format-on-save/lint-fix handle this rather than hand-ordering props/imports.
- Tailwind classes are conventionally grouped by function (layout → box model → positioning → flex/grid → sizing/spacing → typography → backgrounds → borders → effects → filters → transitions → transforms → interactivity → accessibility → tables → state variants → responsive variants), matching `prettier-plugin-tailwindcss`'s own sort order — don't fight this by hand-ordering differently.
