import { useEffect } from 'react'
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  View
} from 'react-native'
import Toast from 'react-native-toast-message'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { learningRoute } from '@/constants/pages/home/learningRoute'
import { useGlobalState } from '@/hooks/useGlobalState'
import { useUserStore } from '@/hooks/userStore'
import { RouteNodes } from './routeNodes'
import { SectionTitle } from './sectionTitle'
import { StatsBar } from './statsBar'

export function Home() {
  const { progress, setProgress, setUserStats, userStats } = useGlobalState()
  const { user } = useUserStore()

  useEffect(() => {
    if (progress || !user) return

    ;(async () => {
      const [response, error] = await safePromise(
        Promise.all([
          axiosInstance.get(`/missions/required-work`),
          axiosInstance.get(`/missions/user-progress/${user?.id}`),
          axiosInstance.get(`/user/${user?.id}/profile`)
        ])
      )

      if (error || !response) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Ocurrió un error al obtener la información del usuario'
        })

        return
      }

      const r1 = response[0].data as string[]
      const r2 = response[1].data as string[]
      const r3 = response[2].data
      setUserStats(r3)
      setProgress(
        r1.map((r, index) => ({
          completed: Number(r2[index]),
          required: Number(r),
          percent: (Number(r2[index]) / Number(r)) * 100
        }))
      )
    })()
  }, [setProgress, progress, user, setUserStats])

  if (!progress || !userStats) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <ScrollView className='flex-1'>
      <StatsBar streak={userStats?.streak} xp={userStats?.xp} />

      {learningRoute.map(({ id, height, nodes, title }, index) => (
        <ImageBackground
          key={id}
          source={SECTIONS_BG[Math.min(index, SECTIONS_BG.length - 1)]}
          resizeMode='cover'
        >
          <View>
            <SectionTitle
              title={title}
              sectionNumber={index + 1}
              percent={progress[index]?.percent ?? ''}
              completed={progress[index]?.completed ?? ''}
              total={progress[index]?.required ?? ''}
            />
            <View style={{ height, gap: 70 }}>
              <RouteNodes
                nodes={nodes}
                progress={progress}
                indexSection={index}
                sectionId={id}
              />
            </View>
          </View>
        </ImageBackground>
      ))}
    </ScrollView>
  )
}

const SECTIONS_BG = [
  require('@/assets/images/fondo.jpg'),
  require('@/assets/images/fondo2.jpg')
]
