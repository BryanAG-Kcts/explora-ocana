import {
  Bolt,
  ChevronRight,
  Coins,
  Flame,
  LogOut,
  TestTubeDiagonal,
  Trophy,
  UserRound
} from 'lucide-react-native'
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native'
import { BorderHeader } from '@/components/global/borderHeader'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { StatCard } from './statCard'

const USER_DATA = {
  name: 'Andrés Mendoza',
  createdAt: 'Octubre 2025',
  streak: 12,
  points: 450,
  xp: 3200,
  league: 'Oro',
  initials: 'AM'
}

export function Profile() {
  const handleAccountInfo = () => {
    Alert.alert('Información de cuenta', 'Navegando a detalles de cuenta...')
  }

  const handleSettings = () => {
    Alert.alert('Configuración', 'Navegando a ajustes de la app...')
  }

  const handleLogout = () => {
    Alert.alert('Cerrar Sesión', '¿Estás seguro de que deseas salir?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Salir',
        style: 'destructive',
        onPress: () => console.log('Sesión cerrada')
      }
    ])
  }

  return (
    <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
      <BorderHeader>
        <View className='flex-row items-center gap-2 justify-between flex-1'>
          <Text className='font-semibold'>Perfil y configuración</Text>
          <ThemeToggle />
        </View>
      </BorderHeader>

      <View className='p-4'>
        <View className='items-center mb-8 mt-4'>
          <View className='w-24 h-24 bg-foreground rounded-full items-center justify-center mb-4 shadow-md'>
            <Text className='text-3xl font-bold text-background'>
              {USER_DATA.initials}
            </Text>
          </View>
          <Text className='text-2xl font-bold'>{USER_DATA.name}</Text>
          <Text variant='muted'>Miembro desde {USER_DATA.createdAt}</Text>
        </View>

        <Text className='text-lg font-semibold mb-3'>Tus Estadísticas</Text>
        <View className='flex-row flex-wrap justify-between mb-8'>
          <StatCard
            title='Racha'
            value={`${USER_DATA.streak} días`}
            icon={<Icon as={Flame} size={18} className='text-destructive' />}
          />
          <StatCard
            title='Puntos'
            value={USER_DATA.points}
            icon={<Icon as={Coins} size={18} className='text-orange-500' />}
          />
          <StatCard
            title='Total XP'
            value={USER_DATA.xp}
            icon={
              <Icon
                as={TestTubeDiagonal}
                size={18}
                className='text-amber-500'
              />
            }
          />
          <StatCard
            title='Liga'
            value={USER_DATA.league}
            icon={<Icon as={Trophy} size={18} className='text-yellow-500' />}
          />
        </View>

        <View className='rounded-2xl border border-border overflow-hidden shadow-sm mb-8'>
          <TouchableOpacity
            onPress={handleAccountInfo}
            className='flex-row justify-between items-center p-4 border-b border-muted'
          >
            <View className='flex-row items-center gap-3'>
              <Icon as={UserRound} size={18} />
              <Text className='text-base font-medium'>
                Información de cuenta
              </Text>
            </View>

            <Icon as={ChevronRight} size={12} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSettings}
            className='flex-row justify-between items-center p-4 border-b border-muted'
          >
            <View className='flex-row items-center gap-3'>
              <Icon as={Bolt} size={18} />
              <Text className='text-base font-medium'>Configuración</Text>
            </View>

            <Icon as={ChevronRight} size={12} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogout}
            className='flex-row justify-between items-center p-4'
          >
            <View className='flex-row items-center gap-3'>
              <Icon as={LogOut} size={18} className='text-destructive' />
              <Text className='text-base font-medium text-destructive'>
                Cerrar sesión
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
// import {
//   Bolt,
//   ChevronRight,
//   Flame,
//   IdCard,
//   LogOut,
//   Settings,
//   Shield,
//   Star
// } from 'lucide-react-native'
// import { ScrollView, View } from 'react-native'
// import { ThemeToggle } from '@/components/global/themeToggle'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Icon } from '@/components/ui/icon'
// import { Text } from '@/components/ui/text'

