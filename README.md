# 🔢🔴 Bingo with movie and TV-tropes 🔴🔢

A bingo game app built using Vue and TypeScript for iPad and mobile web featuring classic Hallmark Christmas, Nordic Noir and other movie scenarios and tropes in Danish.

## Features

- **15 Bingo Squares** with random traditional Hallmark Christmas, Nordic Noir, and other movie or TV tropes
- **Interactive Gameplay**: Click/tap squares to mark them
- **Score Tracking**: Real-time counter showing marked squares
- **Reset Functionality**: Clear all marks to start a new game
- **Shareable**: Easy to share the particular layout of squares with friends and family
- **Responsive Design**: Optimized for mobile phones, tablets (iPad), and desktop

## Bingo Squares

Loaded and randomised by 🔌 `src/components/bingo-game.vue` from data in 💾 `src/game-data/**.ts` files. Defaults to the xmas game for now.

## Technology Stack

- **Vue** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **Pure CSS** - No external styling dependencies
- **Responsive Design** - Mobile-first approach
- **TypeScript** - Strongly typed JavaScript
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **GitHub Actions** - Automated builds and deployments
- **GitHub Pages** - Hosting for the live app

## Getting Started

### Prerequisites

- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) to manage Node.js versions
- [Node.js](https://nodejs.org/) (v24 LTS)
- [Javascript package manager (npm)](https://docs.npmjs.com/cli/v11/configuring-npm/package-json) (v11) comes with Node.js

### Installation

```bash
# Install the correct version of Node.js via the `.nvmrc` file
nvm use 

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Building for Production

Build for production is automatically handled by GitHub Actions and Pages on merges to main branch.

```bash
# To build locally, run
npm run build
```

## Usage

1. Open the [web app](https://grandegiraffo.github.io/bingobanko/) on your device
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
