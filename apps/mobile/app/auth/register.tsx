import { Link } from 'expo-router'
import { Send } from 'lucide-react-native'
import { View } from 'react-native'
import { type Route, SceneMap } from 'react-native-tab-view'
import { CustomTab } from '@/components/global/customTab/customTab'
import { CitizenForm } from '@/components/pages/auth/citizenForm'
import { StudentForm } from '@/components/pages/auth/studentForm'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { i18n } from '@/constants/global/i18n'

const renderScene = SceneMap({
  _login: () => <StudentForm />,
  _register: () => <CitizenForm />
})
const routes: Route[] = [
  { key: '_register', title: 'Ciudadano', icon: 'Sparkles' },
  { key: '_login', title: 'Estudiante', icon: 'LogIn' }
]

export default function Register() {
  return (
    <>
      <View className='items-center gap-2 p-4'>
        <View className='rounded-full p-4 border border-primary bg-chart-1/30 mb-3'>
          <Icon as={Send} size={50} className='text-primary' strokeWidth={1} />
        </View>

        <Text variant='h1'>
          {i18n.t('register.title')}
          <Text variant='h1' className='text-primary'>
            {i18n.t('register.strongTitle')}
          </Text>
        </Text>

        <Text>
          {i18n.t('register.allReadyHaveAccount')}
          <Link href='/auth/login' dismissTo className='text-primary'>
            {i18n.t('register.loginHere')}
          </Link>
        </Text>
      </View>

      <CustomTab renderScene={renderScene} routes={routes} />
    </>
  )
}
