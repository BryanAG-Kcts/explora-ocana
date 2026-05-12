import { Link } from 'expo-router'
import { Send } from 'lucide-react-native'
import { View } from 'react-native'
import { RegisterForm } from '@/components/pages/auth/registerForm'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { i18n } from '@/locales/i18n'

export default function Register() {
  return (
    <View className='flex-1 items-center gap-2 p-4'>
      <View className='rounded-full p-4 border border-primary bg-chart-1/30 mb-3'>
        <Icon as={Send} size={50} className='text-primary' strokeWidth={1} />
      </View>

      <Text variant='h1'>
        {i18n.t('REGISTER.TITLE')}
        <Text variant='h1' className='text-primary'>
          {i18n.t('REGISTER.TITLE_2')}
        </Text>
      </Text>

      <Text>
        {i18n.t('REGISTER.HAVE_ACCOUNT')}
        <Link href='/auth/login' dismissTo className='text-primary underline'>
          {i18n.t('REGISTER.LOGIN_HERE')}
        </Link>
      </Text>

      <RegisterForm />
    </View>
  )
}
