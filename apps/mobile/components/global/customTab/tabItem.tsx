import { Animated, TouchableOpacity, View } from 'react-native'
import { Icon } from '@/components/ui/icon'
import type { TabRoute } from './customTab'

interface Props {
  route: TabRoute
  isActive: boolean
  opacity: Animated.AnimatedInterpolation<number>
  onPress: () => void
}
export function TabItem({ route, isActive, opacity, onPress }: Props) {
  return (
    <View className='rounded-full flex-1 overflow-hidden relative'>
      <Animated.View
        style={{ opacity }}
        className='absolute w-full flex-1 h-full bg-primary left-0 top-0'
      />

      <TouchableOpacity onPress={onPress} className='px-4 py-2 items-center'>
        <Icon
          as={route.iconComponent}
          size={22}
          color={isActive ? 'white' : 'gray'}
        />
      </TouchableOpacity>
    </View>
  )
}
