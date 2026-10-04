import { create } from 'zustand'
import { notificationService } from '@/hooks/useNotification'

interface NotificationState {
  enabled: boolean
  initialized: boolean

  initialize: () => Promise<void>
  enable: () => Promise<boolean>
  disable: () => Promise<void>
}

export const useNotificationStore = create<NotificationState>(set => ({
  enabled: false,
  initialized: false,

  initialize: async () => {
    const granted = await notificationService.initialize()
    set({
      enabled: granted,
      initialized: true
    })
  },

  enable: async () => {
    const granted = await notificationService.requestPermission()
    if (granted) {
      set({ enabled: true })
    }

    return granted
  },

  disable: async () => {
    await notificationService.cancelAllNotifications()
    set({
      enabled: false
    })
  }
}))
