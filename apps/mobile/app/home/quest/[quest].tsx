import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'
import { FooterControl, HeadControl } from '@/components/pages/games/body'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { getGameComponent } from '@/constants/games/games'
import { QUESTS } from '@/constants/games/quest'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { useUserStore } from '@/hooks/userStore'
import { useStep } from '@/hooks/useStep'

export default function Quest() {
  const router = useRouter()
  const { user } = useUserStore()
  const { quest, section } = useLocalSearchParams<{
    quest: string
    section?: string
  }>()

  const [isCompleted, setIsCompleted] = useState(false)
  const [experiencePoints, setExperiencePoints] = useState(0)
  const missionSteps = QUESTS[quest]

  const { goBack, current, currentIndex, isFirstStep, isLastStep, goNext } =
    useStep(missionSteps)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <chat>
  useEffect(() => {
    setIsCompleted(false)
  }, [currentIndex])

  const requiresCompletion = current.requiresCompletion ?? false
  const canGoNext = !requiresCompletion || isCompleted
  const Component = getGameComponent(current, xp => {
    setIsCompleted(true)
    setExperiencePoints(prev => prev + xp)
  })

  const handleNext = async () => {
    if (!canGoNext) return
    if (isLastStep) {
      const [_, error] = await safePromise(
        axiosInstance.post('/activities/save-progress', {
          user_id: user?.id,
          quest_id: quest,
          section_id: section,
          experience_points: experiencePoints
        })
      )

      if (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'No fue posible guardar tu progreso'
        })
      }

      Toast.show({
        type: 'success',
        text1: 'Éxito',
        text2: 'Se guardó tu progreso'
      })

      router.replace('/home')
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
              className='rounded-full bg-black/60'
              onPress={goBack}
            >
              <Icon as={ArrowLeft} size={28} className='text-white' />
            </Button>

            <Button
              size='icon'
              className='rounded-full bg-black/60 '
              onPress={handleNext}
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
            canGoNext={canGoNext}
          />
        </>
      )}
    </View>
  )
}
