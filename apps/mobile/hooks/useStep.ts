import { useCallback, useState } from 'react'

export function useStep<T>(stepsArray: T[], initialIndex = 0) {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.max(0, Math.min(initialIndex, stepsArray.length - 1))
  )

  const totalSteps = stepsArray.length
  const safeIndex =
    totalSteps === 0 ? 0 : Math.min(currentIndex, totalSteps - 1)

  const goNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, totalSteps - 1))
  }, [totalSteps])

  const goBack = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSteps) {
        setCurrentIndex(index)
      }
    },
    [totalSteps]
  )

  const reset = useCallback(() => {
    setCurrentIndex(0)
  }, [])

  return {
    current: stepsArray[safeIndex],
    currentIndex: safeIndex,
    totalSteps,
    progress: totalSteps > 0 ? (safeIndex + 1) / totalSteps : 0,
    isFirstStep: safeIndex === 0,
    isLastStep: safeIndex === totalSteps - 1,
    goNext,
    goBack,
    goTo,
    reset
  }
}
