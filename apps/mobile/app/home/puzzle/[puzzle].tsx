/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Chat> */
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import {
  Image,
  type ImageResizeMode,
  type ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import {
  generarPosicionesIniciales,
  PUZZLES
} from '@/constants/pages/home/puzzle'

type RompecabezasProps = {
  image: ImageSourcePropType
  rows?: number
  columns?: number
  width?: number
  height?: number
  snapThreshold?: number
  imageResizeMode?: ImageResizeMode
  onComplete?: () => void
}

type PuzzlePieceProps = {
  index: number
  image: ImageSourcePropType
  pieceWidth: number
  pieceHeight: number
  boardWidth: number
  boardHeight: number
  targetX: number
  targetY: number
  initialX: number
  initialY: number
  snapThreshold: number
  locked: boolean
  onDrop: (index: number, correct: boolean) => void
}

function PuzzlePiece({
  index,
  image,
  pieceWidth,
  pieceHeight,
  boardWidth,
  boardHeight,
  targetX,
  targetY,
  initialX,
  initialY,
  snapThreshold,
  locked,
  onDrop
}: PuzzlePieceProps) {
  const translateX = useSharedValue(initialX)
  const translateY = useSharedValue(initialY)
  const startX = useSharedValue(initialX)
  const startY = useSharedValue(initialY)
  const zIndex = useSharedValue(index)
  const gesture = Gesture.Pan()
    .enabled(!locked)
    .runOnJS(true)
    .onStart(() => {
      startX.value = translateX.value
      startY.value = translateY.value
      zIndex.value = 999
    })
    .onUpdate(event => {
      translateX.value = startX.value + event.translationX
      translateY.value = startY.value + event.translationY
    })
    .onEnd(() => {
      const distancia = Math.sqrt(
        (translateX.value - targetX) ** 2 + (translateY.value - targetY) ** 2
      )

      const correcta = distancia <= snapThreshold
      if (correcta) {
        translateX.value = withSpring(targetX, {
          damping: 38,
          stiffness: 380
        })

        translateY.value = withSpring(targetY, {
          damping: 38,
          stiffness: 380
        })
      } else {
        translateX.value = withSpring(startX.value, {
          damping: 38,
          stiffness: 380
        })

        translateY.value = withSpring(startY.value, {
          damping: 38,
          stiffness: 380
        })
      }

      zIndex.value = index
      onDrop(index, correcta)
    })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value
      },
      {
        translateY: translateY.value
      }
    ],

    zIndex: zIndex.value
  }))

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.piece,
          {
            width: pieceWidth,

            height: pieceHeight
          },
          animatedStyle
        ]}
      >
        <Image
          source={image}
          resizeMode='cover'
          style={{
            position: 'absolute',
            width: boardWidth,
            height: boardHeight,
            left: -targetX,
            top: -targetY
          }}
        />

        {locked && (
          <View className='absolute inset-0 items-center justify-center bg-black/10'>
            <Text className='text-xl'>✓</Text>
          </View>
        )}
      </Animated.View>
    </GestureDetector>
  )
}

export function Rompecabezas({
  image,
  rows = 3,
  columns = 3,
  width = 320,
  height = 320,
  snapThreshold,
  onComplete
}: RompecabezasProps) {
  const [gameKey, setGameKey] = useState(0)
  const [lockedPieces, setLockedPieces] = useState<Set<number>>(new Set())
  const [moves, setMoves] = useState(0)
  const totalPieces = rows * columns
  const pieceWidth = width / columns
  const pieceHeight = height / rows
  const trayGap = 30
  const trayRows = Math.ceil(totalPieces / columns)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <Chat>
  const posicionesIniciales = useMemo(
    () =>
      generarPosicionesIniciales(
        totalPieces,
        columns,
        pieceWidth,
        pieceHeight,
        height + trayGap
      ),
    [totalPieces, columns, pieceWidth, pieceHeight, height, gameKey]
  )

  const threshold = snapThreshold ?? Math.min(pieceWidth, pieceHeight) * 0.35
  const handleDrop = (index: number, correct: boolean) => {
    setMoves(previous => previous + 1)
    if (!correct) {
      return
    }

    setLockedPieces(previous => {
      if (previous.has(index)) {
        return previous
      }

      const next = new Set(previous)
      next.add(index)
      if (next.size === totalPieces) {
        onComplete?.()
      }

      return next
    })
  }

  const reiniciar = () => {
    setLockedPieces(new Set())
    setMoves(0)
    setGameKey(previous => previous + 1)
  }

  const trayHeight = trayRows * pieceHeight
  const containerHeight = height + trayGap + trayHeight
  return (
    <View className='items-center'>
      <View
        style={{
          width,
          height: containerHeight
        }}
      >
        <View
          style={{ width, height }}
          className='absolute left-0 top-0 overflow-hidden rounded-xl border-2 border-dashed border-border bg-muted'
        >
          <Text className='absolute inset-0 text-center text-muted-foreground m-2'>
            Coloca aquí las piezas
          </Text>
        </View>

        <View
          style={{ width, height }}
          className='absolute left-0 bottom-0 overflow-hidden rounded-xl border-2 border-dashed border-border bg-muted'
        >
          <Text className='absolute inset-0 text-center text-muted-foreground m-2'>
            Mueve tus piezas
          </Text>
        </View>

        {Array.from(
          {
            length: totalPieces
          },
          (_, index) => {
            const targetColumn = index % columns
            const targetRow = Math.floor(index / columns)
            const targetX = targetColumn * pieceWidth
            const targetY = targetRow * pieceHeight

            const initial = posicionesIniciales[index]
            return (
              <PuzzlePiece
                key={`${gameKey}-${index}`}
                index={index}
                image={image}
                pieceWidth={pieceWidth}
                pieceHeight={pieceHeight}
                boardWidth={width}
                boardHeight={height}
                targetX={targetX}
                targetY={targetY}
                initialX={initial.x}
                initialY={initial.y}
                snapThreshold={threshold}
                locked={lockedPieces.has(index)}
                onDrop={handleDrop}
              />
            )
          }
        )}
      </View>

      <View className='mt-4 w-full flex-row items-center justify-between p-2 px-4'>
        <Text className='text-base font-semibold'>Movimientos: {moves}</Text>
        <Text className='text-base font-semibold'>
          {lockedPieces.size}/{totalPieces}
        </Text>
      </View>

      <Button onPress={reiniciar}>
        <Text>Reiniciar</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  piece: {
    position: 'absolute',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)'
  }
})

export default function Puzzle() {
  const { puzzle } = useLocalSearchParams()
  const router = useRouter()
  const pz = PUZZLES[puzzle as keyof typeof PUZZLES]

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='flex-row p-4 gap-4 items-center'>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon as={ArrowLeft} />
        </TouchableOpacity>
        <Text variant='h4'>Volver</Text>
      </View>

      <Rompecabezas
        image={pz.image}
        rows={pz.rows}
        columns={pz.columns}
        width={320}
        height={320}
        onComplete={() => {
          console.log('¡Rompecabezas completado!')
        }}
      />
    </ScrollView>
  )
}
