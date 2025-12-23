# Copilot Instructions for BingoBanko

## Project Overview

BingoBanko is a bingo game web application featuring movie and TV tropes in Danish. Built with Vue 3, TypeScript, and Vite, it's optimized for mobile, tablet (iPad), and desktop with responsive design.

## Technology Stack

- **Vue 3** - Using Composition API with `<script setup>` syntax
- **TypeScript** - Strict mode enabled
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing framework
- **happy-dom** - Test environment
- **ESLint** - Code linting with TypeScript and Vue plugins
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Production hosting

## Development Commands

- `npm run dev` - Start local development server
- `npm run build` - Type check and build for production
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Coding Conventions

### Vue Components

- Use Vue 3 Composition API with `<script setup>` syntax
- Component files should use kebab-case naming (e.g., `bingo-game.vue`)
- Follow the template-script-style order in SFC files
- Use TypeScript for all script sections
- Prefer `v-for` with `:key` for list rendering
- Use `@click` and other event handlers with kebab-case event names

### TypeScript

- Strict mode is enabled - follow strict type checking
- Target: ES2022
- Use `type` for unions, primitives, and computed types; use `interface` for object shapes that may be extended
- Avoid `any` types - use proper typing
- Enable all strict compiler options (noUnusedLocals, noUnusedParameters, etc.)

### Code Style

- Use single quotes for strings in TypeScript/JavaScript
- No console statements (use sparingly, only when necessary)
- No debugger statements
- Follow ESLint rules configured in `eslint.config.ts`
- Use 2 spaces for indentation
- Multi-word component names rule is disabled

### Testing

- Write tests using Vitest and `@vue/test-utils`
- Test files should be co-located with components as `*.spec.ts`
- Use `describe` and `it` blocks from Vitest
- Mount components using `@vue/test-utils` mount function
- Use `await wrapper.vm.$nextTick()` for waiting on DOM updates
- Test both user interactions and component state

### File Organization

- `/src/components` - Vue components and their tests
- `/src/game-data` - Game data modules (TypeScript files)
- `/src/types` - TypeScript type definitions
- `/src/assets` - Static assets
- Use `@/` alias for imports from `src` directory

### Project-Specific Patterns

- Game data modules export arrays of bingo squares
- Bingo squares have: title, description, category, and marked state
- URL parameters are used for game selection (`g`) and randomization (`r`)
- The app supports multiple game types loaded dynamically
- Danish language is used for all UI text
- Responsive breakpoints: Mobile (<768px), Tablet (768-1199px), Desktop (≥1200px)

### Build Configuration

- Base URL for production: `/bingobanko/` (GitHub Pages repository name)
- Base URL for development: `/`
- Vite is configured with Vue plugin and path alias `@`

## Code Quality Requirements

- All code must pass TypeScript type checking
- All code must pass ESLint linting
- All changes should include appropriate tests
- Tests must pass before merging
- Maintain test coverage

## CI/CD Pipeline

- Pull requests trigger CI workflow that runs: lint, build, and test with coverage
- Merges to main trigger GitHub Pages deployment
- Node.js version is specified in `.nvmrc` file (v24)

## Additional Notes

- The application is designed for iPad and mobile web
- UI text is in Danish
- The project uses HugeIcons for category icons (categories: mainPlot, subPlot, character, visual, quote, meta)
- Focus on maintaining responsive design across all screen sizes
