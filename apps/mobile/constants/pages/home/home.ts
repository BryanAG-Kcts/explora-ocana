import type { ColorValue } from 'react-native'

export type NodeStatus = 'locked' | 'available' | 'completed'
export type NodeProgress = {
  completed: number
  required: number
  requiredCompleted: number
}
export type RouteProgress = Record<string, NodeProgress>

export const PROGRESS: RouteProgress = {
  '1a': {
    completed: 4,
    required: 6,
    requiredCompleted: 4
  },
  '1b': {
    completed: 0,
    required: 5,
    requiredCompleted: 0
  }
}

export const NODE_COLORS: Record<
  NodeStatus,
  {
    top: ColorValue
    bottom: ColorValue
  }
> = {
  available: {
    bottom: '#1e39ff',
    top: '#4c6fff'
  },
  completed: {
    bottom: '#1B5E20',
    top: '#4CAF50'
  },
  locked: {
    bottom: '#50515d',
    top: '#9fa0ac'
  }
}
