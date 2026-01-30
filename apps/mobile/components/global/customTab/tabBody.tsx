/** biome-ignore-all lint/suspicious/noExplicitAny: <TabBody es genérico> */
import { View } from 'react-native'
import type { Route, TabBarProps } from 'react-native-tab-view'
import { TabItem } from './tabItem'

export function TabBody({ navigationState, jumpTo }: TabBarProps<Route>) {
  return (
    <View className='flex-row'>
      {navigationState.routes.map((route, index) => {
        const isActive = navigationState.index === index
        return (
          <TabItem
            key={route.key}
            route={route}
            isActive={isActive}
            onPress={() => !isActive && jumpTo(route.key)}
          />
        )
      })}
    </View>
  )
}
