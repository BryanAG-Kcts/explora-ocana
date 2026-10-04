import { Bell } from 'lucide-react-native'
import { Switch, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { useNotificationStore } from '@/constants/global/notificationStore'

export function Notifications() {
  const {
    enabled: notificationsEnabled,
    enable,
    disable
  } = useNotificationStore()

  const handleNotificationsChange = async (enabled: boolean) => {
    if (enabled) {
      const granted = await enable()

      if (!granted) {
        Toast.show({
          type: 'warning',
          text1: 'Notificaciones desactivadas',
          text2:
            'Debes permitir las notificaciones en la configuración del dispositivo.'
        })
      }

      return
    }

    await disable()
  }

  return (
    <View className='flex-1 justify-end'>
      <View className='m-4 rounded-2xl border border-border overflow-hidden bg-background'>
        <View className='flex-row items-center p-4'>
          <View className='w-10 h-10 rounded-full bg-muted items-center justify-center mr-3'>
            <Icon as={Bell} size={20} />
          </View>

          <View className='flex-1 mr-4'>
            <Text className='text-base font-medium'>
              Recibir notificaciones
            </Text>

            <Text variant='muted' className='text-sm mt-1'>
              Activa o desactiva las notificaciones de Explora Ocaña.
            </Text>
          </View>

          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationsChange}
          />
        </View>
      </View>
    </View>
  )
}
