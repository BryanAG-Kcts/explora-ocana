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
        if (status !== 'granted') {
          await notificationService.cancelNotification(
            'daily-learning-reminder'
          )

          set({
            enabled: false,
            initialized: true
          })

          return
        }

        if (get().enabled) {
          const scheduled =
            await notificationService.getScheduledNotifications()

          const reminderExists = scheduled.some(
            notification =>
              notification.identifier === 'daily-learning-reminder'
          )

          if (!reminderExists) {
            await notificationService.scheduleDailyReminder()
          }
        }

        set({ initialized: true })
      },

      enable: async () => {
        const granted = await notificationService.requestPermission()

        if (!granted) {
          set({
            enabled: false,
            initialized: true
          })

          return false
        }

        await notificationService.scheduleDailyReminder()

        set({
          enabled: true,
          initialized: true
        })

        return true
      },

      disable: async () => {
        await notificationService.cancelNotification('daily-learning-reminder')

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
