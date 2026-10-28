import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'
import { FooterControl, HeadControl } from '@/components/pages/games/body'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { getGameComponent } from '@/constants/games/games'
import { MISSIONS } from '@/constants/games/mission'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { useGameSounds } from '@/hooks/useGameSounds'
import { useGlobalState } from '@/hooks/useGlobalState'
import { useUserStore } from '@/hooks/userStore'
import { useStep } from '@/hooks/useStep'

export default function Mission() {
  const { setProgress } = useGlobalState()
  const { play } = useGameSounds()
  const router = useRouter()
  const { user } = useUserStore()
  const { mission, section } = useLocalSearchParams<{
    mission: string
    section: string
  }>()

  const [isCompleted, setIsCompleted] = useState(false)
  const [experiencePoints, setExperiencePoints] = useState(0)
  const missionSteps = MISSIONS[section][mission]

  const { goBack, current, currentIndex, isFirstStep, isLastStep, goNext } =
    useStep(missionSteps)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <chat>
  useEffect(() => {
    setIsCompleted(false)
  }, [currentIndex])

  const requiresCompletion = current.requiresCompletion ?? false
  const canGoNext = !requiresCompletion || isCompleted
  const Component = getGameComponent(
    current,
    xp => {
      setIsCompleted(true)
      setExperiencePoints(prev => prev + xp)
    },
    section
  )

  const handleNext = async () => {
    if (!canGoNext) return
    if (isLastStep) {
      const [_, error] = await safePromise(
        axiosInstance.post('/missions/save-progress', {
          user_id: user?.id,
          mission_id: mission,
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

        return
      }

      Toast.show({
        type: 'success',
        text1: 'Éxito',
        text2: `¡Has ganado ${experiencePoints} puntos!`
      })

      setProgress(null)
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
            goBack={() => {
              play('click')
              goBack()
            }}
            goNext={() => {
              play('click')
              handleNext()
            }}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            canGoNext={canGoNext}
          />
        </>
      )}
    </View>
  )
}
