import { useRouter } from 'expo-router'
import { Fragment, useState } from 'react'
import type { ImageStyle } from 'react-native'
import { Image, Pressable, View } from 'react-native'
import type {
  NodeProgress,
  NodeStatus,
  RouteProgress
} from '@/constants/pages/home/home'
import {
  type Node,
  ROUTE_NODE_SIZE
} from '@/constants/pages/home/routeEntities'
import { NodeBlobs } from './nodeBlobs'
import { MissionPopup } from './nodeModal'
import { NodePath } from './nodePath'

type ImageStyleWithFilter = ImageStyle & {
  filter?: string
}

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
        const nextNode = nodeMap.get(node.nextNodeId)
        const status = getNodeStatus(prevSectionId, index)
        const pathStatus = getNodeStatus(prevSectionId, 1 + index)

        return (
          <Fragment key={node.id}>
            <RouteNode
              node={node}
              nodeStatus={status}
              onPress={handleNodePress}
              yPosition={index * ROUTE_NODE_SIZE.gap}
            />

            {nextNode && (
              <NodePath
                originX={node.xPosition + ROUTE_NODE_SIZE.width / 2}
                originY={
                  index * ROUTE_NODE_SIZE.gap + ROUTE_NODE_SIZE.gap / 2
                }
                nextNode={nextNode}
                sectionProgress={pathStatus}
                finishY={(index + 1) * ROUTE_NODE_SIZE.gap}
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
  yPosition: number
}
export function RouteNode({ node, nodeStatus, onPress, yPosition }: Props) {
  const isLocked = nodeStatus === 'locked'
  return (
    <View
      style={{
        zIndex: 10,
        width: ROUTE_NODE_SIZE.width,
        height: ROUTE_NODE_SIZE.height,
        position: 'absolute',
        top: yPosition,
        left: node.xPosition,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <NodeBlobs type={node.iconName} id={node.id} />
      <Pressable onPress={() => onPress(node)} disabled={isLocked}>
        <Image
          style={
            {
              width: ROUTE_NODE_SIZE.width,
              height: ROUTE_NODE_SIZE.height,
              resizeMode: 'contain',
              filter: isLocked ? 'grayscale(100%)' : 'none'
            } as ImageStyleWithFilter
          }
          source={node.icon}
        />
      </Pressable>
    </View>
  )
}
