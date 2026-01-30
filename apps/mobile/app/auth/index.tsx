import { View } from 'react-native'
import { type Route, SceneMap } from 'react-native-tab-view'
import { CustomTab } from '@/components/global/customTab/customTab'
import { ThemeToggle } from '@/components/global/themeToggle'
import _login from './_login'
import _register from './_register'

const renderScene = SceneMap({ _login, _register })
const routes: Route[] = [
  { key: '_register', title: 'Registrarse', icon: 'Sparkles' },
  { key: '_login', title: 'Iniciar sesión', icon: 'LogIn' }
]

export default function Index() {
  return (
    <>
      <View className='p-2 bg-primary items-end'>
        <View className='rounded-full bg-card'>
          <ThemeToggle />
        </View>
      </View>

      <CustomTab renderScene={renderScene} routes={routes} />
    </>
  )
}
