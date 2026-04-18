import {
  ArrowLeft,
  ArrowRight,
  Check,
  Scan,
  Slash,
  X
} from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Progress } from '@/components/ui/progress'
import { Text } from '@/components/ui/text'

export default function Quiz() {
  return (
    <View>
      <View className='flex-row p-4 gap-4 items-center'>
        <Icon as={ArrowLeft} />
        <Text variant='h4'>Lección 1</Text>
      </View>

      <View className='p-4'>
        <View className='flex-row justify-between items-center py-2'>
          <Text className='text-primary font-semibold'>Progreso</Text>
          <Text variant='muted'>3/5</Text>
        </View>

        <Progress value={(3 / 5) * 100} indicatorClassName='bg-primary' />
      </View>

      <View className='p-4'>
        <View className='bg-blue-600 h-52 justify-end rounded'>
          <View className='items-start gap-2 p-4'>
            <Badge>
              <Text>Capítulo 1: Antepasados</Text>
            </Badge>
          </View>
        </View>

        <Text variant='h3' className='mt-4'>
          ¿Aqui va el texto de la pregunta?
        </Text>
      </View>

      <View className='p-2 gap-4'>
        <TouchableOpacity
          onPress={() => console.log('wasa')}
          className='flex-row p-4 gap-4 items-center border border-border rounded'
        >
          <View className='aspect-square rounded border border-border items-center justify-center p-2'>
            <Icon as={Slash} size={24} />
          </View>

          <Text className='flex-1'>
            Opción 1: AAAAAA AAAAA AAAAa AAAAAAA AAA AAAAAAAAA aaaa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('wasa')}
          className='flex-row p-4 gap-4 items-center border border-destructive rounded bg-destructive/25'
        >
          <View className='aspect-square rounded border border-destructive items-center justify-center p-2'>
            <Icon as={X} size={24} className='text-destructive' />
          </View>

          <Text className='flex-1 text-destructive'>
            Opción 2: AAAAAA AAAAA AAAAa AAAAAAA AAA AAAAAAAAA aaaa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('wasa')}
          className='flex-row p-4 gap-4 items-center border border-primary rounded bg-primary/25'
        >
          <View className='aspect-square rounded border border-primary items-center justify-center p-2'>
            <Icon as={Check} size={24} className='text-primary' />
          </View>

          <Text className='flex-1 text-primary'>
            Opción 2: AAAAAA AAAAA AAAAa AAAAAAA AAA AAAAAAAAA aaaa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('wasa')}
          className='flex-row p-4 gap-4 items-center border border-muted-foreground rounded bg-muted-foreground/25'
        >
          <View className='aspect-square rounded border border-muted-foreground items-center justify-center p-2'>
            <Icon as={Scan} size={24} className='text-muted-foreground' />
          </View>

          <Text className='flex-1 text-muted-foreground'>
            Opción 2: AAAAAA AAAAA AAAAa AAAAAAA AAA AAAAAAAAA aaaa
          </Text>
        </TouchableOpacity>
      </View>

      <View className='p-4 gap-2'>
        <Button>
          <Text>Continuar</Text>
          <Icon as={ArrowRight} className='text-primary-foreground' />
        </Button>
      </View>
    </View>
  )
}
