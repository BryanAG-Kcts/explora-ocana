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
import { useState } from 'react'
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native'
import { BorderHeader } from '@/components/global/borderHeader'
import { CustomModal } from '@/components/global/customModal'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { ProfileInfo } from './profileInfo'
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
  const [modalSelect, setModalSelect] = useState<'account' | 'settings' | ''>(
    ''
  )

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
            onPress={() => setModalSelect('account')}
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
            onPress={() => setModalSelect('settings')}
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

      <CustomModal
        isModalVisible={modalSelect === 'account'}
        handleCloseModal={() => setModalSelect('')}
      >
        <ProfileInfo />
      </CustomModal>
    </ScrollView>
  )
}
