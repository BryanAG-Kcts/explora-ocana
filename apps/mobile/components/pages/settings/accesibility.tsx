import { Switch, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Uniwind, useUniwind } from 'uniwind'
import { Text } from '@/components/ui/text'
import { useAccessibilityStore } from '@/hooks/useAccesible'

export function Accessibility() {
  const { theme } = useUniwind()
  const { largeText, highContrast, setLargeText, setHighContrast } =
    useAccessibilityStore()

  function refreshTheme(value: boolean) {
    const isDark = theme?.includes('dark') ?? false
    const newTheme = !value
      ? isDark
        ? 'dark'
        : 'light'
      : isDark
        ? 'high-contrast-dark'
        : 'high-contrast-light'

    Uniwind.setTheme(newTheme)
    setHighContrast(value)
  }

  return (
    <View className='flex-1 justify-end'>
      <View className='rounded-2xl border border-border overflow-hidden bg-background p-4'>
        <SafeAreaView>
          <View>
            <Text className='text-xl font-bold mb-5'>Accesibilidad</Text>

            <View className='rounded-2xl border border-border overflow-hidden'>
              <View className='flex-row items-center p-4'>
                <View className='flex-1 mr-4'>
                  <Text className='font-medium'>Texto grande</Text>

                  <Text variant='muted' className='text-sm mt-1'>
                    Aumenta el tamaño del texto para facilitar su lectura.
                  </Text>
                </View>

                <Switch value={largeText} onValueChange={setLargeText} />
              </View>

              <View className='border-t border-muted flex-row items-center p-4'>
                <View className='flex-1 mr-4'>
                  <Text className='font-medium'>Alto contraste</Text>

                  <Text variant='muted' className='text-sm mt-1'>
                    Aumenta el contraste para mejorar la visibilidad.
                  </Text>
                </View>

                <Switch value={highContrast} onValueChange={refreshTheme} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}
