import { Link } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { NodePath } from './nodePath'
import { RouteNode } from './routeNode'
import { SectionTitle } from './sectionTitle'
import { StatsBar } from './statsBar'

export function Home() {
  const route = [
    {
      id: 1,
      title: 'Los indios y cultura',
      nodes: [
        { top: 0, left: 0, id: 1, prev: [], type: 'quest' as const },
        { top: 184, left: 128, id: 2, prev: [0, 0], type: 'ar' as const },
        { top: 450, left: 250, id: 3, prev: [184, 128], type: 'quiz' as const }
      ],
      maxWidth: 250 + 140,
      maxHeight: 450 + 110
    },
    {
      id: 2,
      title: 'Los indios y cultura',
      nodes: [
        { top: 0, left: 0, id: 12, prev: [], type: 'quest' as const },
        { top: 184, left: 128, id: 22, prev: [0, 0], type: 'ar' as const },
        { top: 450, left: 50, id: 32, prev: [184, 128], type: 'quiz' as const }
      ],
      maxWidth: 250 + 140,
      maxHeight: 450 + 110
    }
  ]

  return (
    <ScrollView className='flex-1'>
      <StatsBar />
      <View>
        {route.map(({ nodes, title, id, maxHeight, maxWidth }, index) => (
          <View key={id}>
            <SectionTitle title={title} sectionNumber={index + 1} />
            <View style={{ width: maxWidth, height: maxHeight }}>
              {nodes.map(({ top, left, id, prev, type }) => (
                <View key={id}>
                  <Link
                    href={`/home/${type}/${id}`}
                    style={{ position: 'absolute', top, left }}
                  >
                    <RouteNode top={top} left={left} />
                  </Link>

                  {prev.length > 0 && (
                    <NodePath
                      init={[prev[0], prev[1]]}
                      end={[top, left]}
                      dotted={id === 2}
                    />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
