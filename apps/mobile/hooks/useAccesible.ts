import { create } from 'zustand'

interface AccessibilityState {
  largeText: boolean
  reduceAnimations: boolean
  highContrast: boolean

  setLargeText: (enabled: boolean) => void
  setReduceAnimations: (enabled: boolean) => void
  setHighContrast: (enabled: boolean) => void
}

export const useAccessibilityStore = create<AccessibilityState>(set => ({
  largeText: false,
  reduceAnimations: false,
  highContrast: false,

  setLargeText: enabled =>
    set({
      largeText: enabled
    }),

  setReduceAnimations: enabled =>
    set({
      reduceAnimations: enabled
    }),

  setHighContrast: enabled =>
    set({
      highContrast: enabled
    })
}))
