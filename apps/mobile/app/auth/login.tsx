import { Link, useRouter } from 'expo-router'
import { ScrollText } from 'lucide-react-native'
import { useEffect } from 'react'
import { View } from 'react-native'
import { LoginForm } from '@/components/pages/auth/loginForm'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import {
  getAccessToken,
  getRefreshToken,
  saveTokens
} from '@/constants/global/authStorage'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { useUserStore } from '@/hooks/userStore'
import { I18N } from '@/locales/i18n'

export default function Login() {
  const router = useRouter()
  const { setUser } = useUserStore()

  useEffect(() => {
    ;(async () => {
      const accessToken = await getAccessToken()
      const refreshToken = await getRefreshToken()
      const res = axiosInstance.post('/auth/refresh', {
        accessToken,
        refreshToken
      })

      const [response, error] = await safePromise(res)
      if (error || !response?.data) {
        return
      }

      await saveTokens(response.data.accessToken, response.data.refreshToken)
      setUser(response.data.user)
      router.replace('/home')
    })()
  }, [router, setUser])

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
        {I18N.t('LOGIN.TITLE')}
        <Text variant='h1' className='text-primary'>
          {I18N.t('LOGIN.TITLE_2')}
        </Text>
      </Text>

      <Text className='text-center'>{I18N.t('LOGIN.DESC')}</Text>
      <View className='w-full h-30 bg-primary/30 rounded' />
      <LoginForm />

      <Text>
        {I18N.t('LOGIN.NO_ACCOUNT')}
        <Link href='/auth/register' className='text-primary underline'>
          {I18N.t('LOGIN.REGISTER_HERE')}
        </Link>
      </Text>
    </View>
  )
}
