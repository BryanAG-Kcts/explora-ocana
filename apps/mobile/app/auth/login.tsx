import { Link } from 'expo-router'
import { ScrollText } from 'lucide-react-native'
import { View } from 'react-native'
import { LoginForm } from '@/components/pages/auth/loginForm'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { i18n } from '@/constants/global/i18n'

export default function Login() {
  return (
    <View className='flex-1 items-center gap-2 p-4'>
      <View className='rounded-full p-4 border border-primary bg-chart-1/30 mb-3'>
        <Icon
          as={ScrollText}
          size={50}
          className='text-primary'
          strokeWidth={1}
        />
      </View>

      <Text variant='h1'>
        {i18n.t('login.title')}
        <Text variant='h1' className='text-primary'>
          {i18n.t('login.strongTitle')}
        </Text>
      </Text>

      <Text className='text-center'>{i18n.t('login.description')}</Text>
      <View className='w-full h-30 bg-primary/30 rounded' />

      <LoginForm />
      <Text>
        {i18n.t('login.doNotHaveAccount')}
        <Link href='/auth/register' className='text-primary'>
          {i18n.t('login.registerHere')}
        </Link>
      </Text>

      <Link href='/home' className='text-primary'>
        Directo a home
      </Link>
    </View>
  )
}
