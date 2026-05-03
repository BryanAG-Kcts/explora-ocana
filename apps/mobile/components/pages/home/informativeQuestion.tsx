import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Textarea } from '@/components/ui/textarea'

export function InformativeQuestion() {
  return (
    <View className='gap-2'>
      <Text variant='h3'>¿Según lo anterior: Que es un wasa?</Text>
      <Text variant={'muted'}>No hay respuestas correctas ni incorrectas</Text>
      <Textarea />
    </View>
  )
}
