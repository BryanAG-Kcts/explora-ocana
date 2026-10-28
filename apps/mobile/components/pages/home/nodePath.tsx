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
  const isCompleted = sectionProgress === 'completed'

  const opacity = isOptional ? 0.2 : 1
  const outerColor = NODE_COLORS[nodeIcon][0]
  const middleColor = isLocked ? '#888888' : isCompleted ? '#997344' : '#B99565'
  const innerColor = isLocked ? '#A3A3A3' : isCompleted ? '#D6B77D' : '#E7CCA0'
  const detailColor = isLocked ? '#888888' : isCompleted ? '#FFF8E7' : '#FFF3D6'

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
        {/* Borde exterior */}
        <Path
          d={path}
          stroke={outerColor}
          strokeWidth={23}
          fill='none'
          strokeLinecap='round'
          opacity={opacity}
        />

        {/* Capa intermedia */}
        <Path
          d={path}
          stroke={middleColor}
          strokeWidth={19}
          fill='none'
          strokeLinecap='round'
          opacity={opacity}
        />

        {/* Superficie del camino */}
        <Path
          d={path}
          stroke={innerColor}
          strokeWidth={14}
          fill='none'
          strokeLinecap='round'
          opacity={opacity}
        />

        {/* Detalles decorativos */}
        <Path
          d={path}
          stroke={detailColor}
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
