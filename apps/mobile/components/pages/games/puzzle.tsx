/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Chat> */

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Image,
  type ImageResizeMode,
  type ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import type { PUZZLES_STEP } from '@/constants/games/games'
import { generarPosicionesIniciales } from '@/constants/pages/home/puzzle'

type RompecabezasProps = {
  image: ImageSourcePropType
  rows?: number
  columns?: number
  width?: number
  height?: number
  snapThreshold?: number
  imageResizeMode?: ImageResizeMode
  onComplete: (result: PuzzleResult) => Promise<void>
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
  imageResizeMode: ImageResizeMode
  locked: boolean
  onDrop: (index: number, correct: boolean) => void
  onMoveStart: () => void
}

const SPRING_CONFIG = {
  damping: 38,
  stiffness: 380
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
  imageResizeMode,
  locked,
  onDrop,
  onMoveStart
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
      onMoveStart()
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
        translateX.value = withSpring(targetX, SPRING_CONFIG)
        translateY.value = withSpring(targetY, SPRING_CONFIG)
      } else {
        translateX.value = withSpring(startX.value, SPRING_CONFIG)
        translateY.value = withSpring(startY.value, SPRING_CONFIG)
      }

      zIndex.value = index
      onDrop(index, correcta)
    })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value }
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
          resizeMode={imageResizeMode}
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
  imageResizeMode = 'cover',
  onComplete
}: RompecabezasProps) {
  const safeRows = Math.max(1, Math.floor(rows))
  const safeColumns = Math.max(1, Math.floor(columns))
  const boardWidth = Math.max(1, width)
  const boardHeight = Math.max(1, height)

  const [gameKey, setGameKey] = useState(0)
  const [lockedPieces, setLockedPieces] = useState<Set<number>>(() => new Set())
  const [moves, setMoves] = useState(0)

  const lockedPiecesRef = useRef<Set<number>>(new Set())
  const completedRef = useRef(false)

  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const startTimeRef = useRef<number | null>(null)
  const movesRef = useRef(0)

  const totalPieces = safeRows * safeColumns
  const pieceWidth = boardWidth / safeColumns
  const pieceHeight = boardHeight / safeRows
  const trayGap = 30
  const trayRows = Math.ceil(totalPieces / safeColumns)
  const trayHeight = trayRows * pieceHeight
  const containerHeight = boardHeight + trayGap + trayHeight

  const iniciarCronometro = () => {
    if (startTimeRef.current !== null || completedRef.current) {
      return
    }

    startTimeRef.current = Date.now()
    setIsRunning(true)
  }

  useEffect(() => {
    if (!isRunning) {
      return
    }

    const interval = setInterval(() => {
      if (startTimeRef.current !== null) {
        setElapsedSeconds(
          Math.floor((Date.now() - startTimeRef.current) / 1000)
        )
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <chat>
  const posicionesIniciales = useMemo(
    () =>
      generarPosicionesIniciales(
        totalPieces,
        safeColumns,
        pieceWidth,
        pieceHeight,
        boardHeight + trayGap
      ),
    [
      totalPieces,
      safeColumns,
      pieceWidth,
      pieceHeight,
      boardHeight,
      trayGap,
      gameKey
    ]
  )

  const threshold = snapThreshold ?? Math.min(pieceWidth, pieceHeight) * 0.35

  const handleDrop = (index: number, correct: boolean) => {
    movesRef.current += 1
    setMoves(movesRef.current)

    if (!correct || completedRef.current) {
      return
    }

    if (lockedPiecesRef.current.has(index)) {
      return
    }

    const next = new Set(lockedPiecesRef.current)
    next.add(index)

    lockedPiecesRef.current = next
    setLockedPieces(next)

    if (next.size === totalPieces) {
      completedRef.current = true

      const finalTime =
        startTimeRef.current === null
          ? 0
          : Math.floor((Date.now() - startTimeRef.current) / 1000)

      setIsRunning(false)
      setElapsedSeconds(finalTime)

      const result: PuzzleResult = {
        score: calculateScore(movesRef.current, finalTime, totalPieces),
        moves: movesRef.current,
        timeSeconds: finalTime
      }

      onComplete(result)
    }
  }

  const reiniciar = () => {
    lockedPiecesRef.current = new Set()
    completedRef.current = false
    startTimeRef.current = null
    movesRef.current = 0

    setLockedPieces(new Set())
    setMoves(0)
    setElapsedSeconds(0)
    setIsRunning(false)
    setGameKey(previous => previous + 1)
  }

  return (
    <View className='items-center'>
      <View
        style={{
          width: boardWidth,
          height: containerHeight
        }}
      >
        {/* Tablero de destino */}
        <View
          style={{
            width: boardWidth,
            height: boardHeight
          }}
          className='absolute left-0 top-0 overflow-hidden rounded-xl border-2 border-dashed border-border bg-muted'
        >
          <Text className='absolute inset-0 m-2 text-center text-muted-foreground'>
            Coloca aquí las piezas
          </Text>
        </View>

        {/* Bandeja de piezas */}
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: boardHeight + trayGap,
            width: boardWidth,
            height: trayHeight
          }}
          className='overflow-hidden rounded-xl border-2 border-dashed border-border bg-muted'
        >
          <Text className='absolute inset-0 m-2 text-center text-muted-foreground'>
            Mueve tus piezas
          </Text>
        </View>

        {Array.from({ length: totalPieces }, (_, index) => {
          const targetColumn = index % safeColumns
          const targetRow = Math.floor(index / safeColumns)
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
              boardWidth={boardWidth}
              boardHeight={boardHeight}
              targetX={targetX}
              targetY={targetY}
              initialX={initial.x}
              initialY={initial.y}
              snapThreshold={threshold}
              imageResizeMode={imageResizeMode}
              locked={lockedPieces.has(index)}
              onDrop={handleDrop}
              onMoveStart={iniciarCronometro}
            />
          )
        })}
      </View>

      <View className='mt-4 w-full flex-row items-center justify-between p-2 px-4'>
        <Text className='text-base font-semibold'>Movimientos: {moves}</Text>
        <Text className='text-base font-semibold'>
          {lockedPieces.size}/{totalPieces}
        </Text>
        <Text className='text-base font-semibold'>
          {formatTime(elapsedSeconds)}
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

interface Props {
  puzzle: PUZZLES_STEP
  onComplete: (xp: number) => void
}
export function Puzzle({ puzzle, onComplete }: Props) {
  async function onSubmit(result: PuzzleResult) {
    onComplete(result.score)
  }

  return (
    <ScrollView className='flex-1 bg-background'>
      <Rompecabezas
        image={puzzle.image}
        rows={puzzle.rows}
        columns={puzzle.columns}
        width={320}
        height={320}
        onComplete={onSubmit}
      />
    </ScrollView>
  )
}

type PuzzleResult = {
  score: number
  moves: number
  timeSeconds: number
}

const calculateScore = (
  moves: number,
  timeSeconds: number,
  totalPieces: number
) => {
  const extraMoves = Math.max(0, moves - totalPieces)

  return Math.max(0, 1000 - extraMoves * 10 - timeSeconds * 2)
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds
  ).padStart(2, '0')}`
}
