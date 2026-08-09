import type { ReactNode } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Text } from '@/components/ui/text'

interface Props {
  children: ReactNode
  title: string
  desc: string
  onAccept: () => void
  cancelText?: string
  acceptText?: string
}
export function CustomAlertDialog({
  children,
  title,
  desc,
  onAccept,
  cancelText = 'Cancelar',
  acceptText = 'Continuar'
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className='flex flex-row justify-end'>
          <AlertDialogCancel>
            <Text>{cancelText}</Text>
          </AlertDialogCancel>
          <AlertDialogAction onPress={onAccept}>
            <Text>{acceptText}</Text>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
