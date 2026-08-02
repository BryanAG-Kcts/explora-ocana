import type { LucideIcon } from 'lucide-react-native'
import { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { type Route, type SceneMap, TabView } from 'react-native-tab-view'
import { TabBody } from './tabBody'

export interface TabRoute extends Route {
  iconComponent: LucideIcon
}

interface Props {
  renderScene: ReturnType<typeof SceneMap>
  routes: TabRoute[]
  tabBarPosition?: 'top' | 'bottom'
}
export function CustomTab({
  renderScene,
  routes,
  tabBarPosition = 'bottom'
}: Props) {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition={tabBarPosition}
      lazy
      lazyPreloadDistance={1}
      renderTabBar={TabBody}
    />
  )
}
