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
