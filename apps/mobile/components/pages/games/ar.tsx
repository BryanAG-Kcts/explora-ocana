import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroTrackingStateConstants
} from '@reactvision/react-viro'
import * as Speech from 'expo-speech'
import { Volume2 } from 'lucide-react-native'
import { useState } from 'react'
import { ActivityIndicator, type ImageSourcePropType, View } from 'react-native'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import type { AR_STEP } from '@/constants/games/games'

interface SceneProps {
  updateSceneNavigator: (state: string) => void
  model: ImageSourcePropType
}
const Scene = ({ updateSceneNavigator, model }: SceneProps) => {
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
        source={model}
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

interface Props {
  ar: AR_STEP
}
export function Ar({ ar }: Props) {
  const [state, setState] = useState('LOADING-AR')
  return (
    <View className='flex-1 bg-black relative'>
      <ViroARSceneNavigator
        initialScene={{
          scene: () => (
            <Scene updateSceneNavigator={setState} model={ar.model} />
          )
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
        <View className='absolute bottom-4 w-full items-center pointer-events-none'>
          <View className='bg-black/60 px-4 py-2 rounded-full'>
            <Text className='text-primary-foreground'>
              Pellizca para escalar • Gira para rotar
            </Text>
          </View>
        </View>
      )}

      <View className='absolute top-4 left-4'>
        <Button
          size='icon'
          className='rounded-full bg-black/60 '
          onPress={() => Speech.speak(ar.speech)}
        >
          <Icon as={Volume2} size={28} className='text-white' />
        </Button>
      </View>
    </View>
  )
}
