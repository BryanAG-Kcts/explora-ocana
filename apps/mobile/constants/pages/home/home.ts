import type { ColorValue } from 'react-native'

export type NodeStatus = 'locked' | 'available' | 'completed'
export type NodeProgress = Record<string, NodeStatus>
export type RouteProgress = Record<string, NodeProgress>

export const PROGRESS: RouteProgress = {
  '1a': {
    'quest-1': 'completed',
  },
  '1b': {
    'quest-2': 'available'
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
