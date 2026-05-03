import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Progress } from '@/components/ui/progress'
import { Text } from '@/components/ui/text'
import { getOptionStyle, QUESTIONS } from '@/constants/pages/home/quiz'
import { useStep } from '@/hooks/useStep'

export default function Quiz() {
  const { current, currentIndex, goNext } = useStep(QUESTIONS, 0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const progressValue = ((currentIndex + 1) / QUESTIONS.length) * 100

  function handleSelectOption(index: number) {
    if (hasSubmitted) return
    setSelectedOption(index)
  }

  function handleContinue() {
    if (selectedOption === null) return

    if (!hasSubmitted) {
      setHasSubmitted(true)
      return
    }

    if (currentIndex < QUESTIONS.length - 1) {
      goNext()
      setSelectedOption(null)
      setHasSubmitted(false)
      return
    }

    console.log('¡Quiz terminado!')
  }

  return (
    <View className='flex-1 bg-background'>
      <View className='flex-row p-4 gap-4 items-center'>
        <TouchableOpacity>
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

      <View className='p-4 gap-3 flex-1'>
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
      </View>

      <View className='p-4 pb-8 pt-2'>
        <Button
          onPress={handleContinue}
          disabled={selectedOption === null}
          className={selectedOption === null ? 'opacity-50' : ''}
        >
          <Text>{hasSubmitted ? 'Siguiente Pregunta' : 'Comprobar'}</Text>
          <Icon as={ArrowRight} className='text-primary-foreground' />
        </Button>
      </View>
    </View>
  )
}
