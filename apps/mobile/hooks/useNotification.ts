import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

const DAILY_NOTIFICATION_ID = 'daily-learning-reminder'

export const notificationService = {
  async getPermissionStatus() {
    const { status } = await Notifications.getPermissionsAsync()

    return status
  },

  async requestPermission() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()

    if (existingStatus === 'granted') {
      return true
    }

    const { status } = await Notifications.requestPermissionsAsync()

    return status === 'granted'
  },

  async initialize() {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.DEFAULT
      })
    }

    return this.requestPermission()
  },

  async scheduleNotification(
    content: Notifications.NotificationContentInput,
    trigger: Notifications.NotificationTriggerInput
  ) {
    return Notifications.scheduleNotificationAsync({
      content,
      trigger
    })
  },

  async scheduleDailyReminder() {
    // Evita duplicar el recordatorio diario.
    await this.cancelNotification(DAILY_NOTIFICATION_ID)

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.DEFAULT
      })
    }

    return this.scheduleNotification(
      {
        title: '¡Tu aventura te espera! 🏛️',
        body: 'Continúa explorando y descubre más sobre la historia de Ocaña.',
        sound: 'default'
      },
      {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 15,
        minute: 0,
        ...(Platform.OS === 'android' && {
          channelId: 'default'
        })
      }
    )
  },

  async cancelNotification(notificationId: string) {
    await Notifications.cancelScheduledNotificationAsync(notificationId)
  },

  async cancelAllNotifications() {
    await Notifications.cancelAllScheduledNotificationsAsync()
  },

  async getScheduledNotifications() {
    return Notifications.getAllScheduledNotificationsAsync()
  }
}
