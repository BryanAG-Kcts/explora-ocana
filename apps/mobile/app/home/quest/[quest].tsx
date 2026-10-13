import { useLocalSearchParams } from 'expo-router'
import { View } from 'react-native'
import { MISSIONS } from '@/constants/games/mission'
import { useStep } from '@/hooks/useStep'

export default function Quest() {
  const { quest } = useLocalSearchParams() as { quest: string }
  const data = MISSIONS[quest]

  const { goBack, current, isFirstStep, isLastStep, goNext } = useStep(
    ['reading', 'question'] as const,
    0
  )

  return <View className='flex-1'></View>
}
