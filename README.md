# 🎄 Hallmark Julefilm Bingo 🎄

A bingo game app built using Vue.js and TypeScript for iPad and mobile web featuring classic Hallmark Christmas movie tropes in Danish.

## Features

- **15 Bingo Squares** with traditional Hallmark Christmas movie scenarios
- **Interactive Gameplay**: Click/tap squares to mark them
- **Score Tracking**: Real-time counter showing marked squares
- **Reset Functionality**: Clear all marks to start a new game
- **Responsive Design**: Optimized for mobile phones, tablets (iPad), and desktop

## Bingo Squares

1. **Hjembyens hjemkomst** - Small-town homecoming with old flame
2. **Juletræ i fare** - Christmas tree farm in danger
3. **Snevejr og skæbne** - Unexpected snowfall bringing people together
4. **Børns juleønske** - Child wishes for parent to find love
5. **Gamle breve, ny kærlighed** - Old love letters inspire new romance
6. **Mistelten-magi** - Mistletoe magic and first kiss
7. **Falsk forlovelse** - Fake relationship becomes real
8. **Julens festival-fejde** - Rivals planning Christmas festival together
9. **Julehaderen** - Christmas hater finds joy and love
10. **Prins incognito** - Tourist reveals they're royalty
11. **Grinchen i jakkesæt** - Cold businessman softens for Christmas
12. **Ex'en vender tilbage** - Old flame returns unexpectedly
13. **Bagekonkurrence-kaos** - Baking competition with romance
14. **Julens fortryllelse** - Magical snow globe or mysterious helper
15. **Juleaften-frieri** - Christmas Eve proposal

## Technology Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **Pure CSS** - No external styling dependencies
- **Responsive Design** - Mobile-first approach
- **TypeScript** - Strongly typed JavaScript
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (v24 LTS)
- npm (v11 or higher)

### Installation

```bash
# Install dependencies:
npm install

# Start local development server:
npm run dev
```

### Building for Production

```bash
# Build for production is automatically handled by GitHub Actions and Pages on merges to main branch
# But to build locally, run:
npm run build
```

## Usage

1. Open the app on your device
2. Watch your favorite Hallmark Christmas movie
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

