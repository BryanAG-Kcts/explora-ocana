import { Play, X } from 'lucide-react-native'
import { Modal, Pressable, Text, View } from 'react-native'
import { Icon } from '@/components/ui/icon'
import type { Node } from '@/constants/pages/home/routeEntities'

interface Props {
  node: Node | null
  visible: boolean
  onClose: () => void
  onStart: () => void
}

export function MissionPopup({ node, visible, onClose, onStart }: Props) {
  if (!node) return null

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={onClose}
    >
      <View className='flex-1 items-center justify-center bg-black/50 px-6'>
        <View className='w-full max-w-sm rounded-3xl bg-background p-6'>
          {/* Header */}
          <View className='mb-5 flex-row items-center justify-between'>
            <View className='flex-1 pr-4'>
              <Text className='text-2xl font-bold text-foreground'>
                {node.title}
              </Text>

              {node.isOptional && (
                <Text className='mt-1 text-sm font-semibold text-muted-foreground'>
                  Misión opcional
                </Text>
              )}
            </View>

            <Pressable
              onPress={onClose}
              className='h-9 w-9 items-center justify-center rounded-full bg-muted'
            >
              <Icon as={X} size={20} className='text-foreground' />
            </Pressable>
          </View>

          {/* Icono */}
          <View className='mb-5 items-center'>
            <View className='h-20 w-20 items-center justify-center rounded-full bg-primary'>
              <Icon
                as={node.icon}
                size={42}
                className='text-primary-foreground'
              />
            </View>
          </View>

          {/* Descripción */}
          <Text className='mb-6 text-center text-base leading-6 text-muted-foreground'>
            {node.description}
          </Text>

          {/* Pregunta */}
          <Text className='mb-4 text-center text-lg font-bold text-foreground'>
            ¿Quieres comenzar esta misión?
          </Text>

          {/* Botones */}
          <View className='gap-3'>
            <Pressable
              onPress={onStart}
              className='h-12 flex-row items-center justify-center gap-2 rounded-2xl bg-primary'
            >
              <Icon as={Play} size={20} className='text-primary-foreground' />

              <Text className='font-bold text-primary-foreground'>
                Comenzar misión
              </Text>
            </Pressable>

            <Pressable
              onPress={onClose}
              className='h-12 items-center justify-center rounded-2xl bg-muted'
            >
              <Text className='font-semibold text-foreground'>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
