import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import BingoGame from './bingo-game.vue'
import { i18n, setLocale } from '@/i18n'

describe('BingoGame', () => {
  beforeEach(() => {
    // Clear URL parameters before each test
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', window.location.pathname)
    }
  })

  type GameOption = {
    id: string
    name: string
  }

  const getVm = (wrapper: ReturnType<typeof mount>) => {
    return wrapper.vm as unknown as {
      DEFAULT_GAME_ID: string
      availableGames: GameOption[]
    }
  }

  const mountWithI18n = () => mount(BingoGame, {
    global: {
      plugins: [i18n]
    }
  })

  const getLocalePrefix = (gameId: string): 'da' | 'en' | null => {
    const prefix = gameId.split('-')[0]
    if (prefix === 'da' || prefix === 'en') return prefix
    return null
  }

  it('should mount the component', () => {
    const wrapper = mountWithI18n()
    expect(wrapper.exists()).toBe(true)
  })

  it('should have a DEFAULT_GAME_ID that actually exists in the games list', () => {
    const wrapper = mountWithI18n()
    const vm = getVm(wrapper)
    const defaultGameId = vm.DEFAULT_GAME_ID
    const gameExists = vm.availableGames.some((game) => game.id === defaultGameId)
    expect(gameExists).toBe(true)
  })

  it('should default to DEFAULT_GAME_ID and persist g before r in the URL', async () => {
    const wrapper = mountWithI18n()
    await wrapper.vm.$nextTick()

    const vm = getVm(wrapper)
    const defaultGameId = vm.DEFAULT_GAME_ID

    const select = wrapper.find('#game-select')
    expect(select.exists()).toBe(true)
    const selectElement = select.element
    if (!(selectElement instanceof HTMLSelectElement)) {
      throw new Error('Expected game select to be an HTMLSelectElement')
    }
    expect(selectElement.value).toBe(defaultGameId)

    expect(window.location.search.startsWith(`?g=${defaultGameId}&r=`)).toBe(true)
  })

  it('should switch games via dropdown and update the URL g parameter', async () => {
    const wrapper = mountWithI18n()
    await wrapper.vm.$nextTick()

    const select = wrapper.find('#game-select')
    expect(select.exists()).toBe(true)

    // Change the game selection
    await select.setValue('en-nordicnoir-tv-tropes')
    await wrapper.vm.$nextTick()

    // Confirm dialog should appear
    const confirmButton = wrapper.find('.confirm-accept')
    expect(confirmButton.exists()).toBe(true)
    await confirmButton.trigger('click')
    await wrapper.vm.$nextTick()

    // After confirmation, the URL should be updated
    expect(window.location.search.startsWith('?g=en-nordicnoir-tv-tropes&r=')).toBe(true)

    const squares = wrapper.findAll('.bingo-square')
    expect(squares.length).toBe(15)
  })

  it('should toggle square marked state when clicked', async () => {
    const wrapper = mountWithI18n()

    // Wait for component to be fully mounted
    await wrapper.vm.$nextTick()

    // Find the first bingo square
    const firstSquare = wrapper.find('.bingo-square')
    expect(firstSquare.exists()).toBe(true)

    // Initially, the square should not be marked
    expect(firstSquare.classes()).not.toContain('marked')

    // Click the square to mark it
    await firstSquare.trigger('click')

    // After clicking, the square should be marked
    expect(firstSquare.classes()).toContain('marked')

    // Click again to unmark it
    await firstSquare.trigger('click')

    // After second click, the square should not be marked
    expect(firstSquare.classes()).not.toContain('marked')
  })

  it('should render exactly 15 bingo squares', async () => {
    const wrapper = mountWithI18n()

    // Wait for component to be fully mounted
    await wrapper.vm.$nextTick()

    // Find all bingo squares
    const squares = wrapper.findAll('.bingo-square')
    
    // Should have exactly 15 squares
    expect(squares.length).toBe(15)

    // Each square should have the required content elements
    squares.forEach(square => {
      expect(square.find('.square-content').exists()).toBe(true)
      expect(square.find('.square-title').exists()).toBe(true)
      expect(square.find('.square-description').exists()).toBe(true)
      expect(square.find('.square-category').exists()).toBe(true)
    })
  })

  it('should create different board orders when shuffled', async () => {
    const wrapper = mountWithI18n()
    await wrapper.vm.$nextTick()

    // Get initial square titles
    const initialSquares = wrapper.findAll('.bingo-square')
    const initialTitles = initialSquares.map(sq => sq.find('.square-title').text())

    // Find and click the shuffle button
    const shuffleButton = wrapper.find('.shuffle-button')
    expect(shuffleButton.exists()).toBe(true)
    await shuffleButton.trigger('click')

    // Confirm the shuffle action in the dialog
    await wrapper.vm.$nextTick()
    const confirmButton = wrapper.find('.confirm-accept')
    expect(confirmButton.exists()).toBe(true)
    await confirmButton.trigger('click')
    await wrapper.vm.$nextTick()

    // Get the new square titles after shuffle
    const shuffledSquares = wrapper.findAll('.bingo-square')
    const shuffledTitles = shuffledSquares.map(sq => sq.find('.square-title').text())

    // Should still have 15 squares
    expect(shuffledTitles.length).toBe(15)

    // The order should be different (with very high probability)
    // It's extremely unlikely that a random shuffle produces the exact same order
    const orderChanged = initialTitles.some((title, index) => title !== shuffledTitles[index])
    expect(orderChanged).toBe(true)
  })

  it('should show confirmation dialog when changing game and keep current game on cancel', async () => {
    const wrapper = mountWithI18n()
    await wrapper.vm.$nextTick()

    const vm = getVm(wrapper)
    const defaultGameId = vm.DEFAULT_GAME_ID

    const select = wrapper.find('#game-select')
    expect(select.exists()).toBe(true)

    // Initially should be DEFAULT_GAME_ID
    const initialSelectElement = select.element
    if (!(initialSelectElement instanceof HTMLSelectElement)) {
      throw new Error('Expected game select to be an HTMLSelectElement')
    }
    expect(initialSelectElement.value).toBe(defaultGameId)

    // Try to change the game
    const alternateGameId = vm.availableGames.find((game) => game.id !== defaultGameId)?.id
    if (!alternateGameId) {
      throw new Error('Expected at least one alternate game to select')
    }
    await select.setValue(alternateGameId)
    await wrapper.vm.$nextTick()

    // Confirm dialog should appear
    const confirmDialog = wrapper.find('.confirm-dialog')
    expect(confirmDialog.exists()).toBe(true)

    // Cancel the change
    const cancelButton = wrapper.find('.confirm-cancel')
    expect(cancelButton.exists()).toBe(true)
    await cancelButton.trigger('click')
    await wrapper.vm.$nextTick()

    // Game should remain DEFAULT_GAME_ID
    expect(window.location.search.startsWith(`?g=${defaultGameId}&r=`)).toBe(true)
    const selectElement = select.element
    if (!(selectElement instanceof HTMLSelectElement)) {
      throw new Error('Expected game select to be an HTMLSelectElement')
    }
    expect(selectElement.value).toBe(defaultGameId)
  })

  it('should start with animating pile and then animate to grid', async () => {
    vi.useFakeTimers()
    
    const wrapper = mountWithI18n()
    await wrapper.vm.$nextTick()
    
    // Initially, the grid should have the animating class (pile state)
    const grid = wrapper.find('.bingo-grid')
    expect(grid.exists()).toBe(true)
    expect(grid.classes()).toContain('animating')
    
    // Fast-forward past the animation duration (667ms on mount)
    await vi.advanceTimersByTimeAsync(700)
    await wrapper.vm.$nextTick()
    
    // After the animation completes, the animating class should be removed
    expect(grid.classes()).not.toContain('animating')
    
    vi.useRealTimers()
  })

  it('should show animating pile when shuffling', async () => {
    vi.useFakeTimers()
    
    const wrapper = mountWithI18n()
    
    // Wait for initial animation to complete
    await vi.advanceTimersByTimeAsync(700)
    await wrapper.vm.$nextTick()
    
    const grid = wrapper.find('.bingo-grid')
    expect(grid.classes()).not.toContain('animating')
    
    // Click shuffle button
    const shuffleButton = wrapper.find('.shuffle-button')
    await shuffleButton.trigger('click')
    await wrapper.vm.$nextTick()
    
    // Confirm the shuffle
    const confirmButton = wrapper.find('.confirm-accept')
    await confirmButton.trigger('click')
    await wrapper.vm.$nextTick()
    
    // Grid should be animating again after shuffle
    expect(grid.classes()).toContain('animating')
    
    // Fast-forward past the animation duration (333ms on shuffle)
    await vi.advanceTimersByTimeAsync(400)
    await wrapper.vm.$nextTick()
    
    // Animation should be complete
    expect(grid.classes()).not.toContain('animating')
    
    vi.useRealTimers()
  })

  it('should cascade mark and unmark all squares when resetting', async () => {
    vi.useFakeTimers()
    
    const wrapper = mountWithI18n()
    
    // Wait for initial animation to complete
    await vi.advanceTimersByTimeAsync(700)
    await wrapper.vm.$nextTick()
    
    // Mark some squares first
    const squares = wrapper.findAll('.bingo-square')
    await squares[0].trigger('click')
    await squares[2].trigger('click')
    await squares[4].trigger('click')
    await wrapper.vm.$nextTick()
    
    // Verify squares are marked
    expect(squares[0].classes()).toContain('marked')
    expect(squares[2].classes()).toContain('marked')
    expect(squares[4].classes()).toContain('marked')
    
    // Click reset button
    const resetButton = wrapper.find('.reset-button')
    await resetButton.trigger('click')
    await wrapper.vm.$nextTick()
    
    // Confirm the reset
    const confirmButton = wrapper.find('.confirm-accept')
    await confirmButton.trigger('click')
    await wrapper.vm.$nextTick()
    
    // Advance through the cascade mark animation (15 squares * 23ms each)
    await vi.advanceTimersByTimeAsync(15 * 23)
    await wrapper.vm.$nextTick()
    
    // All squares should be marked during cascade
    const allMarked = wrapper.findAll('.bingo-square').every(sq => sq.classes().includes('marked'))
    expect(allMarked).toBe(true)
    
    // Advance through the pause (3x cascade delay)
    await vi.advanceTimersByTimeAsync(23 * 3)
    await wrapper.vm.$nextTick()
    
    // Advance through the cascade unmark animation
    await vi.advanceTimersByTimeAsync(15 * 23)
    await wrapper.vm.$nextTick()
    
    // All squares should be unmarked after reset completes
    const allUnmarked = wrapper.findAll('.bingo-square').every(sq => !sq.classes().includes('marked'))
    expect(allUnmarked).toBe(true)
    
    vi.useRealTimers()
  })

  describe('Locale syncing', () => {
    beforeEach(() => {
      // Reset locale to default before each test
      setLocale('da')
    })

    it('should sync locale when switching to a different language game', async () => {
      const wrapper = mountWithI18n()
      await wrapper.vm.$nextTick()

      const vm = getVm(wrapper)
      const defaultGameId = vm.DEFAULT_GAME_ID
      const defaultLocale = getLocalePrefix(defaultGameId)
      if (!defaultLocale) {
        throw new Error('Expected default game to include a locale prefix')
      }

      // Initial locale should match the default game
      // @ts-expect-error - locale is a ref in composition mode
      expect(i18n.global.locale.value).toBe(defaultLocale)

      const select = wrapper.find('#game-select')

      const targetLocale = defaultLocale === 'en' ? 'da' : 'en'
      const targetGameId = vm.availableGames.find(
        (game) => getLocalePrefix(game.id) === targetLocale
      )?.id
      if (!targetGameId) {
        throw new Error('Expected a game with the alternate locale')
      }

      // Change to a game in the alternate locale
      await select.setValue(targetGameId)
      await wrapper.vm.$nextTick()

      // Confirm the change
      const confirmButton = wrapper.find('.confirm-accept')
      await confirmButton.trigger('click')
      await wrapper.vm.$nextTick()

      // Locale should now match the selected game's locale
      // @ts-expect-error - locale is a ref in composition mode
      expect(i18n.global.locale.value).toBe(targetLocale)
    })

    it('should sync locale to match a same-locale game', async () => {
      const wrapper = mountWithI18n()
      await wrapper.vm.$nextTick()

      const vm = getVm(wrapper)
      const defaultGameId = vm.DEFAULT_GAME_ID
      const defaultLocale = getLocalePrefix(defaultGameId)
      if (!defaultLocale) {
        throw new Error('Expected default game to include a locale prefix')
      }

      // Initial locale should match the default game
      // @ts-expect-error - locale is a ref in composition mode
      expect(i18n.global.locale.value).toBe(defaultLocale)

      const select = wrapper.find('#game-select')
      
      const sameLocaleGameId = vm.availableGames.find(
        (game) => getLocalePrefix(game.id) === defaultLocale && game.id !== defaultGameId
      )?.id
      if (!sameLocaleGameId) {
        throw new Error('Expected a second game with the same locale')
      }

      // Switch to another game with the same locale
      await select.setValue(sameLocaleGameId)
      await wrapper.vm.$nextTick()

      // Confirm the change
      const confirmButton = wrapper.find('.confirm-accept')
      if (confirmButton.exists()) {
        await confirmButton.trigger('click')
        await wrapper.vm.$nextTick()
      }

      // Locale should remain unchanged
      // @ts-expect-error - locale is a ref in composition mode
      expect(i18n.global.locale.value).toBe(defaultLocale)
    })

    it('should keep locale when switching within the same language', async () => {
      const wrapper = mountWithI18n()
      await wrapper.vm.$nextTick()

      const vm = getVm(wrapper)
      const defaultGameId = vm.DEFAULT_GAME_ID
      const defaultLocale = getLocalePrefix(defaultGameId)
      if (!defaultLocale) {
        throw new Error('Expected default game to include a locale prefix')
      }

      // Initial locale matches default game
      // @ts-expect-error - locale is a ref in composition mode
      expect(i18n.global.locale.value).toBe(defaultLocale)

      // Switching to a same-locale game should keep locale unchanged
      const select = wrapper.find('#game-select')
      const sameLocaleGameId = vm.availableGames.find(
        (game) => getLocalePrefix(game.id) === defaultLocale && game.id !== defaultGameId
      )?.id
      if (!sameLocaleGameId) {
        throw new Error('Expected a second game with the same locale')
      }
      await select.setValue(sameLocaleGameId)
      await wrapper.vm.$nextTick()

      const confirmButton = wrapper.find('.confirm-accept')
      await confirmButton.trigger('click')
      await wrapper.vm.$nextTick()

      // Should still be the default locale
      // @ts-expect-error - locale is a ref in composition mode
      expect(i18n.global.locale.value).toBe(defaultLocale)
    })

    it('should set initial locale based on initial game selection', async () => {
      const wrapper = mountWithI18n()
      await wrapper.vm.$nextTick()

      const vm = getVm(wrapper)
      const englishGameId = vm.availableGames.find(
        (game) => getLocalePrefix(game.id) === 'en'
      )?.id
      if (!englishGameId) {
        throw new Error('Expected at least one English game')
      }

      // Set URL parameter to select English game
      const url = new URL(window.location.href)
      url.searchParams.set('g', englishGameId)
      window.history.replaceState({}, '', url.toString())

      // Locale should be 'en' based on the game selected via URL
      // @ts-expect-error - locale is a ref in composition mode
      expect(i18n.global.locale.value).toBe('en')
    })
  })
})
