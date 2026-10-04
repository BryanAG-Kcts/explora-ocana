import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'

export function About() {
  return (
    <View className='flex-1 justify-end'>
      <View className='rounded-2xl border border-border overflow-hidden bg-background p-4'>
        <SafeAreaView>
          <View>
            <Text className='text-xl font-bold mb-5'>Sobre OcañaApp</Text>

            <View className='items-center mb-6'>
              <View className='w-20 h-20 rounded-2xl bg-foreground items-center justify-center mb-3'>
                <Text className='text-2xl font-bold text-background'>OH</Text>
              </View>

              <Text className='text-lg font-bold'>OcañaApp Historia</Text>

              <Text variant='muted' className='text-sm'>
                Aprende, explora y descubre nuestra historia.
              </Text>
            </View>

            <Text className='text-base leading-6 text-center'>
              OcañaAPP es una aplicación educativa diseñada para aprender
              sobre la historia, cultura y patrimonio de Ocaña mediante
              actividades interactivas y experiencias gamificadas.
            </Text>

            <View className='mt-6 pt-4 border-t border-muted'>
              <View className='flex-row justify-between mb-2'>
                <Text variant='muted'>Versión</Text>
                <Text>1.0.0</Text>
              </View>

              <View className='flex-row justify-between'>
                <Text variant='muted'>Desarrollado para</Text>
                <Text>Ocaña</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}
