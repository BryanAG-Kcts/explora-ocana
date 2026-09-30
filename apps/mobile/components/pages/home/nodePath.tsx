import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { NODE_COLORS, type NodeProgress } from '@/constants/pages/home/home'
import {
  type Node,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'

interface Props {
  originX: number
  originY: number
  nextNodes: Node[]
  sectionProgress: NodeProgress
}
export function NodePath({
  originX,
  originY,
  nextNodes,
  sectionProgress
}: Props) {
  return nextNodes.map(({ id, isOptional, xPosition, yPosition }) => (
    <View
      key={`${id}-path`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width:
          (originX > xPosition ? originX : xPosition) +
          ROUTE_NODE_SIZE.svgWidth,
        height: yPosition + ROUTE_NODE_SIZE.svgHeight
      }}
    >
      <Svg>
        <Path
          d={generatePath(
            originX + ROUTE_NODE_SIZE.cx,
            originY + ROUTE_NODE_SIZE.cyTape,
            xPosition + ROUTE_NODE_SIZE.cx,
            yPosition + ROUTE_NODE_SIZE.cyTape
          )}
          stroke={NODE_COLORS[sectionProgress[id] ?? 'locked'].bottom}
          strokeWidth='12'
          fill='none'
          strokeLinecap='round'
          strokeDasharray={isOptional ? '10, 20' : undefined}
        />
      </Svg>
    </View>
  ))
}

const generatePath = (x1: number, y1: number, x2: number, y2: number) => {
  const midY = (y1 + y2) / 2
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`
}
