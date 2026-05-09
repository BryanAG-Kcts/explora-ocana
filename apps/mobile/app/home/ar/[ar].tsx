import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroTrackingStateConstants // Importante para saber cuándo la cámara AR está lista
} from '@reactvision/react-viro'
import { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Text } from '@/components/ui/text'

interface Props {
  updateSceneNavigator: (state: string) => void
}
const Scene = ({ updateSceneNavigator }: Props) => {
  const [scale, setScale] = useState<[number, number, number]>([0.2, 0.2, 0.2])
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0])
  const [baseScale, setBaseScale] = useState<[number, number, number]>([
    0.2, 0.2, 0.2
  ])
  const [baseRotation, setBaseRotation] = useState<[number, number, number]>([
    0, 0, 0
  ])
  const minScale = 0.2
  const maxScale = 3.0

  const handlePinch = (pinchState: number, scaleFactor: number) => {
    if (pinchState === 1) {
      setBaseScale(scale)
    } else if (pinchState === 2 || pinchState === 3) {
      let newScaleValue = baseScale[0] * scaleFactor
      newScaleValue = Math.max(minScale, Math.min(newScaleValue, maxScale))
      const newScale: [number, number, number] = [
        newScaleValue,
        newScaleValue,
        newScaleValue
      ]
      setScale(newScale)
      if (pinchState === 3) setBaseScale(newScale)
    }
  }

  const handleRotate = (rotateState: number, rotationFactor: number) => {
    if (rotateState === 1) {
      setBaseRotation(rotation)
    } else if (rotateState === 2 || rotateState === 3) {
      const newRotationY = baseRotation[1] - rotationFactor
      const newRotation: [number, number, number] = [
        baseRotation[0],
        newRotationY,
        baseRotation[2]
      ]
      setRotation(newRotation)
      if (rotateState === 3) setBaseRotation(newRotation)
    }
  }

  return (
    <ViroARScene
      onTrackingUpdated={state => {
        if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
          updateSceneNavigator('LOADING-MODEL')
        }
      }}
    >
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
        onLoadEnd={() => updateSceneNavigator('MODEL-READY')}
      />
    </ViroARScene>
  )
}

export default function Ar() {
  const [state, setState] = useState('LOADING-AR')
  return (
    <View className='flex-1 bg-black relative'>
      <ViroARSceneNavigator
        initialScene={{
          scene: () => <Scene updateSceneNavigator={setState} />
        }}
      />

      {state === 'LOADING-AR' && (
        <View className='absolute inset-0 bg-background items-center justify-center z-10 gap-4'>
          <ActivityIndicator size='large' className='text-primary' />
          <Text variant='h4'>Iniciando cámara AR...</Text>
        </View>
      )}

      {state === 'LOADING-MODEL' && (
        <View className='absolute inset-0 bg-black/40 items-center justify-center z-10 gap-4'>
          <ActivityIndicator size='large' className='text-primary' />
          <Text variant='h4' className='text-primary-foreground'>
            Descargando recurso 3D...
          </Text>
        </View>
      )}

      {state === 'MODEL-READY' && (
        <View className='absolute bottom-8 w-full items-center pointer-events-none'>
          <View className='bg-black/60 px-4 py-2 rounded-full'>
            <Text className='text-primary-foreground'>
              Pellizca para escalar • Gira para rotar
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}
