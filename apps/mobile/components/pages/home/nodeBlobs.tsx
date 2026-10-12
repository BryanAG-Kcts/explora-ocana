import { type ColorValue, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import {
  type NodeIcon,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'

const NODE_BLOBS: Record<NodeIcon, [ColorValue, ColorValue, ColorValue]> = {
  book: ['#BFE5FF', '#F8EDDC', '#FCEDD5'],
  quiz: ['#E5D2FF', '#FCCA3C', '#C34D0A'],
  castle: ['#FFD4D1', '#FFBDB8', '#FFE4D8'],
  puzzle: ['#F8B83A', '#8A56CC', '#4A78D0'],
  paper: ['#E8D4B4', '#C42835', '#E8A428'],
  chestCard: ['#8B5A33', '#D4A038', '#3B6396'],
  compass: ['#A86F54', '#5B9844', '#4A6B8C'],
  gear: ['#B07A48', '#9AA4B5', '#78645C'],
  crystal: ['#A57DF0', '#62D9D9', '#2A447A']
} as const

interface Props {
  type: NodeIcon
  id: string
}
export function NodeBlobs({ type, id }: Props) {
  const blobs = NODE_BLOBS[type]

  return (
    <View
      pointerEvents='none'
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <NodeBlob id={id} color={blobs[0]} size={ROUTE_NODE_SIZE.width * 1.4} />

      <View
        style={{
          position: 'absolute',
          top: -5,
          right: -5
        }}
      >
        <NodeBlob id={id} color={blobs[1]} size={ROUTE_NODE_SIZE.width * 0.7} />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: -10,
          left: -10
        }}
      >
        <NodeBlob id={id} color={blobs[2]} size={ROUTE_NODE_SIZE.width * 0.5} />
      </View>
    </View>
  )
}

const hashString = (str: string) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  return Math.abs(hash)
}

const BLOB_PATHS = [
  'M39.6,-66.1C49.8,-55.8,55.8,-41.2,63,-26.1C70.2,-11,78.6,4.6,76.5,19.2C74.4,33.8,61.8,47.4,47.6,56.4C33.4,65.4,17.6,69.8,1.4,67.4C-14.8,65.1,-30.5,56.1,-43.3,44.7C-56.1,33.3,-65.9,19.5,-69.5,4.3C-73.1,-10.9,-70.5,-27.5,-61.6,-40.4C-52.7,-53.3,-37.5,-62.5,-23.1,-68.8C-8.7,-75.1,4.9,-78.5,19.1,-75.6C33.3,-72.7,48.1,-63.5,39.6,-66.1Z',
  'M48.4,-72.5C61.3,-64.1,69,-48.4,72.6,-32.8C76.2,-17.2,75.7,-1.7,70.9,12.3C66.1,26.3,57,38.8,45.4,49.1C33.8,59.4,19.7,67.5,4.4,70C-10.9,72.5,-27.4,69.4,-40.1,60.2C-52.8,51,-61.7,35.7,-67.2,19.3C-72.7,2.9,-74.8,-14.6,-68.9,-29.3C-63,-44,-49.1,-55.9,-34.5,-64.1C-19.9,-72.3,-4.6,-76.8,11.3,-74.9C27.2,-73,43.1,-64.7,48.4,-72.5Z',
  'M52.2,-68.1C65.5,-59.1,72.7,-41.9,74.9,-24.6C77.1,-7.3,74.3,10.1,66.1,23.9C57.9,37.7,44.3,47.9,29.9,56.6C15.5,65.3,0.3,72.5,-14.6,71.2C-29.5,69.9,-44.1,60.1,-55.9,47.8C-67.7,35.5,-76.7,20.7,-79.6,4.7C-82.5,-11.3,-79.3,-28.5,-69.5,-41.8C-59.7,-55.1,-43.3,-64.5,-27.6,-69.4C-11.9,-74.3,3.1,-74.7,18.4,-71.3C33.7,-67.9,49.3,-60.7,52.2,-68.1Z',
  'M44.4,-72.8C58.1,-66.1,70.1,-54.6,77.3,-40.5C84.5,-26.4,86.9,-9.7,82.8,5.1C78.7,19.9,68.1,32.8,56.6,43.8C45.1,54.8,32.7,63.9,18.5,69.3C4.3,74.7,-11.7,76.4,-25.9,71.6C-40.1,66.8,-52.5,55.5,-62.4,42.5C-72.3,29.5,-79.7,14.8,-80.6,-0.5C-81.5,-15.8,-75.9,-31.6,-65.7,-43.8C-55.5,-56,-40.7,-64.6,-26.6,-70.7C-12.5,-76.8,0.9,-80.4,15.1,-77.8C29.3,-75.2,43.5,-70.4,44.4,-72.8Z'
]

interface RandomBlobProps {
  id: string
  color: ColorValue
  size?: number
}
const NodeBlob = ({ id, color, size = 100 }: RandomBlobProps) => {
  const seed = hashString(id)
  const path = BLOB_PATHS[seed % BLOB_PATHS.length]

  return (
    <View style={{ width: size, height: size, opacity: 0.7 }}>
      <Svg viewBox='-100 -100 200 200' width='100%' height='100%'>
        <Path d={path} fill={color} />
      </Svg>
    </View>
  )
}
