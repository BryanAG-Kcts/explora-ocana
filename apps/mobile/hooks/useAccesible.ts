import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { secureStorage } from '@/constants/global/secureStorage'

interface AccessibilityState {
  largeText: boolean
  reduceAnimations: boolean
  highContrast: boolean
  setLargeText: (enabled: boolean) => void
  setReduceAnimations: (enabled: boolean) => void
  setHighContrast: (enabled: boolean) => void
}

export const useAccessibilityStore = create<AccessibilityState>()(
  persist(
    set => ({
      largeText: false,
      reduceAnimations: false,
      highContrast: false,
      setLargeText: enabled => set({ largeText: enabled }),
      setReduceAnimations: enabled => set({ reduceAnimations: enabled }),
      setHighContrast: enabled => set({ highContrast: enabled })
    }),
    {
      name: 'accessibility-settings',
      storage: createJSONStorage(() => secureStorage),
      partialize: state => ({
        largeText: state.largeText,
        reduceAnimations: state.reduceAnimations,
        highContrast: state.highContrast
      })
    }
  )
)
