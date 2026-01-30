import { LogIn, Sparkles } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import type { Route } from 'react-native-tab-view'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'

interface Props {
  route: Route
  isActive: boolean
  onPress: () => void
}
export function TabItem({ route, isActive, onPress }: Props) {
  return (
    <TouchableOpacity className='flex-1 px-3' onPress={onPress}>
      <Badge className='p-2 gap-2' variant={isActive ? 'default' : 'outline'}>
        <Icon
          as={POSSIBLE_ICONS[route.icon as keyof typeof POSSIBLE_ICONS]}
          className={isActive ? 'text-primary-foreground' : 'text-border'}
        />

        {isActive && (
          <Text className='text-primary-foreground'>{route.title}</Text>
        )}
      </Badge>
    </TouchableOpacity>
  )
}

const POSSIBLE_ICONS = {
  LogIn,
  Sparkles
}
