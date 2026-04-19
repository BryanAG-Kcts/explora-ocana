import { SceneMap } from 'react-native-tab-view'
import { CustomTab } from '@/components/global/customTab/customTab'
import { Home } from '@/components/pages/home/home'
import Profile from '@/components/pages/profile/profile'

const renderScene = SceneMap({
  home: Home,
  profile: Profile
})
const routes = [
  { key: 'home', title: 'Home' },
  { key: 'profile', title: 'Perfil' }
]

export default function Index() {
  return <CustomTab renderScene={renderScene} routes={routes} />
}
