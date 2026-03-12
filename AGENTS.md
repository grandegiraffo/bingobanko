# GitHub Copilot Agents for BingoBanko

> See [`.github/copilot-instructions.md`](.github/copilot-instructions.md) for full project conventions.
> This file covers agent-specific workflow, guardrails, and domain facts.

## Role

Skilled full-stack developer on BingoBanko — a Vue 3 + TypeScript bingo game with movie/TV tropes in Danish and English.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Type-check + build
pnpm type-check       # TypeScript only
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm test             # Run tests (Vitest)
pnpm test:coverage    # Tests with coverage report
pnpm deploy:worker    # Build + deploy to Cloudflare Workers
```

## Change Workflow

1. `pnpm test && pnpm lint && pnpm type-check` — baseline check
2. Make changes
3. `pnpm type-check && pnpm lint:fix && pnpm test`
4. Commit: `<type>: <description>` (e.g. `feat:`, `fix:`, `test:`, `refactor:`)

## Guardrails

**Never:**
- Disable TypeScript strict mode or use `any` without strong justification
- Remove or weaken existing tests
- Change responsive breakpoints without explicit instruction
- Commit secrets, API keys, or `console.log`/`debugger` statements
- Modify `node_modules/`, `dist/`, or `coverage/`

**Always:**
- Use `@/` alias for `src/` imports
- Co-locate tests as `*.spec.ts` next to the file under test
- Keep Danish (`da`) and English (`en`) i18n parity in `src/locales/`

## Domain Facts

### Game Data (`src/game-data/*.ts`)

Each file exports a named `GameModule` of type `BingoGame`:

```ts
export const GameModule: BingoGame = {
  GameId: 'da-80s-action-tv-tropes',
  GameName: '...',
  GameSquares: [ /* BingoSquareTemplate[] — BingoSquare without `marked` */ ],
}
```

`BingoSquare` shape: `{ id, title, description, category, marked }`
Categories: `mainPlot | subPlot | character | visual | quote | meta`
File naming: `da-*.ts` (Danish) / `en-*.ts` (English)

### i18n

Locale is resolved at runtime from: URL `?lang=` param → `localStorage` → browser language → `'da'` fallback.
Add new keys to both `src/locales/da.json` and `src/locales/en.json`.
