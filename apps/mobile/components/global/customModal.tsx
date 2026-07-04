import type { ReactNode } from 'react'
import { Modal, Pressable } from 'react-native'

interface Props {
  isModalVisible: boolean
  handleCloseModal: () => void
  children: ReactNode
  type?: 'slide' | 'fade' | 'none'
}
export function CustomModal({
  isModalVisible,
  handleCloseModal,
  children,
  type = 'slide'
}: Props) {
  return (
    <Modal
      visible={isModalVisible}
      transparent
      animationType={type}
      onRequestClose={handleCloseModal}
    >
      <Pressable className='flex-1 bg-black/50' onPress={handleCloseModal}>
        {children}
      </Pressable>
    </Modal>
  )
}
