import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator
} from '@reactvision/react-viro'
import { useState } from 'react'
import { View } from 'react-native'

type Vector3d = [number, number, number]
const MIN_SCALE = 0.2
const MAX_SCALE = 3.0

function Scene() {
  const [scale, setScale] = useState<Vector3d>([0.2, 0.2, 0.2])
  const [rotation, setRotation] = useState<Vector3d>([0, 0, 0])
  const [baseScale, setBaseScale] = useState<Vector3d>([0.2, 0.2, 0.2])
  const [baseRotation, setBaseRotation] = useState<Vector3d>([0, 0, 0])

  const handlePinch = (pinchState: number, scaleFactor: number) => {
    if (pinchState === 1) {
      setBaseScale(scale)
      return
    }

    if (pinchState === 2 || pinchState === 3) {
      let newScaleValue = baseScale[0] * scaleFactor
      newScaleValue = Math.max(MIN_SCALE, Math.min(newScaleValue, MAX_SCALE))

      const newScale: Vector3d = [newScaleValue, newScaleValue, newScaleValue]
      setScale(newScale)

      if (pinchState === 3) {
        setBaseScale(newScale)
      }
    }
  }

  const handleRotate = (rotateState: number, rotationFactor: number) => {
    if (rotateState === 1) {
      setBaseRotation(rotation)
      return
    }

    if (rotateState === 2 || rotateState === 3) {
      const newRotationY = baseRotation[1] - rotationFactor
      const newRotation: Vector3d = [
        baseRotation[0],
        newRotationY,
        baseRotation[2]
      ]

      setRotation(newRotation)
      if (rotateState === 3) {
        setBaseRotation(newRotation)
      }
    }
  }

  return (
    <ViroARScene>
      <ViroAmbientLight color='#ffffff' intensity={200} />
      <Viro3DObject
        source={require('../../../assets/mico.glb')}
        position={[0, 0, -1]}
        type='GLB'
        dragType='FixedToWorld'
        onDrag={() => {}}
        scale={scale}
        rotation={rotation}
        onPinch={handlePinch}
        onRotate={handleRotate}
      />
    </ViroARScene>
  )
}

export default function Ar() {
  return (
    <View className='flex-1 relative'>
      <ViroARSceneNavigator initialScene={{ scene: Scene }} />
    </View>
  )
}
