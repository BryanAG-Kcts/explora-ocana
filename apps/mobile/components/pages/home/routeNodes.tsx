import { useRouter } from 'expo-router'
import { Lock } from 'lucide-react-native'
import { Fragment, useState } from 'react'
import { Pressable, View } from 'react-native'
import Svg, { Defs, Ellipse, LinearGradient, Stop } from 'react-native-svg'
import { Icon } from '@/components/ui/icon'
import {
  NODE_COLORS,
  type NodeProgress,
  type NodeStatus,
  type RouteProgress
} from '@/constants/pages/home/home'
import {
  type Node,
  PADDING,
  RADIO_X,
  RADIO_Y,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'
import { MissionPopup } from './nodeModal'
import { NodePath } from './nodePath'

interface sProps {
  nodes: Node[]
  sectionProgress: NodeProgress
  progress: RouteProgress
  prevSectionId: string | null
}

export function RouteNodes({
  nodes,
  sectionProgress,
  progress,
  prevSectionId
}: sProps) {
  const router = useRouter()
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const nodeMap = new Map(nodes.map(node => [node.id, node]))

  const handleNodePress = (node: Node) => {
    setSelectedNode(node)
  }

  const handleStartMission = () => {
    if (!selectedNode) return

    setSelectedNode(null)
    router.push(selectedNode.link)
  }

  function getNodeStatus(sectionId: string | null, index: number) {
    if (sectionId) {
      const prevSectionProgress = progress[sectionId]
      const isSectionCompleted =
        prevSectionProgress.requiredCompleted >= prevSectionProgress.required
      if (!isSectionCompleted) {
        return 'locked'
      }
    }

    const nodeStatus =
      sectionProgress.completed === index
        ? 'available'
        : sectionProgress.completed < index
          ? 'locked'
          : 'completed'

    return nodeStatus
  }

  return (
    <>
      {nodes.map((node, index) => {
        const nextNodes = node.nextNodeIds
          .map(id => nodeMap.get(id))
          .filter((node): node is Node => node !== undefined)

        const status = getNodeStatus(prevSectionId, index)

        const pathStatus = getNodeStatus(prevSectionId, 1 + index)

        return (
          <Fragment key={node.id}>
            <RouteNode
              node={node}
              nodeStatus={status}
              onPress={handleNodePress}
            />

            {nextNodes.length > 0 && (
              <NodePath
                originX={node.xPosition}
                originY={node.yPosition}
                nextNodes={nextNodes}
                sectionProgress={pathStatus}
              />
            )}
          </Fragment>
        )
      })}

      <MissionPopup
        node={selectedNode}
        visible={selectedNode !== null}
        onClose={() => setSelectedNode(null)}
        onStart={handleStartMission}
      />
    </>
  )
}

interface Props {
  node: Node
  nodeStatus: NodeStatus
  onPress: (node: Node) => void
}

export function RouteNode({ node, nodeStatus, onPress }: Props) {
  const colors = NODE_COLORS[nodeStatus]
  const isLocked = nodeStatus === 'locked'
  const gradientId = `node-gradient-${node.id}`

  return (
    <View
      style={{
        zIndex: 10,
        width: ROUTE_NODE_SIZE.svgWidth,
        height: ROUTE_NODE_SIZE.svgHeight + 10,
        position: 'absolute',
        top: node.yPosition,
        left: node.xPosition,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Pressable onPress={() => onPress(node)} disabled={isLocked}>
        <View
          style={{
            width: ROUTE_NODE_SIZE.svgWidth,
            height: ROUTE_NODE_SIZE.svgHeight,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Svg
            width={ROUTE_NODE_SIZE.svgWidth}
            height={ROUTE_NODE_SIZE.svgHeight + 10}
          >
            <Defs>
              <LinearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
                <Stop offset='0' stopColor={colors.top} stopOpacity='1' />
                <Stop offset='0.55' stopColor={colors.top} stopOpacity='0.92' />
                <Stop offset='1' stopColor={colors.bottom} stopOpacity='1' />
              </LinearGradient>
            </Defs>

            {/* Sombra exterior */}
            <Ellipse
              cx={ROUTE_NODE_SIZE.cx}
              cy={ROUTE_NODE_SIZE.cyBase + 7}
              rx={RADIO_X + 4}
              ry={RADIO_Y + 4}
              fill='rgba(0, 0, 0, 0.18)'
            />

            {/* Volumen inferior */}
            <Ellipse
              cx={ROUTE_NODE_SIZE.cx}
              cy={ROUTE_NODE_SIZE.cyBase}
              rx={RADIO_X}
              ry={RADIO_Y}
              fill={colors.bottom}
            />

            {/* Borde exterior de la superficie */}
            <Ellipse
              cx={ROUTE_NODE_SIZE.cx}
              cy={ROUTE_NODE_SIZE.cyTape}
              rx={RADIO_X + 3}
              ry={RADIO_Y + 3}
              fill='rgba(255, 255, 255, 0.20)'
            />

            {/* Superficie principal */}
            <Ellipse
              cx={ROUTE_NODE_SIZE.cx}
              cy={ROUTE_NODE_SIZE.cyTape}
              rx={RADIO_X}
              ry={RADIO_Y}
              fill={`url(#${gradientId})`}
            />

            {/* Borde interno */}
            <Ellipse
              cx={ROUTE_NODE_SIZE.cx}
              cy={ROUTE_NODE_SIZE.cyTape}
              rx={RADIO_X - 5}
              ry={RADIO_Y - 5}
              fill='none'
              stroke='rgba(255, 255, 255, 0.20)'
              strokeWidth={2}
            />

            {/* Brillo superior */}
            <Ellipse
              cx={ROUTE_NODE_SIZE.cx - 18}
              cy={ROUTE_NODE_SIZE.cyTape - 18}
              rx={25}
              ry={9}
              fill='rgba(255, 255, 255, 0.18)'
            />

            {/* Pequeño brillo puntual */}
            <Ellipse
              cx={ROUTE_NODE_SIZE.cx - 38}
              cy={ROUTE_NODE_SIZE.cyTape - 7}
              rx={5}
              ry={3}
              fill='rgba(255, 255, 255, 0.35)'
            />
          </Svg>

          {/* Icono */}
          <View
            className='absolute pointer-events-none'
            style={{
              transform: [
                { perspective: 50 },
                { rotateX: '25deg' },
                { translateY: -PADDING }
              ]
            }}
          >
            {/* Sombra del icono */}
            <View
              style={{
                position: 'absolute',
                top: 4,
                left: 3,
                opacity: 0.25
              }}
            >
              <Icon
                as={isLocked ? Lock : node.icon}
                size={42}
                strokeWidth={2.5}
                className='text-black'
              />
            </View>

            {/* Icono principal */}
            <Icon
              as={isLocked ? Lock : node.icon}
              size={42}
              strokeWidth={2.5}
              className='text-primary-foreground'
            />
          </View>
        </View>
      </Pressable>
    </View>
  )
}
