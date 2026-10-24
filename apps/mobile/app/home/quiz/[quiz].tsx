import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { useEffect, useRef, useState } from 'react'
import { AppState, ScrollView, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Progress } from '@/components/ui/progress'
import { Text } from '@/components/ui/text'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { getOptionStyle, QUIZZES } from '@/constants/pages/home/quiz'
import { useUserStore } from '@/hooks/userStore'
import { useStep } from '@/hooks/useStep'

export default function Quiz() {
  const { user } = useUserStore()
  const { quiz, section } = useLocalSearchParams<{
    quiz: string
    section?: string
  }>()

  const quizId = Array.isArray(quiz) ? quiz[0] : quiz
  const originalQuestions = QUIZZES[quizId as keyof typeof QUIZZES]
  const [QUESTIONS] = useState(() => shuffleArray(originalQuestions ?? []))
  const { current, currentIndex, goNext } = useStep(QUESTIONS, 0)

  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const router = useRouter()

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isTimerRunning, setIsTimerRunning] = useState(true)
  const startTimeRef = useRef(Date.now())
  const submittedRef = useRef(false)

  useEffect(() => {
    if (!isTimerRunning) return
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTimeRef.current) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [isTimerRunning])

  function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const progressValue = ((currentIndex + 1) / QUESTIONS.length) * 100

  function handleSelectOption(index: number) {
    if (hasSubmitted) return
    setSelectedOption(index)
  }

  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
  }

  function handleContinue() {
    if (selectedOption === null || isSubmitting) return

    if (!hasSubmitted) {
      setAnswers(previous => ({
        ...previous,
        [currentIndex]: selectedOption
      }))

      setHasSubmitted(true)
      if (currentIndex === QUESTIONS.length - 1) {
        const finalElapsedSeconds = Math.floor(
          (Date.now() - startTimeRef.current) / 1000
        )

        setElapsedSeconds(finalElapsedSeconds)
        setIsTimerRunning(false)
      }

      return
    }

    if (currentIndex === QUESTIONS.length - 1) {
      void submitQuizResult()
      return
    }

    goNext()
    setSelectedOption(null)
    setHasSubmitted(false)
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        router.replace('/home')
      }
    })

    return () => subscription.remove()
  }, [router])

  async function submitQuizResult() {
    if (submittedRef.current || isSubmitting) return

    submittedRef.current = true
    setIsSubmitting(true)
    setIsTimerRunning(false)

    const finalElapsedSeconds = Math.floor(
      (Date.now() - startTimeRef.current) / 1000
    )

    setElapsedSeconds(finalElapsedSeconds)
    const finalAnswers = {
      ...answers,
      [currentIndex]: selectedOption
    }

    const answerDetails = QUESTIONS.map((question, index) => {
      const selected = finalAnswers[index]
      const isCorrect = selected === question.correctIndex

      return {
        questionIndex: index,
        selectedOption: selected,
        correctOptionIndex: question.correctIndex,
        isCorrect,
        points: isCorrect ? 100 : 0
      }
    })

    const correctAnswers = answerDetails.filter(
      answer => answer.isCorrect
    ).length

    const baseScore = correctAnswers * 100
    const timePenalty = Math.floor(finalElapsedSeconds / 30) * 5
    const finalScore = Math.max(0, baseScore - timePenalty)

    const payload = {
      quizId: Array.isArray(quiz) ? quiz[0] : quiz,
      answers: answerDetails,
      totalQuestions: QUESTIONS.length,
      correctAnswers,
      incorrectAnswers: QUESTIONS.length - correctAnswers,
      elapsedSeconds: finalElapsedSeconds,
      baseScore,
      timePenalty,
      finalScore
    }

    const [response, error] = await safePromise(
      axiosInstance.post('/activities/save-progress', {
        user_id: user?.id,
        quest_id: payload.quizId,
        section_id: section,
        experience_points: payload.finalScore
      })
    )

    if (error || !response?.data) {
      submittedRef.current = false
      setIsSubmitting(false)
      Toast.show({
        type: 'error',
        text1: 'No fue posible guardar el resultado del quiz'
      })

      return
    }

    Toast.show({
      type: 'success',
      text1: '!Quiz completado¡ 🎉'
    })

    router.replace('/home')
  }

  return (
    <View className='flex-1 bg-background'>
      <View className='flex-row p-4 gap-4 items-center'>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon as={ArrowLeft} />
        </TouchableOpacity>
        <Text variant='h4'>Lección 1</Text>
      </View>

      <View className='p-4'>
        <View className='flex-row justify-between items-center py-2'>
          <Text className='text-primary font-semibold'>Progreso</Text>
          <Text variant='muted'>
            {currentIndex + 1}/{QUESTIONS.length}
          </Text>
          <Text variant='muted'>{formatTime(elapsedSeconds)}</Text>
        </View>
        <Progress value={progressValue} indicatorClassName='bg-primary' />
      </View>

      <View className='p-4'>
        <View className='bg-blue-600 h-40 justify-end rounded-xl'>
          <View className='items-start gap-2 p-4'>
            <Badge>
              <Text>{current.chapter}</Text>
            </Badge>
          </View>
        </View>

        <Text variant='h3' className='mt-6'>
          {current.text}
        </Text>
      </View>

      <ScrollView contentContainerClassName='p-4 gap-3'>
        {current.options.map((optionText, index) => {
          const props = getOptionStyle(
            selectedOption === index,
            index === current.correctIndex,
            hasSubmitted
          )

          return (
            <TouchableOpacity
              key={index + optionText}
              activeOpacity={0.7}
              onPress={() => handleSelectOption(index)}
              className={`flex-row p-4 gap-4 items-center border rounded-xl ${props.containerClass}`}
            >
              <View
                className={`aspect-square rounded border items-center justify-center p-2 ${props.containerClass.split(' ')[0]}`}
              >
                <Icon as={props.icon} size={20} className={props.colorClass} />
              </View>

              <Text className={`flex-1 ${props.colorClass}`}>{optionText}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      <View className='p-4 pb-8 pt-2'>
        <Button
          onPress={handleContinue}
          disabled={selectedOption === null || isSubmitting}
          className={
            selectedOption === null || isSubmitting ? 'opacity-50' : ''
          }
        >
          <Text>
            {isSubmitting
              ? 'Guardando resultado...'
              : !hasSubmitted
                ? 'Comprobar'
                : currentIndex === QUESTIONS.length - 1
                  ? 'Terminar intento'
                  : 'Siguiente Pregunta'}
          </Text>

          <Icon as={ArrowRight} className='text-primary-foreground' />
        </Button>
      </View>
    </View>
  )
}
