import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

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
    const hasPermission = await this.requestPermission()

    if (!hasPermission) {
      return false
    }

    const scheduled = await Notifications.getAllScheduledNotificationsAsync()
    for (const notification of scheduled) {
      if (notification.identifier === 'daily-learning-reminder') {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier
        )
      }
    }

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.DEFAULT
      })
    }

    await Notifications.scheduleNotificationAsync({
      identifier: 'daily-learning-reminder',
      content: {
        title: '¡Tu aventura te espera! 🏛️',
        body: 'Continúa explorando y descubre más sobre la historia de Ocaña.',
        sound: 'default'
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 15,
        minute: 0,
        ...(Platform.OS === 'android' && {
          channelId: 'default'
        })
      }
    })

    return true
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
