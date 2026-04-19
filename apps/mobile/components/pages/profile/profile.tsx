import {
  Bolt,
  ChevronRight,
  Flame,
  IdCard,
  LogOut,
  Settings,
  Shield,
  Star
} from 'lucide-react-native'
import { ScrollView, View } from 'react-native'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'

export default function Profile() {
  return (
    <ScrollView className='gap-7' contentContainerStyle={{ gap: 28 }}>
      <View className='flex-row gap-4 items-center justify-between p-2 px-5 border-b border-primary/30'>
        <Text className='font-semibold'>Perfil</Text>

        <View className='flex-row items-center gap-4'>
          <ThemeToggle />
          <Icon as={Bolt} />
        </View>
      </View>

      <View className='items-center gap-4'>
        <View className='border-4 p-2 border-primary/30 rounded-full'>
          <Avatar alt='Usuario' className='size-32'>
            <AvatarImage
              source={{ uri: 'https://github.com/bryanag-kcts.png' }}
            />
            <AvatarFallback>
              <Text>US</Text>
            </AvatarFallback>
          </Avatar>
        </View>

        <View className='items-center'>
          <Text variant='h3'>Bryan Alvarez</Text>
          <Text variant='muted'>Se unió el 14 de junio del 2005</Text>
        </View>

        <View className='flex-row gap-4 px-7'>
          <View className='items-center bg-card flex-1 rounded p-2 gap-1'>
            <View className='flex-row items-end gap-2'>
              <Icon as={Flame} size={36} className='text-destructive' />
              <Text variant='h3'>12</Text>
            </View>

            <Text className='font-semibold'>Racha actual</Text>
          </View>

          <View className='items-center bg-card flex-1 rounded p-2 gap-1'>
            <View className='flex-row items-end gap-2'>
              <Icon as={Star} size={36} className='text-primary' />
              <Text variant='h3'>14.000</Text>
            </View>

            <Text className='font-semibold'>XP acumulado</Text>
          </View>
        </View>
      </View>

      <View className='bg-card p-7 flex-row justify-between items-center border border-border rounded-2xl mx-4'>
        <View>
          <Text variant='h3'>Liga plateada</Text>
          <Text variant='muted'>
            Puntos faltantes para subir de liga:{' '}
            <Text className='font-semibold'>2</Text>
          </Text>
        </View>

        <View className='bg-gray-200 rounded-full p-2'>
          <Icon as={Shield} size={42} className='text-card-foreground/30' />
        </View>
      </View>

      <View className='border border-border mx-4 p-4 rounded-2xl gap-7'>
        <View className='flex-row gap-4 items-center'>
          <View className='bg-blue-200 p-2 rounded-full'>
            <Icon size={32} as={IdCard} className='text-blue-500' />
          </View>

          <View className='flex-1'>
            <Text variant='h3'>Detalles de cuenta</Text>
            <Text variant='muted'>Cambiar correo, contraseña</Text>
          </View>

          <View>
            <Icon
              size={36}
              as={ChevronRight}
              strokeWidth={1.5}
              className='text-card-foreground/30'
            />
          </View>
        </View>

        <View className='flex-row gap-4 items-center'>
          <View className='bg-purple-200 p-2 rounded-full'>
            <Icon size={32} as={Settings} className='text-purple-500' />
          </View>

          <View className='flex-1'>
            <Text variant='h3'>Configuración</Text>
            <Text variant='muted'>Sonido, notificaciones</Text>
          </View>

          <View>
            <Icon
              size={36}
              as={ChevronRight}
              strokeWidth={1.5}
              className='text-card-foreground/30'
            />
          </View>
        </View>

        <View className='flex-row gap-4 items-center'>
          <View className='bg-red-200 p-2 rounded-full'>
            <Icon size={32} as={LogOut} className='text-red-500' />
          </View>

          <View className='flex-1'>
            <Text variant='h3'>Cerrar sesión</Text>
            <Text variant='muted'>Inicia sesión nuevamente</Text>
          </View>

          <View>
            <Icon
              size={36}
              as={ChevronRight}
              strokeWidth={1.5}
              className='text-card-foreground/30'
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
