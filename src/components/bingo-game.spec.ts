import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BingoGame from './bingo-game.vue'

describe('BingoGame', () => {
  beforeEach(() => {
    // Clear URL parameters before each test
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', window.location.pathname)
    }
  })

  it('should default to xmas and persist g before r in the URL', async () => {
    const wrapper = mount(BingoGame)
    await wrapper.vm.$nextTick()

    const select = wrapper.find('#game-select')
    expect(select.exists()).toBe(true)
    expect((select.element as HTMLSelectElement).value).toBe('xmas-tv-tropes')

    expect(window.location.search.startsWith('?g=xmas-tv-tropes&r=')).toBe(true)
  })

  it('should switch games via dropdown and update the URL g parameter', async () => {
    const wrapper = mount(BingoGame)
    await wrapper.vm.$nextTick()

    const select = wrapper.find('#game-select')
    expect(select.exists()).toBe(true)

    // Change the game selection
    await select.setValue('nordicnoir-tv-tropes')
    await wrapper.vm.$nextTick()

    // Confirm dialog should appear
    const confirmButton = wrapper.find('.confirm-accept')
    expect(confirmButton.exists()).toBe(true)
    await confirmButton.trigger('click')
    await wrapper.vm.$nextTick()

    // After confirmation, the URL should be updated
    expect(window.location.search.startsWith('?g=nordicnoir-tv-tropes&r=')).toBe(true)

    const squares = wrapper.findAll('.bingo-square')
    expect(squares.length).toBe(15)
  })

  it('should toggle square marked state when clicked', async () => {
    const wrapper = mount(BingoGame)

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
    const wrapper = mount(BingoGame)

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
    const wrapper = mount(BingoGame)
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
    const wrapper = mount(BingoGame)
    await wrapper.vm.$nextTick()

    const select = wrapper.find('#game-select')
    expect(select.exists()).toBe(true)

    // Initially should be xmas-tv-tropes
    expect((select.element as HTMLSelectElement).value).toBe('xmas-tv-tropes')

    // Try to change the game
    await select.setValue('nordicnoir-tv-tropes')
    await wrapper.vm.$nextTick()

    // Confirm dialog should appear
    const confirmDialog = wrapper.find('.confirm-dialog')
    expect(confirmDialog.exists()).toBe(true)

    // Cancel the change
    const cancelButton = wrapper.find('.confirm-cancel')
    expect(cancelButton.exists()).toBe(true)
    await cancelButton.trigger('click')
    await wrapper.vm.$nextTick()

    // Game should remain xmas-tv-tropes
    expect(window.location.search.startsWith('?g=xmas-tv-tropes&r=')).toBe(true)
    expect((select.element as HTMLSelectElement).value).toBe('xmas-tv-tropes')
  })
})
