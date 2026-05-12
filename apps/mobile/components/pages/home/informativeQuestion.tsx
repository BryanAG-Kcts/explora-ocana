import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Textarea } from '@/components/ui/textarea'

interface Props {
  question: string
  desc: string
}
export function InformativeQuestion({ question, desc }: Props) {
  return (
    <View className='gap-2 flex-1'>
      <Text variant='h3'>{question}</Text>
      <Text variant={'muted'}>{desc}</Text>
      <Textarea />
    </View>
  )
}
