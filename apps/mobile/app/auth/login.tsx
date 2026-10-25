import { Link, useRouter } from 'expo-router'
import { ScrollText } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View
} from 'react-native'

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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    async function checkSession() {
      const accessToken = await getAccessToken()
      const refreshToken = await getRefreshToken()

      if (!accessToken || !refreshToken) {
        if (active) setLoading(false)
        return
      }

      const [response, error] = await safePromise(
        axiosInstance.post('/auth/refresh', {
          accessToken,
          refreshToken
        })
      )

      if (!active) return

      if (error || !response?.data) {
        setLoading(false)
        return
      }

      await saveTokens(response.data.accessToken, response.data.refreshToken)
      if (!active) return

      setUser(response.data.user)
      router.replace('/home')
    }

    checkSession()

    return () => {
      active = false
    }
  }, [router, setUser])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
    >
      <ScrollView
        className='flex-1'
        contentContainerClassName='grow items-center p-4'
        keyboardShouldPersistTaps='handled'
        keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
      >
        <View className='w-full items-center gap-2'>
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

          {loading ? (
            <View className='flex-1 justify-center items-center'>
              <ActivityIndicator size='large' />
            </View>
          ) : (
            <View className='w-full flex-1 justify-between items-center pb-5'>
              <LoginForm />

              <Text>
                {I18N.t('LOGIN.NO_ACCOUNT')}{' '}
                <Link href='/auth/register' className='text-primary underline'>
                  {I18N.t('LOGIN.REGISTER_HERE')}
                </Link>
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
