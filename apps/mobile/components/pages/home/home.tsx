import { useEffect } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { learningRoute } from '@/constants/pages/home/learningRoute'
import { useGlobalState } from '@/hooks/useGlobalState'
import { RouteNodes } from './routeNodes'
import { SectionTitle } from './sectionTitle'
import { StatsBar } from './statsBar'

export function Home() {
  const { progress, setProgress } = useGlobalState()

  useEffect(() => {
    if (progress) return

    ;(async () => {
      const res = axiosInstance.get('/missions/')
      const [response, error] = await safePromise(res)
      setProgress(PROGRESS)
      if (error || !response) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Ocurrió un error al obtener la información requerida'
        })

        return
      }

      setProgress(PROGRESS)
    })()
  }, [setProgress, progress])

  if (!progress) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <ScrollView className='flex-1'>
      <StatsBar />
      <View>
        {learningRoute.map(({ id, height, nodes, title }, index) => (
          <View key={id}>
            <SectionTitle title={title} sectionNumber={index + 1} />
            <View style={{ height, gap: 70 }}>
              <RouteNodes
                nodes={nodes}
                sectionProgress={progress[id]}
                progress={progress}
                prevSectionId={learningRoute[index - 1]?.id || null}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const PROGRESS = {
  '1a': {
    completed: 4,
    required: 6,
    requiredCompleted: 4
  },
  '1b': {
    completed: 0,
    required: 5,
    requiredCompleted: 0
  }
}