// export function Profile() {
//   return (
//     <ScrollView className='gap-7' contentContainerStyle={{ gap: 28 }}>
//       <View className='flex-row gap-4 items-center justify-between p-2 px-5 border-b border-primary/30'>
//         <Text className='font-semibold'>Perfil</Text>

//         <View className='flex-row items-center gap-4'>
//           <ThemeToggle />
//           <Icon as={Bolt} />
//         </View>
//       </View>

//       <View className='items-center gap-4'>
//         <View className='border-4 p-2 border-primary/30 rounded-full'>
//           <Avatar alt='Usuario' className='size-32'>
//             <AvatarImage
//               source={{
//                 uri: 'https://www.pngkey.com/png/full/50-506462_we-love-cactus-logo-cactus-logo.png'
//               }}
//             />
//             <AvatarFallback>
//               <Text>US</Text>
//             </AvatarFallback>
//           </Avatar>
//         </View>

//         <View className='items-center'>
//           <Text variant='h3'>Bryan Alvarez</Text>
//           <Text variant='muted'>Se unió el 14 de junio del 2005</Text>
//         </View>

//         <View className='flex-row gap-4 px-7'>
//           <View className='items-center bg-card flex-1 rounded p-2 gap-1'>
//             <View className='flex-row items-end gap-2'>
//               <Icon as={Flame} size={36} className='text-destructive' />
//               <Text variant='h3'>12</Text>
//             </View>

//             <Text className='font-semibold'>Racha actual</Text>
//           </View>

//           <View className='items-center bg-card flex-1 rounded p-2 gap-1'>
//             <View className='flex-row items-end gap-2'>
//               <Icon as={Star} size={36} className='text-primary' />
//               <Text variant='h3'>14.000</Text>
//             </View>

//             <Text className='font-semibold'>XP acumulado</Text>
//           </View>
//         </View>
//       </View>

//       <View className='bg-card p-7 flex-row justify-between items-center border border-border rounded-2xl mx-4'>
//         <View>
//           <Text variant='h3'>Liga plateada</Text>
//           <Text variant='muted'>
//             Puntos faltantes para subir de liga:{' '}
//             <Text className='font-semibold'>2</Text>
//           </Text>
//         </View>

//         <View className='bg-gray-200 rounded-full p-2'>
//           <Icon as={Shield} size={42} className='text-card-foreground/30' />
//         </View>
//       </View>

//       <View className='border border-border mx-4 p-4 rounded-2xl gap-7'>
//         <View className='flex-row gap-4 items-center'>
//           <View className='bg-blue-200 p-2 rounded-full'>
//             <Icon size={32} as={IdCard} className='text-blue-500' />
//           </View>

//           <View className='flex-1'>
//             <Text variant='h3'>Detalles de cuenta</Text>
//             <Text variant='muted'>Cambiar correo, contraseña</Text>
//           </View>

//           <View>
//             <Icon
//               size={36}
//               as={ChevronRight}
//               strokeWidth={1.5}
//               className='text-card-foreground/30'
//             />
//           </View>
//         </View>

//         <View className='flex-row gap-4 items-center'>
//           <View className='bg-purple-200 p-2 rounded-full'>
//             <Icon size={32} as={Settings} className='text-purple-500' />
//           </View>

//           <View className='flex-1'>
//             <Text variant='h3'>Configuración</Text>
//             <Text variant='muted'>Sonido, notificaciones</Text>
//           </View>

//           <View>
//             <Icon
//               size={36}
//               as={ChevronRight}
//               strokeWidth={1.5}
//               className='text-card-foreground/30'
//             />
//           </View>
//         </View>

//         <View className='flex-row gap-4 items-center'>
//           <View className='bg-red-200 p-2 rounded-full'>
//             <Icon size={32} as={LogOut} className='text-red-500' />
//           </View>

//           <View className='flex-1'>
//             <Text variant='h3'>Cerrar sesión</Text>
//             <Text variant='muted'>Inicia sesión nuevamente</Text>
//           </View>

//           <View>
//             <Icon
//               size={36}
//               as={ChevronRight}
//               strokeWidth={1.5}
//               className='text-card-foreground/30'
//             />
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   )
// }
