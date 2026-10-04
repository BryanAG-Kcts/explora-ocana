import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import { PROGRESS } from '@/constants/pages/home/home'
import { learningRoute } from '@/constants/pages/home/learningRoute'
import { RouteNodes } from './routeNodes'
import { SectionTitle } from './sectionTitle'
import { StatsBar } from './statsBar'

export function Home() {
  const [progress, setProgress] = useState(PROGRESS)

  useEffect(() => {
    ;(async () => {
      const res = axiosInstance.get('/missions/')
      const [response, error] = await safePromise(res)
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
  }, [])

  return (
    <ScrollView className='flex-1'>
      <StatsBar />
      <View>
        {learningRoute.map(({ id, width, height, nodes, title }, index) => (
          <View key={id}>
            <SectionTitle title={title} sectionNumber={index + 1} />
            <View style={{ width, height, gap: 70 }}>
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
