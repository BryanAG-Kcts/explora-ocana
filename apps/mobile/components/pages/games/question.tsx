import { useState } from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Textarea } from '@/components/ui/textarea'
import type { QUESTION_STEP } from '@/constants/games/games'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { useUserStore } from '@/hooks/userStore'

interface Props {
  question: QUESTION_STEP
  onComplete: (xp: number) => void
}
export function Question({ question, onComplete }: Props) {
  const [value, setValue] = useState('')
  const isValid = value.trim().length > 0
  const { user } = useUserStore()

  async function onSubmit() {
    const [_, error] = await safePromise(
      axiosInstance.post('/activities/save-response', {
        user_id: user?.id,
        activity_id: question.id,
        response: value
      })
    )

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No fue posible guardar la respuesta de la pregunta'
      })
    }

    Toast.show({
      type: 'success',
      text1: 'Éxito',
      text2: 'Se guardó tu respuesta'
    })

    onComplete(20)
  }

  return (
    <View className='flex-1 bg-card p-4 justify-center'>
      <View className='bg-background p-6 rounded-2xl shadow-sm border border-border gap-4'>
        <View className='gap-2'>
          <Text variant='h3' className='text-gray-900 font-bold'>
            {question.question}
          </Text>
          <Text variant='muted' className='text-gray-500 text-sm'>
            {question.desc}
          </Text>
        </View>

        <View className='mt-2'>
          <Textarea
            value={value}
            onChangeText={setValue}
            placeholder='Escribe tu respuesta aquí...'
            className='bg-secondary border border-border rounded-xl p-4 min-h-72 text-secondary-foreground'
          />
        </View>

        <Button disabled={!isValid} onPress={onSubmit}>
          <Text>Subir respuesta</Text>
        </Button>
      </View>
    </View>
  )
}
