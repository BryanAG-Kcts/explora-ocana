import { useRouter } from 'expo-router'
import {
  Accessibility,
  ArrowLeft,
  Bell,
  Info,
  Volume2
} from 'lucide-react-native'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { BorderHeader } from '@/components/global/borderHeader'
import { CustomModal } from '@/components/global/customModal'
import { ThemeToggle } from '@/components/global/themeToggle'
import { About } from '@/components/pages/settings/about'
import { Sounds } from '@/components/pages/settings/sounds'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { Accessibility as Acc } from '../../components/pages/settings/accesibility'
import { Notifications } from '../../components/pages/settings/nots'

const SETTINGS_OPTIONS = [
  {
    title: 'Notificaciones',
    description: 'Activa o desactiva las notificaciones.',
    icon: Bell,
    modal: 'notifications'
  },
  {
    title: 'Sonidos',
    description: 'Configura los sonidos de la aplicación.',
    icon: Volume2,
    modal: 'sounds'
  },
  {
    title: 'Accesibilidad',
    description: 'Configura las opciones de accesibilidad.',
    icon: Accessibility,
    modal: 'accessibility'
  },
  {
    title: 'Sobre Explora Ocaña',
    description: 'Conoce más acerca de Explora Ocaña.',
    icon: Info,
    modal: 'about'
  }
] as const

export default function Settings() {
  const router = useRouter()
  const [modalSelect, setModalSelect] = useState<
    'notifications' | 'sounds' | 'accessibility' | 'about' | ''
  >('')

  return (
    <View>
      <BorderHeader>
        <View className='flex-row items-center gap-2 justify-between flex-1'>
          <View className='flex-row gap-4 items-center'>
            <TouchableOpacity onPress={() => router.back()}>
              <Icon as={ArrowLeft} />
            </TouchableOpacity>
            <Text variant='h4'>configuración</Text>
          </View>
          <ThemeToggle />
        </View>
      </BorderHeader>

      <View className='rounded-2xl border border-border overflow-hidden m-4'>
        {SETTINGS_OPTIONS.map((option, index) => {
          const IconComponent = option.icon
          const isLast = index === SETTINGS_OPTIONS.length - 1

          return (
            <TouchableOpacity
              key={option.title}
              onPress={() => setModalSelect(option.modal)}
              className={`flex-row items-center p-4 ${
                !isLast ? 'border-b border-muted' : ''
              }`}
            >
              <View className='w-10 h-10 rounded-full bg-muted items-center justify-center mr-3'>
                <Icon as={IconComponent} size={20} />
              </View>

              <View className='flex-1'>
                <Text className='text-base font-medium'>{option.title}</Text>

                <Text variant='muted' className='text-sm mt-1'>
                  {option.description}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>

      <Text variant='muted' className='text-center text-xs mt-3'>
        Versión 1.0.0
      </Text>

      <CustomModal
        isModalVisible={modalSelect === 'notifications'}
        handleCloseModal={() => setModalSelect('')}
      >
        <Notifications />
      </CustomModal>
      <CustomModal
        isModalVisible={modalSelect === 'sounds'}
        handleCloseModal={() => setModalSelect('')}
      >
        <Sounds />
      </CustomModal>
      <CustomModal
        isModalVisible={modalSelect === 'accessibility'}
        handleCloseModal={() => setModalSelect('')}
      >
        <Acc />
      </CustomModal>
      <CustomModal
        isModalVisible={modalSelect === 'about'}
        handleCloseModal={() => setModalSelect('')}
      >
        <About />
      </CustomModal>
    </View>
  )
}
