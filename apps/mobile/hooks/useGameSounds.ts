import { useAudioPlayer } from 'expo-audio'
import { useCallback } from 'react'
import { useSoundStore } from './useSound'

const SOUNDS = {
  click: require('@/assets/sounds/click.wav'),
  correct: require('@/assets/sounds/correct.wav'),
  wrong: require('@/assets/sounds/wrong.mp3'),
  complete: require('@/assets/sounds/complete.mp3')
}

export function useGameSounds() {
  const soundsEnabled = useSoundStore(state => state.soundsEnabled)

  const clickPlayer = useAudioPlayer(SOUNDS.click)
  const correctPlayer = useAudioPlayer(SOUNDS.correct)
  const wrongPlayer = useAudioPlayer(SOUNDS.wrong)
  const completePlayer = useAudioPlayer(SOUNDS.complete)

  const play = useCallback(
    (sound: 'click' | 'correct' | 'wrong' | 'complete') => {
      if (!soundsEnabled) return

      const players = {
        click: clickPlayer,
        correct: correctPlayer,
        wrong: wrongPlayer,
        complete: completePlayer
      }

      const player = players[sound]

      player.seekTo(0)
      player.play()
    },
    [soundsEnabled, clickPlayer, correctPlayer, wrongPlayer, completePlayer]
  )

  return { play }
}
