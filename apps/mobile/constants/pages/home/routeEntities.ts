import type { Href } from 'expo-router'
import {
  Award,
  Box,
  Link,
  type LucideIcon,
  Puzzle,
  ScrollText,
  Soup
} from 'lucide-react-native'

const POSSIBLE_ICONS = {
  quest: Award,
  ar: Box,
  quiz: ScrollText,
  crossword: Link,
  soup: Soup,
  puzzle: Puzzle
}

export const RADIO_X = 60
export const RADIO_Y = 45
export const PADDING = 10
const THICKNESS_3D = 16

export const ROUTE_NODE_SIZE = {
  cx: RADIO_X + PADDING,
  cyTape: RADIO_Y + PADDING,
  cyBase: RADIO_Y + PADDING + THICKNESS_3D,
  svgWidth: (RADIO_X + PADDING) * 2,
  svgHeight: (RADIO_Y + PADDING) * 2 + THICKNESS_3D
}

export type NodeType = 'quest' | 'ar' | 'quiz' | 'crossword' | 'soup' | 'puzzle'

export class Node {
  id: string
  type: NodeType
  title: string
  description: string
  xPosition: number
  yPosition: number
  nextNodeIds: string[]
  isOptional: boolean

  icon: LucideIcon
  link: Href

  constructor(
    id: Node['id'],
    type: Node['type'],
    title: Node['title'],
    description: Node['description'],
    xPosition: Node['xPosition'],
    yPosition: Node['yPosition'],
    nextNodeIds: Node['nextNodeIds'] = [],
    isOptional = false
  ) {
    this.id = id
    this.type = type
    this.title = title
    this.description = description
    this.xPosition = xPosition
    this.yPosition = yPosition
    this.nextNodeIds = nextNodeIds
    this.isOptional = isOptional

    this.icon = POSSIBLE_ICONS[type]
    this.link = `/home/${type}/${id}`
  }
}

export class RouteSection {
  id: string
  title: string
  nodes: Node[]
  width: number
  height: number

  constructor(
    id: RouteSection['id'],
    title: RouteSection['title'],
    nodes: RouteSection['nodes'],
    width: RouteSection['width'],
    height: RouteSection['height']
  ) {
    this.id = id
    this.title = title
    this.nodes = nodes
    this.width = width + ROUTE_NODE_SIZE.svgWidth
    this.height = height + ROUTE_NODE_SIZE.svgHeight
  }
}
