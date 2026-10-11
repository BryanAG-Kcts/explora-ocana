import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { secureStorage } from '@/constants/global/secureStorage'

interface SoundState {
  soundsEnabled: boolean
  effectsEnabled: boolean

  setSoundsEnabled: (enabled: boolean) => void
  setEffectsEnabled: (enabled: boolean) => void
}

export const useSoundStore = create<SoundState>()(
  persist(
    set => ({
      soundsEnabled: true,
      effectsEnabled: true,
      setSoundsEnabled: enabled =>
        set(state => ({
          soundsEnabled: enabled,
          effectsEnabled: enabled ? state.effectsEnabled : false
        })),
      setEffectsEnabled: enabled => set({ effectsEnabled: enabled })
    }),
    {
      name: 'sound-settings',
      storage: createJSONStorage(() => secureStorage),
      partialize: state => ({
        soundsEnabled: state.soundsEnabled,
        effectsEnabled: state.effectsEnabled
      })
    }
  )
)
