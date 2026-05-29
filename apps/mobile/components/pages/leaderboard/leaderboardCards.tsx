import { ScrollView, View } from 'react-native'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Text } from '@/components/ui/text'
import type {
  LEADERBOARD_DATA_SCHOOLS,
  LEADERBOARD_DATA_USERS
} from '@/constants/pages/leaderboard/Leaderboard'

interface Props {
  users: typeof LEADERBOARD_DATA_USERS | typeof LEADERBOARD_DATA_SCHOOLS
}
export function LeaderboardCards({ users }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className='flex-1'
      contentContainerClassName='gap-2'
    >
      {users.map((user, index) => (
        <View
          key={user.id}
          className='flex-row items-center p-4 rounded-2xl border border-border gap-4'
        >
          <Text className='text-gray-400 font-black text-base'>
            {index + 4}
          </Text>

          <Avatar alt={user.name} className='size-11 bg-muted'>
            <AvatarImage source={{ uri: user.avatar }} />
          </Avatar>

          <View className='flex-1'>
            <Text className='font-bold text-sm'>{user.name}</Text>
            {(user.streak ?? 0) > 0 && (
              <Text className='text-orange-400 text-xs font-semibold'>
                🔥 {user.streak} días seguidos
              </Text>
            )}
          </View>

          <Text className='text-primary font-black text-xs bg-card px-3 py-1.5 rounded-full'>
            {user.xp} <Text className='text-[10px] text-gray-400'>XP</Text>
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}
