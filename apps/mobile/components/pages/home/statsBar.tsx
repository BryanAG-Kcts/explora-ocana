import { Flame, Shield, Star } from 'lucide-react-native'
import { View } from 'react-native'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'

export function StatsBar() {
  return (
    <View className='flex-row gap-4 items-center p-2 px-5 border-b border-primary/30'>
      <View className='flex-row gap-2 items-center'>
        <Icon as={Flame} className='text-destructive' />
        <Text className='font-semibold'>12</Text>
      </View>

      <View className='flex-row gap-2 items-center flex-1'>
        <Icon as={Star} className='text-primary' />
        <Text className='font-semibold'>14.000</Text>
      </View>

      <Badge>
        <Icon as={Shield} className='text-primary-foreground' />
        <Text>Liga 1</Text>
      </Badge>

      <ThemeToggle />
    </View>
  )
}
