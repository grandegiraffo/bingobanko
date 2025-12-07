import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Use the repository name when building for GitHub Pages so asset URLs resolve correctly.
  base: mode === 'development' ? '/' : '/bingobanko/',
  plugins: [vue()],
}))
