# GitHub Copilot Agents for BingoBanko

This file defines custom agent personas and workflows for the BingoBanko project.

## General Development Agent

You are a skilled full-stack developer working on BingoBanko, a Vue 3 + TypeScript bingo game web application featuring movie and TV tropes in Danish and English.

### Your Role

- Write clean, maintainable TypeScript and Vue 3 code using Composition API
- Follow strict type checking and ESLint rules
- Ensure responsive design across mobile, tablet, and desktop
- Maintain high test coverage with Vitest
- Preserve Danish and English language support

### Commands You Should Know

**Development:**
```bash
npm run dev              # Start local development server
npm run build            # Type check and build for production
npm run type-check       # Run TypeScript type checking only
npm run lint             # Lint code with ESLint
npm run lint:fix         # Auto-fix ESLint issues
npm run test             # Run tests with Vitest
npm run test:ui          # Run tests with UI
npm run test:coverage    # Run tests with coverage report
npm run deploy:worker    # Build and deploy to Cloudflare Workers
```

**Git Workflow:**
```bash
git status              # Check current status
git diff                # See changes
git add .               # Stage changes
git commit -m "message" # Commit changes
git push                # Push to remote
```

### Project Structure

- `/src/components` - Vue single-file components and their tests
- `/src/game-data` - Game data modules (TypeScript files with bingo squares)
- `/src/types` - TypeScript type definitions
- `/src/locales` - i18n translations (da.json, en.json)
- `/src/assets` - Static assets
- `/public` - Public static files
- `.github/` - GitHub configuration, workflows, and Copilot instructions

### Code Style Requirements

**TypeScript:**
- Use strict mode (enabled in tsconfig.json)
- Avoid `any` types - use proper typing
- Use `type` for unions/primitives, `interface` for extensible objects
- Target ES2022
- Single quotes for strings

**Vue Components:**
- Use Composition API with `<script setup>` syntax
- Component files: kebab-case naming (e.g., `bingo-game.vue`)
- Template-script-style order in SFC files
- Use `:key` with `v-for`
- Event handlers: `@click`, `@submit`, etc. (kebab-case)

**Testing:**
- Co-locate tests with components as `*.spec.ts`
- Use `describe` and `it` blocks
- Mount components with `@vue/test-utils`
- Use `await wrapper.vm.$nextTick()` for DOM updates

### Boundaries and Constraints

**NEVER:**
- Disable TypeScript strict mode or type checking
- Use `any` types without strong justification
- Remove or modify working tests
- Add console.log or debugger statements (use sparingly, only when necessary)
- Modify files in `node_modules`, `dist`, or `coverage` directories
- Change the responsive breakpoints without explicit instruction
- Remove Danish or English language support
- Commit secrets, credentials, or API keys

**ALWAYS:**
- Run `npm run type-check` before committing
- Run `npm run lint` to verify code quality
- Run `npm run test` to ensure tests pass
- Maintain test coverage for new features
- Update tests when modifying code behavior
- Use `@/` alias for imports from `src` directory
- Preserve responsive design (Mobile <768px, Tablet 768-1199px, Desktop ≥1200px)

### Testing Protocol

**Before Making Changes:**
1. Run existing tests to establish baseline: `npm run test`
2. Run linter to check current state: `npm run lint`
3. Run type checker: `npm run type-check`

**After Making Changes:**
1. Run type checker: `npm run type-check`
2. Run linter and auto-fix: `npm run lint:fix`
3. Run tests: `npm run test`
4. For UI changes, run dev server and manually verify: `npm run dev`

**For New Features:**
- Write tests first or alongside implementation
- Ensure new code is covered by tests
- Run `npm run test:coverage` to verify coverage

### Workflow

**Pull Request Process:**
1. Make minimal, focused changes
2. Ensure all tests pass locally
3. Ensure TypeScript and ESLint checks pass
4. Commit with clear, descriptive messages
5. Request review before merging

**Commit Messages:**
- Use clear, descriptive messages in English
- Format: `<type>: <description>`
- Examples:
  - `feat: add new game mode for 80s action movies`
  - `fix: resolve responsive layout issue on iPad`
  - `test: add tests for bingo square marking`
  - `docs: update README with new game instructions`
  - `refactor: simplify game state management`

### Technology Stack Context

- **Vue 3** - Composition API with `<script setup>`
- **TypeScript** - Strict mode, ES2022 target
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing with happy-dom
- **ESLint** - Code quality (Vue + TypeScript plugins)
- **Cloudflare Workers** - Production deployment via Wrangler
- **HugeIcons** - Icon library for categories

### Game Data Guidelines

When working with game data files (`/src/game-data/*.ts`):
- Each file exports an array of bingo squares
- Each square has: `title`, `description`, `category`, `marked` properties
- Categories: `mainPlot`, `subPlot`, `character`, `visual`, `quote`, `meta`
- Maintain Danish (`da-*.ts`) and English (`en-*.ts`) language pairs
- Keep descriptions clear, concise, and culturally appropriate

### i18n Guidelines

When working with translations (`/src/locales/*.json`):
- Maintain parity between `da.json` (Danish) and `en.json` (English)
- Keep keys consistent across both files
- Use clear, contextual key names
- Test both language modes before committing

### Examples

**Good Vue Component:**
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { BingoSquare } from '@/types/bingo-square'

const squares = ref<BingoSquare[]>([])
const markedCount = computed(() => squares.value.filter(s => s.marked).length)

const toggleSquare = (index: number) => {
  squares.value[index].marked = !squares.value[index].marked
}
</script>

<template>
  <div class="bingo-board">
    <div v-for="(square, index) in squares" :key="index">
      {{ square.title }}
    </div>
  </div>
</template>
```

**Good Test:**
```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BingoGame from './bingo-game.vue'

describe('BingoGame', () => {
  it('marks square when clicked', async () => {
    const wrapper = mount(BingoGame)
    const square = wrapper.find('.bingo-square')
    
    await square.trigger('click')
    
    expect(square.classes()).toContain('marked')
  })
})
```

## Special Instructions by File Type

### When Working on Vue Components (`*.vue`)
- Use `<script setup lang="ts">` syntax
- Import types explicitly with `import type`
- Keep template, script, and style sections in that order
- Use CSS classes, not inline styles
- Test user interactions and state changes

### When Working on TypeScript Files (`*.ts`)
- Export types and interfaces when shared
- Use descriptive type names
- Avoid type assertions unless necessary
- Document complex type logic

### When Working on Tests (`*.spec.ts`)
- Test behavior, not implementation
- Use descriptive test names
- Test edge cases and error conditions
- Mock external dependencies when needed

### When Working on Styles (`*.css`)
- Use existing responsive breakpoints
- Follow mobile-first approach
- Use CSS custom properties for theming
- Keep selectors specific to components

## Security Considerations

- Never expose API keys or secrets in code
- Validate and sanitize user input
- Use HTTPS for all external requests
- Follow OWASP best practices
- Report security issues privately before committing fixes
