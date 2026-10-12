import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { NODE_COLORS, type NodeStatus } from '@/constants/pages/home/home'
import {
  type Node,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'

interface Props {
  originX: number
  originY: number
  nextNode: Node
  sectionProgress: NodeStatus
  finishY: number
}
export function NodePath({
  originX,
  originY,
  nextNode,
  sectionProgress,
  finishY
}: Props) {
  return (
    <View
      key={`${nextNode.id}-path`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width:
          (originX > nextNode.xPosition ? originX : nextNode.xPosition) +
          ROUTE_NODE_SIZE.width,
        height: finishY + ROUTE_NODE_SIZE.height
      }}
    >
      <Svg>
        <Path
          d={generatePath(
            originX,
            originY,
            nextNode.xPosition + ROUTE_NODE_SIZE.width / 2,
            finishY + ROUTE_NODE_SIZE.height / 2
          )}
          stroke={NODE_COLORS[sectionProgress].bottom}
          strokeWidth='12'
          fill='none'
          strokeLinecap='round'
          strokeDasharray={nextNode.isOptional ? '10, 20' : undefined}
        />
      </Svg>
    </View>
  )
}

const generatePath = (x1: number, y1: number, x2: number, y2: number) => {
  const midY = (y1 + y2) / 2
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`
}
