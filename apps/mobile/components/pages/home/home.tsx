import { ScrollView, View } from 'react-native'
import { learningRoute } from '@/constants/pages/home/learningRoute'
import { RouteNodes } from './routeNodes'
import { SectionTitle } from './sectionTitle'
import { StatsBar } from './statsBar'

export function Home() {
  return (
    <ScrollView className='flex-1'>
      <StatsBar />
      <View>
        {learningRoute.map(({ id, width, height, nodes, title }, index) => (
          <View key={id}>
            <SectionTitle title={title} sectionNumber={index + 1} />
            <View style={{ width, height, gap: 70 }}>
              <RouteNodes nodes={nodes} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
