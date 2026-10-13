import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { NODE_COLORS, type NodeStatus } from '@/constants/pages/home/home'
import {
  type Node,
  type NodeIcon,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'

interface Props {
  originX: number
  originY: number
  nextNode: Node
  sectionProgress: NodeStatus
  finishY: number
  nodeIcon: NodeIcon
}
export function NodePath({
  originX,
  originY,
  nextNode,
  sectionProgress,
  finishY,
  nodeIcon
}: Props) {
  const path = generatePath(
    originX,
    originY,
    nextNode.xPosition + ROUTE_NODE_SIZE.width / 2,
    finishY + ROUTE_NODE_SIZE.height / 2
  )

  const isOptional = nextNode.isOptional
  const isLocked = sectionProgress === 'locked'
  const opacity = isOptional ? 0.2 : 1
  return (
    <View
      key={`${nextNode.id}-path`}
      pointerEvents='none'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: Math.max(originX, nextNode.xPosition) + ROUTE_NODE_SIZE.width,
        height: finishY + ROUTE_NODE_SIZE.height,
        zIndex: 0
      }}
    >
      <Svg width='100%' height='100%'>
        <Path
          d={path}
          stroke={NODE_COLORS[nodeIcon][0]}
          strokeWidth={23}
          fill='none'
          strokeLinecap='round'
          opacity={opacity}
        />

        <Path
          d={path}
          stroke={isLocked ? '#888888' : '#B99565'}
          strokeWidth={19}
          fill='none'
          strokeLinecap='round'
          opacity={opacity}
        />

        <Path
          d={path}
          stroke={isLocked ? '#a3a3a3' : '#E7CCA0'}
          strokeWidth={14}
          fill='none'
          strokeLinecap='round'
          opacity={opacity}
        />

        <Path
          d={path}
          stroke={isLocked ? '#888888' : '#FFF3D6'}
          strokeWidth={4}
          fill='none'
          strokeLinecap='round'
          strokeDasharray={isOptional ? '10 30' : '1 17'}
          opacity={opacity}
        />
      </Svg>
    </View>
  )
}

const generatePath = (x1: number, y1: number, x2: number, y2: number) => {
  const midY = (y1 + y2) / 2
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`
}
