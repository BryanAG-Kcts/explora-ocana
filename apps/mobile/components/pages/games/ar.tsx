import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroTrackingStateConstants
} from '@reactvision/react-viro'
import * as Speech from 'expo-speech'
import {
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeOff,
  ZoomIn,
  ZoomOut
} from 'lucide-react-native'
import { type JSX, useRef, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import type { AR_STEP } from '@/constants/games/games'

const MODEL_BASE_URL = `https://hkjdr3s6ft9fup2g.public.blob.vercel-storage.com/models/`

type Vec3 = [number, number, number]

const MIN_SCALE = 0.2
const MAX_SCALE = 3.0
const SCALE_STEP = 1.2 // cada toque multiplica/divide la escala por este factor
const ROTATION_STEP = 30 // grados por toque

const clampScale = (value: number) =>
  Math.max(MIN_SCALE, Math.min(value, MAX_SCALE))

// Props que el padre le pasa a la escena a través de `viroAppProps`
interface SceneAppProps {
  model: string
  scale: Vec3
  rotation: Vec3
  setScale: (scale: Vec3) => void
  setRotation: (rotation: Vec3) => void
  onTrackingReady: () => void
  onModelLoaded: () => void
  onModelError: () => void
}

interface SceneProps {
  sceneNavigator: { viroAppProps: SceneAppProps }
}

const Scene = ({ sceneNavigator }: SceneProps) => {
  const {
    model,
    scale,
    rotation,
    setScale,
    setRotation,
    onTrackingReady,
    onModelLoaded,
    onModelError
  } = sceneNavigator.viroAppProps

  // Valores al inicio de cada gesto
  const baseScale = useRef(scale[0])
  const baseRotation = useRef<Vec3>(rotation)

  const handlePinch = (pinchState: number, scaleFactor: number) => {
    if (pinchState === 1) {
      baseScale.current = scale[0]
    } else if (pinchState === 2 || pinchState === 3) {
      const value = clampScale(baseScale.current * scaleFactor)
      setScale([value, value, value])
      if (pinchState === 3) baseScale.current = value
    }
  }

  const handleRotate = (rotateState: number, rotationFactor: number) => {
    if (rotateState === 1) {
      baseRotation.current = rotation
    } else if (rotateState === 2 || rotateState === 3) {
      const [x, y, z] = baseRotation.current
      const newRotation: Vec3 = [x, y - rotationFactor, z]
      setRotation(newRotation)
      if (rotateState === 3) baseRotation.current = newRotation
    }
  }

  return (
    <ViroARScene
      onTrackingUpdated={state => {
        // Este evento se dispara muchas veces (el tracking se pierde y se
        // recupera). Solo marcamos un flag que nunca vuelve a false.
        if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
          onTrackingReady()
        }
      }}
    >
      <ViroAmbientLight color='#ffffff' intensity={200} />
      <Viro3DObject
        source={{ uri: `${MODEL_BASE_URL}${model}` }}
        position={[0, 0, -1]}
        type='GLB'
        dragType='FixedToWorld'
        onDrag={() => {}}
        scale={scale}
        rotation={rotation}
        onPinch={handlePinch}
        onRotate={handleRotate}
        onLoadEnd={onModelLoaded}
        onError={onModelError}
      />
    </ViroARScene>
  )
}

interface Props {
  ar: AR_STEP
}
export function Ar({ ar }: Props) {
  const [trackingReady, setTrackingReady] = useState(false)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [modelError, setModelError] = useState(false)

  // El estado se deriva de flags que solo pasan de false a true,
  // así nunca se "regresa" a una pantalla de carga anterior.
  const state = modelError
    ? 'MODEL-ERROR'
    : !trackingReady
      ? 'LOADING-AR'
      : !modelLoaded
        ? 'LOADING-MODEL'
        : 'MODEL-READY'

  const [isSpeaking, setIsSpeaking] = useState(false)
  const [scale, setScale] = useState<Vec3>([MIN_SCALE, MIN_SCALE, MIN_SCALE])
  const [rotation, setRotation] = useState<Vec3>([0, 0, 0])

  const handleSpeech = async () => {
    if (isSpeaking) {
      await Speech.stop()
      setIsSpeaking(false)
    } else {
      setIsSpeaking(true)

      Speech.speak(ar.speech, {
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false)
      })
    }
  }

  const rotateBy = (degrees: number) =>
    setRotation(([x, y, z]) => [x, y + degrees, z])

  const scaleBy = (factor: number) =>
    setScale(([s]) => {
      const value = clampScale(s * factor)
      return [value, value, value]
    })

  const controls = [
    {
      id: 'rotate-ccw',
      icon: RotateCcw,
      onPress: () => rotateBy(-ROTATION_STEP),
      disabled: false
    },
    {
      id: 'zoom-out',
      icon: ZoomOut,
      onPress: () => scaleBy(1 / SCALE_STEP),
      disabled: scale[0] <= MIN_SCALE
    },
    {
      id: 'zoom-in',
      icon: ZoomIn,
      onPress: () => scaleBy(SCALE_STEP),
      disabled: scale[0] >= MAX_SCALE
    },
    {
      id: 'rotate-cw',
      icon: RotateCw,
      onPress: () => rotateBy(ROTATION_STEP),
      disabled: false
    }
  ]

  return (
    <View className='flex-1 bg-black relative'>
      <ViroARSceneNavigator
        initialScene={{ scene: Scene as () => JSX.Element }}
        viroAppProps={{
          model: ar.model,
          scale,
          rotation,
          setScale,
          setRotation,
          onTrackingReady: () => setTrackingReady(true),
          onModelLoaded: () => setModelLoaded(true),
          onModelError: () => setModelError(true)
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

      {state === 'MODEL-ERROR' && (
        <View className='absolute inset-0 bg-black/60 items-center justify-center z-10 gap-4 px-8'>
          <Text variant='h4' className='text-primary-foreground text-center'>
            No se pudo cargar el recurso 3D
          </Text>
          <Text className='text-primary-foreground/80 text-center'>
            Revisa tu conexión e inténtalo de nuevo.
          </Text>
        </View>
      )}

      {state === 'MODEL-READY' && (
        <View
          pointerEvents='box-none'
          className='absolute bottom-6 w-full items-center'
        >
          <View className='flex-row gap-3 bg-black/60 px-3 py-2 rounded-full'>
            {controls.map(({ icon, onPress, disabled, id }) => (
              <Button
                key={id}
                size='icon'
                className='rounded-full bg-white/15'
                onPress={onPress}
                disabled={disabled}
              >
                <Icon
                  as={icon}
                  size={24}
                  className={disabled ? 'text-white/40' : 'text-white'}
                />
              </Button>
            ))}
          </View>
        </View>
      )}

      <View className='absolute top-4 left-4'>
        <Button
          size='icon'
          className='rounded-full bg-black/60 '
          onPress={handleSpeech}
        >
          <Icon
            as={isSpeaking ? VolumeOff : Volume2}
            size={28}
            className='text-white'
          />
        </Button>
      </View>
    </View>
  )
}
