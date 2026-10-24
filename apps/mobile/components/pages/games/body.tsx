import { useRouter } from 'expo-router'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'

interface HeadControlProps {
  text?: string
}
export function HeadControl({ text = 'Volver' }: HeadControlProps) {
  const router = useRouter()
  return (
    <View className='flex-row'>
      <TouchableOpacity
        onPress={() => router.back()}
        className='gap-4 items-center flex-row p-3'
      >
        <Icon as={ArrowLeft} />
        <Text variant='h4'>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

interface FooterProps {
  goBack: () => void
  goNext: () => void
  isFirstStep: boolean
  isLastStep: boolean
  canGoNext: boolean
  backText?: string
  nextText?: string
  finishText?: string
}
export function FooterControl({
  goBack,
  goNext,
  canGoNext,
  isFirstStep,
  isLastStep,
  backText = 'Regresar',
  nextText = 'Continuar',
  finishText = 'Finalizar'
}: FooterProps) {
  return (
    <View className='flex-row p-4 gap-4'>
      <Button
        variant='outline'
        className='flex-1'
        onPress={goBack}
        disabled={isFirstStep}
      >
        <Icon as={ArrowLeft} />
        <Text>{backText}</Text>
      </Button>

      <Button
        disabled={!canGoNext}
        onPress={goNext}
        className='flex-1'
      >
        <Text>{isLastStep ? finishText : nextText}</Text>
        <Icon as={ArrowRight} className='text-primary-foreground' />
      </Button>
    </View>
  )
}
