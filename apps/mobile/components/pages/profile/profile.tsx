import { useRouter } from 'expo-router'
import {
  Bolt,
  ChevronRight,
  Flame,
  LogOut,
  TestTubeDiagonal,
  UserRound
} from 'lucide-react-native'
import { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { CustomAlertDialog } from '@/components/global/alertDialog'
import { BorderHeader } from '@/components/global/borderHeader'
import { CustomModal } from '@/components/global/customModal'
import { ThemeToggle } from '@/components/global/themeToggle'
import { UserAvatar } from '@/components/global/userAvatar'
import { Avatar } from '@/components/ui/avatar'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { getInitials } from '@/constants/pages/profile/profile'
import { useGlobalState } from '@/hooks/useGlobalState'
import { useUserStore } from '@/hooks/userStore'
import { ProfileInfo } from './profileInfo'
import { StatCard } from './statCard'

export function Profile() {
  const { logOut, user } = useUserStore()
  const { clean } = useGlobalState()
  const router = useRouter()
  const { userStats } = useGlobalState()
  const [modalSelect, setModalSelect] = useState<'account' | 'settings' | ''>(
    ''
  )

  async function handleLogout() {
    await logOut()
    clean()
    router.replace('/auth/login')
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
          <Avatar
            alt={getInitials(user?.fullname || '')}
            className='size-24 bg-muted mb-4'
          >
            <UserAvatar userId={user?.id ?? ''} />
          </Avatar>

          <Text className='text-2xl font-bold'>{user?.fullname}</Text>
          <Text variant='muted'>Miembro desde {user?.createdAt}</Text>
        </View>

        <Text variant='large' className='font-semibold mb-3'>
          Tus Estadísticas
        </Text>
        <View className='flex-row flex-wrap justify-between mb-5'>
          <StatCard
            title='Racha'
            value={
              userStats?.streak === null ? '-' : `${userStats?.streak} días`
            }
            icon={<Icon as={Flame} size={18} className='text-destructive' />}
          />

          <StatCard
            title='Total XP'
            value={userStats?.xp ?? '-'}
            icon={
              <Icon
                as={TestTubeDiagonal}
                size={18}
                className='text-amber-500'
              />
            }
          />
          {/* <StatCard
            title='Liga'
            value={USER_DATA.league}
            icon={<Icon as={Trophy} size={18} className='text-yellow-500' />}
          /> */}
        </View>

        <View className='rounded-2xl border border-border overflow-hidden shadow-sm mb-8'>
          <TouchableOpacity
            onPress={() => setModalSelect('account')}
            className='flex-row justify-between items-center p-4 border-b border-muted'
          >
            <View className='flex-row items-center gap-3'>
              <Icon as={UserRound} size={18} />
              <Text className='font-medium'>Información de cuenta</Text>
            </View>

            <Icon as={ChevronRight} size={12} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/home/settings')}
            className='flex-row justify-between items-center p-4 border-b border-muted'
          >
            <View className='flex-row items-center gap-3'>
              <Icon as={Bolt} size={18} />
              <Text className='font-medium'>Configuración</Text>
            </View>

            <Icon as={ChevronRight} size={12} />
          </TouchableOpacity>

          <CustomAlertDialog
            title='¿Cerrar sesión?'
            desc='¿Estás seguro de que deseas cerrar sesión?'
            onAccept={handleLogout}
          >
            <TouchableOpacity>
              <View className='flex-row items-center p-4 border-b border-muted gap-3'>
                <Icon as={LogOut} size={18} className='text-destructive' />
                <Text className='font-medium text-destructive'>
                  Cerrar sesión
                </Text>
              </View>
            </TouchableOpacity>
          </CustomAlertDialog>
        </View>
      </View>

      <CustomModal
        isModalVisible={modalSelect === 'account'}
        handleCloseModal={() => setModalSelect('')}
      >
        {user && <ProfileInfo user={user} />}
      </CustomModal>
    </ScrollView>
  )
}
