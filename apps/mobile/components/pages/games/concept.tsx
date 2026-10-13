import * as Speech from 'expo-speech'
import { Clock, Volume2 } from 'lucide-react-native'
import { View } from 'react-native'
import { EnrichedMarkdownText } from 'react-native-enriched-markdown'
import { useResolveClassNames } from 'uniwind'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import type { CONCEPT_STEP } from '@/constants/games/games'

interface Props {
  concept: CONCEPT_STEP
}
export function Concept({ concept }: Props) {
  const markdownContainerStyle = useResolveClassNames('flex-1')
  const markdownStyle = useResolveClassNames(
    'text-base text-foreground bg-card border-border'
  )

  return (
    <View className='flex-1'>
      <View className='bg-blue-600 h-52 justify-end'>
        <View className='items-start gap-2 p-4'>
          <Badge>
            <Text>{concept.cap}</Text>
          </Badge>

          <Text variant='h2' className='text-white'>
            {concept.title}
          </Text>
        </View>
      </View>

      <View className='p-4 gap-2 flex-1'>
        <View className='flex-row justify-between items-center'>
          <Text variant='h3' className='flex-1'>
            {concept.subtitle}
          </Text>

          <Button
            size='icon'
            className='rounded-full'
            onPress={() => Speech.speak(concept.speech)}
          >
            <Icon as={Volume2} size={28} className='text-white' />
          </Button>
        </View>

        <View className='flex-row gap-2 items-center'>
          <Icon as={Clock} size={16} className='text-muted-foreground' />
          <Text variant='muted'>
            {concept.readTimeMinutes} Minutos de lectura
          </Text>
        </View>

        <EnrichedMarkdownText
          markdown={concept.body}
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
      </View>
    </View>
  )
}
