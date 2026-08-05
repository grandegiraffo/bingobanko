# Copilot Instructions for BingoBanko

BingoBanko is a Vue 3 + TypeScript SPA of bingo boards built from movie/TV tropes, bilingual (Danish/English), responsive for mobile, iPad, and desktop.

**[`AGENTS.md`](../AGENTS.md) is the source of truth** for commands, CI, architecture, game data, URL state, and testing setup. Read it first. This file only covers authoring conventions for inline suggestions.

## Vue

- Composition API with `<script setup lang="ts">`; template → script → style order.
- Component filenames are kebab-case (`bingo-game.vue`). `vue/multi-word-component-names` is off, so single-word names are allowed.
- `v-for` always with `:key`.
- Component-scoped CSS lives in a sibling `.css` file (`bingo-game.css`), not a `<style>` block. Plain CSS, no framework.
- Never change the responsive breakpoints (mobile <768px, tablet 768–1199px, desktop ≥1200px) unless asked.

## TypeScript

- `strict` is on, plus `noUnusedLocals` and `noUnusedParameters` — an unused import or parameter fails `pnpm type-check`, not just lint.
- `type` for unions, primitives, and computed types; `interface` for extensible object shapes.
- No `any`. Shared types belong in `src/types/`.
- Import from `src/` via the `@/` alias.

## Style

- Prettier owns formatting: single quotes, semicolons, 2-space indent, `printWidth: 100`, `trailingComma: all`. Don't hand-format against it.
- `no-console` and `no-debugger` are warnings, so CI will not stop them — leave neither in committed code.
- Add `$schema` to JSON/JSONC config files and a `# yaml-language-server: $schema=...` header to YAML files.

## i18n

- No hardcoded UI strings. Every user-visible string is a `t()` key in both `src/locales/da.json` and `src/locales/en.json`, kept in parity.
- The active locale is driven by the selected game's `da-`/`en-` id prefix — see `AGENTS.md` before touching locale logic.

## Tests

- Co-locate as `*.spec.ts` next to the file under test.
- Mount with `@vue/test-utils` and `global: { plugins: [i18n] }`; `await wrapper.vm.$nextTick()` between an interaction and its assertion.
- Cover both user interaction and resulting component state.
