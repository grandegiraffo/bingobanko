<script setup lang="ts">
import BingoGame from './components/bingo-game.vue'
</script>

<template>
  <div id="app">
    <BingoGame />
  </div>
</template>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a472a 0%, #2d5f3f 100%);
  padding: 0;
  margin: 0;
}
</style>
