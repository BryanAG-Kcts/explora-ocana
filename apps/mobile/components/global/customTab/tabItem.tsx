import { Animated, TouchableOpacity, View } from 'react-native'
import type { Route } from 'react-native-tab-view'
import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'

interface Props {
  route: Route
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

      <TouchableOpacity onPress={onPress} className='px-4 py-2'>
        <Text
          className={cn('text-center', !isActive && 'text-muted-foreground')}
        >
          {route.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
