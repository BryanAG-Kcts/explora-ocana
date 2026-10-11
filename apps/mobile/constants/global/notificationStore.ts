import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { notificationService } from '@/hooks/useNotification'
import { secureStorage } from './secureStorage'

interface NotificationState {
  enabled: boolean
  initialized: boolean

  initialize: () => Promise<void>
  enable: () => Promise<boolean>
  disable: () => Promise<void>
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      enabled: false,
      initialized: false,

      initialize: async () => {
        const status = await notificationService.getPermissionStatus()
        if (status !== 'granted' && get().enabled) {
          set({ enabled: false })
        }

        set({ initialized: true })
      },

      enable: async () => {
        const granted = await notificationService.requestPermission()

        set({
          enabled: granted,
          initialized: true
        })

        return granted
      },

      disable: async () => {
        await notificationService.cancelAllNotifications()
        set({
          enabled: false,
          initialized: true
        })
      }
    }),
    {
      name: 'notification-settings',
      storage: createJSONStorage(() => secureStorage),

      partialize: state => ({
        enabled: state.enabled
      })
    }
  )
)
