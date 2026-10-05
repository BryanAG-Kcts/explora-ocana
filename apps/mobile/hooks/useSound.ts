import { create } from 'zustand'

interface SoundState {
  soundsEnabled: boolean
  effectsEnabled: boolean

  setSoundsEnabled: (enabled: boolean) => void
  setEffectsEnabled: (enabled: boolean) => void
}

export const useSoundStore = create<SoundState>(set => ({
  soundsEnabled: true,
  effectsEnabled: true,

  setSoundsEnabled: enabled =>
    set({
      soundsEnabled: enabled,
      ...(enabled ? {} : { effectsEnabled: false })
    }),

  setEffectsEnabled: enabled =>
    set({
      effectsEnabled: enabled
    })
}))
