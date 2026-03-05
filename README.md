# 🔢🔴 Bingo with movie and TV-tropes 🔴🔢

A bingo game app built using Vue and TypeScript for iPad and mobile web featuring classic Hallmark Christmas, Nordic Noir and other movie scenarios and tropes in Danish and English.

## Features

- **15 Bingo Squares** with random traditional Hallmark Christmas, Nordic Noir, and other movie or TV tropes
- **Interactive Gameplay**: Click/tap squares to mark them
- **Score Tracking**: Real-time counter showing marked squares
- **Reset Functionality**: Clear all marks to start a new game
- **Shareable**: Easy to share the particular layout of squares with friends and family
- **Responsive Design**: Optimized for mobile phones, tablets (iPad), and desktop

## Bingo Squares

Loaded and randomised by 🔌 `src/components/bingo-game.vue` from data in 💾 `src/game-data/**.ts` files.

## Technology Stack

- **Node.js** - JavaScript runtime
- **TypeScript** - Strongly typed JavaScript
- **pnpm** - Performant package manager
- **Vue** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **Pure CSS** - No external styling dependencies
- **Responsive Design** - Mobile-first approach
- **TypeScript** - Strongly typed JavaScript
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **GitHub Actions** - Automated builds and tests
- **Cloudflare Workers** - Edge hosting via Wrangler

## Getting Started

### Prerequisites

#### Node.js (v24.x LTS) via [nvm](https://github.com/nvm-sh/nvm)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
source ~/.bashrc # or
source ~/.zshrc # or just open a new terminal
nvm install # picks up the version specified in the .nvmrc file
```
#### [pnpm](https://pnpm.io/installation) (v10.x)
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### Essential commands

```bash
# Install dependencies
pnpm i

# Run as local development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Update dependencies
pnpm up

# Type check
pnpm type-check

# Lint code
pnpm lint

# Lint and auto-fix
pnpm lint:fix
```

### Deploying to Cloudflare Workers

The app runs as a static site on Cloudflare Workers. Configuration is in `wrangler.jsonc`.

```bash
# Log in to Cloudflare
pnpm dlx wrangler login

# Implicit build and then deploy
pnpm deploy:worker

# Or just preview locally
pnpm dlx wrangler dev --config wrangler.jsonc
```

## Usage

1. Open your deployed URL (e.g., your Cloudflare Worker route) on your device
2. Watch your favorite Hallmark Christmas, Nordic Noir, or other movie or TV show
3. Click/tap on squares when the scenarios occur
4. Try to mark as many squares as possible
5. Use the "Nulstil spil" (Reset game) button to start over

## Responsive Breakpoints

- **Mobile**: < 768px - Single column layout
- **Tablet (iPad)**: 768px - 1199px - 3-column grid
- **Desktop**: ≥ 1200px - 5-column grid

## Development

The app uses Vue 3 Composition API with `<script setup>` syntax for cleaner, more concise code.

Main component: `src/components/bingo-game.vue`

## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
