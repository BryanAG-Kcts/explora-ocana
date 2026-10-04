import { useState } from 'react'
import { Switch, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'

export function Accessibility() {
  const [largeText, setLargeText] = useState(false)
  const [reduceAnimations, setReduceAnimations] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  return (
    <View className='flex-1 justify-end'>
      <View className='rounded-2xl border border-border overflow-hidden bg-background p-4'>
        <SafeAreaView>
          <View>
            <Text className='text-xl font-bold mb-5'>Accesibilidad</Text>

            <View className='rounded-2xl border border-border overflow-hidden'>
              <View className='flex-row items-center p-4'>
                <View className='flex-1 mr-4'>
                  <Text className='text-base font-medium'>Texto grande</Text>

                  <Text variant='muted' className='text-sm mt-1'>
                    Aumenta el tamaño del texto para facilitar su lectura.
                  </Text>
                </View>

                <Switch value={largeText} onValueChange={setLargeText} />
              </View>

              <View className='border-t border-muted flex-row items-center p-4'>
                <View className='flex-1 mr-4'>
                  <Text className='text-base font-medium'>
                    Reducir animaciones
                  </Text>

                  <Text variant='muted' className='text-sm mt-1'>
                    Reduce las animaciones y transiciones de la aplicación.
                  </Text>
                </View>

                <Switch
                  value={reduceAnimations}
                  onValueChange={setReduceAnimations}
                />
              </View>

              <View className='border-t border-muted flex-row items-center p-4'>
                <View className='flex-1 mr-4'>
                  <Text className='text-base font-medium'>Alto contraste</Text>

                  <Text variant='muted' className='text-sm mt-1'>
                    Aumenta el contraste para mejorar la visibilidad.
                  </Text>
                </View>

                <Switch value={highContrast} onValueChange={setHighContrast} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}
