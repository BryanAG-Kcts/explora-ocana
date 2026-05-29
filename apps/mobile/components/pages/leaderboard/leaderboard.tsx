import { useState } from 'react'
import { View } from 'react-native'
import { BorderHeader } from '@/components/global/borderHeader'
import { ThemeToggle } from '@/components/global/themeToggle'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import {
  LEADERBOARD_DATA_SCHOOLS,
  LEADERBOARD_DATA_USERS
} from '@/constants/pages/leaderboard/Leaderboard'
import { LeaderboardCards } from './leaderboardCards'
import { PodiumCards } from './podiumCard'

export function Leaderboard() {
  const [selectedStudents, setSelectedStudents] = useState(true)

  const topThreeStudents = LEADERBOARD_DATA_USERS.slice(0, 3)
  const theRestStudents = LEADERBOARD_DATA_USERS.slice(3)
  const podiumOrderStudents = [
    topThreeStudents[1],
    topThreeStudents[0],
    topThreeStudents[2]
  ]

  const topThreeSchools = LEADERBOARD_DATA_SCHOOLS.slice(0, 3)
  const theRestSchools = LEADERBOARD_DATA_SCHOOLS.slice(3)
  const podiumOrderSchools = [
    topThreeSchools[1],
    topThreeSchools[0],
    topThreeSchools[2]
  ]

  return (
    <View className='flex-1 gap-2'>
      <BorderHeader>
        <Text className='font-semibold'>Leyendas</Text>

        <View className='items-end flex-1'>
          <ThemeToggle />
        </View>
      </BorderHeader>

      <View className='flex-row max-w-xs gap-4 self-center'>
        <Button
          className='flex-1'
          variant={selectedStudents ? 'default' : 'outline'}
          onPress={() => setSelectedStudents(true)}
        >
          <Text>Estudiantes</Text>
        </Button>

        <Button
          className='flex-1'
          variant={selectedStudents ? 'outline' : 'default'}
          onPress={() => setSelectedStudents(false)}
        >
          <Text>Colegios</Text>
        </Button>
      </View>

      <View className='p-4 gap-2 flex-1'>
        <View className='items-center'>
          <Text variant='h2' className='text-primary'>
            TOP LEYENDAS
          </Text>
          <Text variant='muted'>¡La competencia está que quema!</Text>
        </View>

        {selectedStudents && (
          <>
            <PodiumCards users={podiumOrderStudents} />
            <LeaderboardCards users={theRestStudents} />
          </>
        )}

        {!selectedStudents && (
          <>
            <PodiumCards users={podiumOrderSchools} />
            <LeaderboardCards users={theRestSchools} />
          </>
        )}
      </View>
    </View>
  )
}
