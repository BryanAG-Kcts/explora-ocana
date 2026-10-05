import { Switch, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { useSoundStore } from '@/hooks/useSound'

export function Sounds() {
  const { soundsEnabled, effectsEnabled, setSoundsEnabled, setEffectsEnabled } =
    useSoundStore()

  return (
    <View className='flex-1 justify-end'>
      <View className='rounded-2xl border border-border overflow-hidden bg-background p-4'>
        <SafeAreaView>
          <Text className='text-xl font-bold mb-5'>Sonidos</Text>

          <View className='rounded-2xl border border-border overflow-hidden'>
            <View className='flex-row items-center p-4'>
              <View className='flex-1 mr-4'>
                <Text className='text-base font-medium'>Sonidos</Text>

                <Text variant='muted' className='text-sm mt-1'>
                  Activa o desactiva los sonidos de la aplicación.
                </Text>
              </View>

              <Switch value={soundsEnabled} onValueChange={setSoundsEnabled} />
            </View>

            <View className='border-t border-muted flex-row items-center p-4'>
              <View className='flex-1 mr-4'>
                <Text className='text-base font-medium'>Efectos de sonido</Text>

                <Text variant='muted' className='text-sm mt-1'>
                  Reproduce sonidos durante las actividades.
                </Text>
              </View>

              <Switch
                value={effectsEnabled}
                onValueChange={setEffectsEnabled}
                disabled={!soundsEnabled}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}
