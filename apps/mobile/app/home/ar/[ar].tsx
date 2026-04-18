import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator
} from '@reactvision/react-viro'
import { useState } from 'react'
import { View } from 'react-native'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

// 1. Extraemos la escena AR a su propio componente
const EscenaMico = (props: any) => {
  // Extraemos scale y rotation desde viroAppProps
  const { scale, rotation } = props.sceneNavigator.viroAppProps

  return (
    <ViroARScene>
      <ViroAmbientLight color='#ffffff' intensity={200} />
      <Viro3DObject
        source={require('../../../assets/mico.glb')}
        position={[0, 0, -1]}
        type='GLB'
        dragType='FixedToWorld'
        onDrag={() => {}}
        // Nota: Viro3DObject no usa width/height, solo scale
        scale={scale}
        rotation={rotation}
      />
    </ViroARScene>
  )
}

export default function Ar() {
  const [scale, setScale] = useState<[number, number, number]>([0.2, 0.2, 0.2])
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0])
  const minScale = 0.2
  const maxScale = 3.0

  function rotateMICO(factor: number) {
    setRotation([rotation[0], rotation[1] + factor, rotation[2]])
  }

  function handleSize(scaleFactor: number) {
    const newScale = scale.map(x => x + scaleFactor) as typeof scale
    if (newScale[0] > maxScale || newScale[0] < minScale) {
      return
    }
    setScale(newScale)
  }

  return (
    <View className='flex-1 bg-red-100 relative'>
      <ViroARSceneNavigator
        // 2. Pasamos la REFERENCIA al componente, no una función en línea
        initialScene={{ scene: EscenaMico }}
        // 3. Pasamos el estado dinámico a través de viroAppProps
        viroAppProps={{ scale, rotation }}
      />

      <View className='absolute bottom-0 w-full flex-row gap-4 p-2 justify-center'>
        <Button onPress={() => rotateMICO(-50)}>
          <Text>IZQ</Text>
        </Button>

        <Button onPress={() => rotateMICO(50)}>
          <Text>DER</Text>
        </Button>

        <Button onPress={() => handleSize(0.2)}>
          <Text>AGRANDAR</Text>
        </Button>

        <Button onPress={() => handleSize(-0.2)}>
          <Text>MINIMIZAR</Text>
        </Button>
      </View>
    </View>
  )
}
