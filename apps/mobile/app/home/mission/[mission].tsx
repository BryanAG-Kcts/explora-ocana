import { useLocalSearchParams } from 'expo-router'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { FooterControl, HeadControl } from '@/components/pages/games/body'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { getGameComponent } from '@/constants/games/games'
import { MISSIONS } from '@/constants/games/mission'
import { useStep } from '@/hooks/useStep'

export default function Mission() {
  const { mission } = useLocalSearchParams<{ mission: string }>()
  const [isCompleted, setIsCompleted] = useState(false)
  const missionSteps = MISSIONS[mission]

  const { goBack, current, currentIndex, isFirstStep, isLastStep, goNext } =
    useStep(missionSteps)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <chat>
  useEffect(() => {
    setIsCompleted(false)
  }, [currentIndex])

  const requiresCompletion = current.requiresCompletion ?? false
  const canGoNext = !requiresCompletion || isCompleted
  const Component = getGameComponent(current, () => {
    setIsCompleted(true)
  })

  const handleNext = () => {
    if (!canGoNext) return
    if (isLastStep) {
      console.log('Finish')
      return
    }

    goNext()
  }

  return (
    <View className='flex-1'>
      {current.type === 'ar' ? (
        <>
          <View className='absolute top-4 right-4 gap-4 z-10 flex-row'>
            <Button
              size='icon'
              className='rounded-full bg-black/60 '
              onPress={goBack}
            >
              <Icon as={ArrowLeft} size={28} className='text-white' />
            </Button>

            <Button
              size='icon'
              className='rounded-full bg-black/60 '
              onPress={goNext}
            >
              <Icon as={ArrowRight} size={28} className='text-white' />
            </Button>
          </View>

          {Component}
        </>
      ) : (
        <>
          <HeadControl />
          <View className='flex-1'>{Component}</View>
          <FooterControl
            goBack={goBack}
            goNext={handleNext}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onFinish={() => console.log('Finish')}
            canGoNext={canGoNext}
          />
        </>
      )}
    </View>
  )
}
