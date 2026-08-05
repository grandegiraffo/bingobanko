# AGENTS.md — BingoBanko

Vue 3 + TypeScript SPA: bingo boards of movie/TV tropes, bilingual (Danish/English), hosted on Cloudflare Workers.
Additional conventions live in [`.github/copilot-instructions.md`](.github/copilot-instructions.md).

## Commands

```bash
pnpm check          # THE gate: type-check → lint → format → test:run
pnpm test:run       # one-shot tests (plain `pnpm test` is vitest WATCH mode — never use in an agent session)
pnpm test:run src/i18n.spec.ts        # single file
pnpm test:run -t 'should mount'       # single test by name
pnpm type-check     # vue-tsc (tsconfig.app) + tsc (tsconfig.node)
pnpm lint:fix / pnpm format:fix
pnpm deploy:worker  # pnpm build && wrangler deploy --config wrangler.jsonc
```

Run `pnpm check` before committing. CI (`.github/workflows/build.yml`, **pull requests only**) runs `lint → format → build → test:coverage` with `pnpm install --frozen-lockfile`.

Node (version see `.nvmrc`), pnpm (version see `package.json` -> `packageManager`). Both pinned; mismatches break installs.

## Toolchain quirks

- **`pnpm-workspace.yaml` exists but this is NOT a monorepo** (no `packages:`). It carries `minimumReleaseAge: 1441` — packages published in the last ~24h are refused by the installer (Cloudflare/wrangler packages are exempt) — plus security `overrides`. Adding a freshly published dependency will fail install; that is expected, not a bug.
- **Vitest config lives inside `vite.config.ts`** (`test: { globals: true, environment: 'happy-dom' }`). There is no `vitest.config.ts`.
- **ESLint config is TypeScript** (`eslint.config.ts`, flat config, loaded via jiti) and uses `recommendedTypeChecked` with `projectService` — new files must be covered by a tsconfig or linting errors out.
- Two TS projects: `tsconfig.app.json` (`src/**`, owns the `@/*` path alias) and `tsconfig.node.json` (`vite.config.ts`, `eslint.config.ts` only). Shared options in `tsconfig.base.json` (`strict`, `noUnusedLocals`, `noUnusedParameters`).
- Vite `base` comes from the `BASE_PATH` env var, default `/`.
- Prettier: single quotes, semicolons, `printWidth: 100`, `trailingComma: all`.

## Architecture

- `src/main.ts` → `App.vue` → `src/components/bingo-game.vue` (~650 lines; the whole game lives here). Styles in `src/components/bingo-game.css` + `src/style.css`. Plain CSS, no framework.
- `src/worker.ts` is the Cloudflare Workers entry (`wrangler.jsonc` → `main`): serves `./dist` via the `ASSETS` binding with SPA fallback, adds `/health`, and sets cache headers (`/assets/*` immutable, HTML `no-cache`). Deploy requires a fresh `dist/`, which `deploy:worker` builds.

### Game data (`src/game-data/*.ts`)

- Files are **auto-discovered** via `import.meta.glob('../game-data/*.ts', { eager: true })` — there is no registry to update. Each file must `export const GameModule: BingoGame` (`{ GameId, GameName, GameSquares }`).
- Name files `<locale>-<slug>.ts` where the stem equals `GameId` (the loader falls back to the filename stem) and the prefix is `da-` or `en-`. **The `da-`/`en-` prefix drives the UI locale**: selecting a game calls `setLocale()` from the id prefix, overriding `?lang=`/`localStorage`. A missing prefix silently leaves the locale unchanged.
- Each existing file holds **85 squares**; the board renders a random 15 (`MAX_BOARD_SIZE`). Square ids must be unique within a file (10-char ids from `short-unique-id`) — the shareable-order encoding rejects duplicates.
- `BingoSquare = { id, title, description, category, marked }`, `category ∈ mainPlot | subPlot | character | visual | quote | meta` (each maps to a HugeIcons icon in `bingo-game.vue`). Data files use `BingoSquareTemplate` (no `marked`).
- `DEFAULT_GAME_ID = 'en-80s-action-tv-tropes'` in `bingo-game.vue`.

### URL state

`?g=<GameId>&r=<order>` is written with `history.replaceState` on load, shuffle, and game change; `g` is always written before `r`, other params are preserved. `r` is base64url of the comma-joined square ids; it is rejected (and reshuffled) unless the length equals the board size, ids are unique, and all exist in the game. `?lang=da|en` is only honoured when the game id has no locale prefix.

### i18n

`src/i18n.ts` creates a **module-load singleton**; `getInitialLocale()` (URL `?lang` → `localStorage` → `navigator.language` → `da`) runs once at import and cannot be re-triggered in tests — that is why `i18n.spec.ts` asserts the source precedence indirectly. Keep `src/locales/da.json` and `src/locales/en.json` in key parity; no hardcoded UI strings.

## Testing

- Co-locate specs as `*.spec.ts` next to the file under test; mount with `@vue/test-utils` + `global: { plugins: [i18n] }`.
- Tests reach into `<script setup>` bindings via `wrapper.vm as unknown as { ... }` (e.g. `DEFAULT_GAME_ID`, `availableGames`). Renaming those locals breaks tests without a type error.
- `beforeEach` must reset URL state (`window.history.replaceState({}, '', window.location.pathname)`) and `localStorage`, since the component writes to both.

## Conventions

- Import from `src/` via the `@/` alias.
- Commits: `<type>: <description>` (`feat:`, `fix:`, `refactor:`, `chore:`, `test:`).
- Add `$schema` to JSON/JSONC config files and a `# yaml-language-server: $schema=...` header to YAML files.
- Don't change the responsive breakpoints (mobile <768px, tablet 768–1199px, desktop ≥1200px) without being asked.
- No `console.*` / `debugger` (ESLint warns, so CI won't catch them). Never touch `node_modules/`, `dist/`, `coverage/`.
