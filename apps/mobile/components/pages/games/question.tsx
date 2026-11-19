import { useState } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Textarea } from '@/components/ui/textarea'
import type {
  CHOICE_QUESTION_ITEM,
  QUESTION_ITEM,
  QUESTION_STEP
} from '@/constants/games/games'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { useGameSounds } from '@/hooks/useGameSounds'
import { useUserStore } from '@/hooks/userStore'

const XP_PER_QUESTION = 20
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

interface Props {
  question: QUESTION_STEP
  onComplete: (xp: number) => void
  sectionId: string
}

const isChoice = (q: QUESTION_ITEM): q is CHOICE_QUESTION_ITEM =>
  q.kind === 'choice'

export function Question({ question, onComplete, sectionId }: Props) {
  const { play } = useGameSounds()
  const { user } = useUserStore()
  const [openAnswers, setOpenAnswers] = useState<Record<string, string>>({})
  const [choiceAnswers, setChoiceAnswers] = useState<Record<string, number>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const total = question.questions.length

  function isAnswered(q: QUESTION_ITEM) {
    return isChoice(q)
      ? choiceAnswers[q.id] !== undefined
      : (openAnswers[q.id] ?? '').trim().length > 0
  }

  const answered = question.questions.filter(isAnswered).length
  const isValid = answered === total

  function getResponse(q: QUESTION_ITEM) {
    if (isChoice(q)) {
      const index = choiceAnswers[q.id]
      return `${LETTERS[index]}) ${q.options[index]}`
    }
    return openAnswers[q.id].trim()
  }

  function selectOption(q: CHOICE_QUESTION_ITEM, index: number) {
    // Solo se puede elegir una vez: al elegir se revela la respuesta correcta
    if (choiceAnswers[q.id] !== undefined || isSubmitting) return
    play('click')
    setChoiceAnswers(prev => ({ ...prev, [q.id]: index }))
  }

  async function onSubmit() {
    if (!isValid || isSubmitting) return
    play('click')
    setIsSubmitting(true)

    const [_, error] = await safePromise(
      Promise.all([
        ...question.questions.map(q =>
          axiosInstance.post('/activities/save-response', {
            user_id: user?.id,
            activity_id: q.id,
            response: getResponse(q)
          })
        ),
        ...question.questions.map(q =>
          axiosInstance.post('/activities/save-progress', {
            user_id: user?.id,
            activity_id: q.id,
            section_id: sectionId,
            experience_points: XP_PER_QUESTION
          })
        )
      ])
    )

    setIsSubmitting(false)

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No fue posible guardar tus respuestas'
      })

      return
    }

    Toast.show({
      type: 'success',
      text1: 'Éxito',
      text2:
        total > 1 ? 'Se guardaron tus respuestas' : 'Se guardó tu respuesta'
    })

    onComplete(XP_PER_QUESTION * total)
  }

  function renderChoice(q: CHOICE_QUESTION_ITEM) {
    const selected = choiceAnswers[q.id]
    const revealed = selected !== undefined

    return (
      <View className='gap-2'>
        {q.options.map((option, index) => {
          const isCorrect = index === q.correctIndex
          const isSelected = index === selected

          let style = 'border-border bg-secondary'
          if (revealed && isCorrect) style = 'border-green-500 bg-green-50 dark:bg-green-900'
          else if (revealed && isSelected) style = 'border-red-500 bg-red-50 dark:bg-red-900'
          else if (revealed) style = 'border-border bg-secondary opacity-60'

          return (
            <Pressable
              key={option}
              onPress={() => selectOption(q, index)}
              disabled={revealed || isSubmitting}
              className={`flex-row items-center gap-3 border rounded-xl p-4 ${style}`}
            >
              <Text className='font-bold'>{LETTERS[index]})</Text>
              <Text className='flex-1'>{option}</Text>
            </Pressable>
          )
        })}

        {revealed && (
          <Text
            className={`text-sm font-medium ${
              selected === q.correctIndex ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {selected === q.correctIndex
              ? '¡Correcto!'
              : `La respuesta correcta era ${LETTERS[q.correctIndex]}) ${q.options[q.correctIndex]}`}
          </Text>
        )}
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerClassName='flex-grow bg-cards p-4 gap-4'
        keyboardShouldPersistTaps='handled'
      >
        {total > 1 && (
          <Text variant='muted' className='text-sm text-center'>
            {answered} de {total} preguntas respondidas
          </Text>
        )}

        {question.questions.map((q, index) => (
          <View
            key={q.id}
            className='bg-background p-6 rounded-2xl shadow-sm border border-border gap-4'
          >
            <View className='gap-2'>
              {total > 1 && (
                <Text className='text-primary font-semibold text-sm'>
                  Pregunta {index + 1} de {total}
                </Text>
              )}
              <Text variant='h3' className='font-bold'>
                {q.question}
              </Text>
              {q.desc ? (
                <Text variant='muted' className='text-sm'>
                  {q.desc}
                </Text>
              ) : null}
            </View>

            {isChoice(q) ? (
              renderChoice(q)
            ) : (
              <Textarea
                value={openAnswers[q.id] ?? ''}
                onChangeText={text =>
                  setOpenAnswers(prev => ({ ...prev, [q.id]: text }))
                }
                placeholder='Escribe tu respuesta aquí...'
                editable={!isSubmitting}
                className='bg-secondary border border-border rounded-xl p-4 text-secondary-foreground'
              />
            )}
          </View>
        ))}

        <Button disabled={!isValid || isSubmitting} onPress={onSubmit}>
          <Text>
            {isSubmitting
              ? 'Guardando...'
              : total > 1
                ? 'Subir respuestas'
                : 'Subir respuesta'}
          </Text>
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
