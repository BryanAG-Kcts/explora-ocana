import { useLocalSearchParams, useRouter } from 'expo-router'
import * as Speech from 'expo-speech'
import { ArrowLeft, ArrowRight, Clock, Volume2 } from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'
import { EnrichedMarkdownText } from 'react-native-enriched-markdown'
import { useResolveClassNames } from 'uniwind'
import { InformativeQuestion } from '@/components/pages/home/informativeQuestion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { QUESTS } from '@/constants/pages/home/quest'
import { useStep } from '@/hooks/useStep'

export default function Quest() {
  const { quest } = useLocalSearchParams()
  const router = useRouter()
  const questData = QUESTS[quest as keyof typeof QUESTS]
  const { goBack, current, isFirstStep, isLastStep, goNext } = useStep(
    ['reading', 'question'] as const,
    0
  )

  const markdownStyle = useResolveClassNames(
    'text-base text-foreground bg-card border-border'
  )
  const markdownContainerStyle = useResolveClassNames('flex-1')
  function completeQuest() {
    router.replace('/home')
  }

  return (
    <View className='flex-1'>
      <View className='flex-row p-4 gap-4 items-center'>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon as={ArrowLeft} />
        </TouchableOpacity>
        <Text variant='h4'>Volver</Text>
      </View>

      <View className='bg-blue-600 h-52 justify-end'>
        <View className='items-start gap-2 p-4'>
          <Badge>
            <Text>Capítulo 1: Antepasados</Text>
          </Badge>

          <Text variant='h2' className='text-white'>
            {questData.title}
          </Text>
        </View>
      </View>

      <View className='p-4 gap-2 flex-1'>
        {current === 'reading' && (
          <>
            <View className='flex-row justify-between items-center'>
              <Text variant='h3' className='flex-1'>
                {questData.subTitle}
              </Text>

              <Button
                size='icon'
                className='rounded-full'
                onPress={() => Speech.speak(questData.speech)}
              >
                <Icon as={Volume2} size={28} className='text-white' />
              </Button>
            </View>

            <View className='flex-row gap-2 items-center'>
              <Icon as={Clock} size={16} className='text-muted-foreground' />
              <Text variant='muted'>
                {questData.readTimeMinutes} Minutos de lectura
              </Text>
            </View>

            <EnrichedMarkdownText
              markdown={questData.body}
              containerStyle={markdownContainerStyle}
              markdownStyle={{
                paragraph: { color: (markdownStyle.color as string) || '#000' },
                h2: { color: (markdownStyle.color as string) || '#000' },
                list: { color: (markdownStyle.color as string) || '#000' },
                blockquote: {
                  backgroundColor:
                    (markdownStyle.backgroundColor as string) || '#fff',
                  borderColor: (markdownStyle.borderColor as string) || '#000',
                  color: (markdownStyle.color as string) || '#000'
                }
              }}
            />
          </>
        )}

        {current === 'question' && (
          <InformativeQuestion
            desc={questData.informativeQuestion.desc}
            question={questData.informativeQuestion.question}
          />
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
