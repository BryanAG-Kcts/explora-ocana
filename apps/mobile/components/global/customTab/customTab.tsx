import { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { type Route, type SceneMap, TabView } from 'react-native-tab-view'
import { TabBody } from './tabBody'

interface Props {
  renderScene: ReturnType<typeof SceneMap>
  routes: Route[]
}
export function CustomTab({ renderScene, routes }: Props) {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition='bottom'
      lazy
      lazyPreloadDistance={1}
      renderTabBar={TabBody}
    />
  )
}
