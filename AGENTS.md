# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Astro 4** static portfolio site (no backend, database, or external services). It uses **pnpm** (pinned to `pnpm@6.14.5` via `package.json` `packageManager`) and Node 20+ (Node 22 works). Tailwind CSS provides styling with a class-based dark mode; Astro i18n serves 6 locales (`es` default, plus `en`, `ar`, `fr`, `pt`, `it`).

Standard commands live in `package.json` scripts; use those rather than duplicating them here:
- Dev server: `pnpm dev` (serves at `http://localhost:4321`). The dev server is the only service needed to test the product end to end.
- Lint / type-check: `pnpm build` runs `astro check` (type/`.astro` validation) before `astro build`. There is no separate ESLint config; `astro check` is the type/lint gate.
- Build: `pnpm build` (outputs static site to `dist/`, gitignored).
- Preview built output: `pnpm preview` (also `http://localhost:4321`; requires a prior `pnpm build`).

Non-obvious notes:
- `pnpm build` emits a benign CSS minify warning (`Expected percentage but found ":"` referencing a `.dark` Tailwind utility). This is pre-existing and does not fail the build.
- No `.env` is required; `.env`/`.env.production` are gitignored but unused by the code.
- The dev server binds to `localhost` by default. Pass `pnpm dev --host` to expose it on the network if needed.
