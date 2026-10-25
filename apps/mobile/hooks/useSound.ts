import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { secureStorage } from '@/constants/global/secureStorage'

interface SoundState {
  soundsEnabled: boolean
  setSoundsEnabled: (enabled: boolean) => void
}

export const useSoundStore = create<SoundState>()(
  persist(
    set => ({
      soundsEnabled: true,
      effectsEnabled: true,
      setSoundsEnabled: enabled => set(() => ({ soundsEnabled: enabled }))
    }),
    {
      name: 'sound-settings',
      storage: createJSONStorage(() => secureStorage),
      partialize: state => ({
        soundsEnabled: state.soundsEnabled
      })
    }
  )
)
