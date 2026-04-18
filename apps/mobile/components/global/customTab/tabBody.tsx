import { View } from 'react-native'
import type { Route, TabBarProps } from 'react-native-tab-view'
import { TabItem } from './tabItem'

export function TabBody({
  navigationState,
  jumpTo,
  position
}: TabBarProps<Route>) {
  const inputRange = navigationState.routes.map((_, index) => index)
  return (
    <View className='flex-row gap-2 bg-secondary rounded-full overflow-hidden mx-4 p-1'>
      {navigationState.routes.map((route, index) => {
        const isActive = navigationState.index === index
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex =>
            inputIndex === index ? 1 : 0
          )
        })

        return (
          <TabItem
            key={route.key}
            route={route}
            isActive={isActive}
            opacity={opacity}
            onPress={() => !isActive && jumpTo(route.key)}
          />
        )
      })}
    </View>
  )
}
