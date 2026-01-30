import { ScrollText } from 'lucide-react-native'
import { View } from 'react-native'
import { LoginForm } from '@/components/pages/auth/loginForm'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'

export default function _login() {
  return (
    <View className='flex-1'>
      <View className='bg-primary items-center gap-2 pb-3'>
        <View className='rounded-full bg-card p-4 mb-5'>
          <Icon as={ScrollText} size={40} className='text-primary' />
        </View>

        <Text variant='h1' className='text-primary-foreground'>
          Bienvenido de nuevo
        </Text>
        <Text className='text-primary-foreground'>
          Descubre la historia que nos une
        </Text>
      </View>

      <LoginForm />
    </View>
  )
}
