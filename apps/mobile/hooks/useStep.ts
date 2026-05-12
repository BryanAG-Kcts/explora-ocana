import { useState } from 'react'

export function useStep<T>(stepsArray: T[], initialIndex = 0) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goNext = () => {
    if (currentIndex < stepsArray.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const goTo = (index: number) => {
    if (index >= 0 && index < stepsArray.length) {
      setCurrentIndex(index)
    }
  }

  return {
    current: stepsArray[currentIndex],
    currentIndex,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === stepsArray.length - 1,
    goNext,
    goBack,
    goTo
  }
}
