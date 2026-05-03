import { useLocalSearchParams, useRouter } from 'expo-router'
import * as Speech from 'expo-speech'
import { ArrowLeft, ArrowRight, Clock, Volume2 } from 'lucide-react-native'
import { View } from 'react-native'
import { InformativeQuestion } from '@/components/pages/home/informativeQuestion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { useStep } from '@/hooks/useStep'

export default function Quest() {
  const { quest } = useLocalSearchParams()
  const router = useRouter()
  const { goBack, current, isFirstStep, isLastStep, goNext } = useStep(
    ['reading', 'question'] as const,
    0
  )
  const addMessage = () => {
    const thingToSay =
      'wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa'
    Speech.speak(thingToSay)
  }

  function completeQuest() {
    router.replace('/home')
  }

  return (
    <View>
      <View className='flex-row p-4 gap-4 items-center'>
        <Icon as={ArrowLeft} />
        <Text variant='h4'>Lección {quest}</Text>
      </View>

      <View className='bg-blue-600 h-52 justify-end'>
        <View className='items-start gap-2 p-4'>
          <Badge>
            <Text>Capítulo 1: Antepasados</Text>
          </Badge>

          <Text variant='h2' className='text-white'>
            Los indios
          </Text>
        </View>
      </View>

      <View className='p-4 gap-2'>
        {current === 'reading' && (
          <>
            <View className='flex-row justify-between items-center'>
              <Text variant='h3'>Los indios y cultura</Text>

              <Button size='icon' className='rounded-full' onPress={addMessage}>
                <Icon as={Volume2} size={28} className='text-white' />
              </Button>
            </View>

            <View className='flex-row gap-2 items-center'>
              <Icon as={Clock} size={16} className='text-muted-foreground' />
              <Text variant='muted'>3 Minutos de lectura</Text>
            </View>

            <View className='gap-2'>
              <Text>
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
              </Text>
              <Text>
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
              </Text>
              <Text variant='blockquote'>
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
              </Text>

              <Text>
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
                wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa wasa
              </Text>
            </View>
          </>
        )}

        {current === 'question' && (
          <View className='gap-2'>
            <InformativeQuestion />
          </View>
        )}

        <View className='flex-row py-4 gap-4'>
          <Button
            variant='outline'
            onPress={goBack}
            disabled={isFirstStep}
            className='flex-1'
          >
            <Icon as={ArrowLeft} />
            <Text>Regresar</Text>
          </Button>

          <Button
            onPress={isLastStep ? completeQuest : goNext}
            className='flex-1'
          >
            <Text>{isLastStep ? 'Finalizar' : 'Continuar'}</Text>
            <Icon as={ArrowRight} className='text-primary-foreground' />
          </Button>
        </View>
      </View>
    </View>
  )
}
