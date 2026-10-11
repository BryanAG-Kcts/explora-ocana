import { useEffect, useState } from 'react'
import type { StoreApi } from 'zustand'
import { useNotificationStore } from '@/constants/global/notificationStore'
import { useAccessibilityStore } from './useAccesible'
import { useSoundStore } from './useSound'

type PersistedStore = StoreApi<unknown> & {
  persist: {
    hasHydrated: () => boolean
    onFinishHydration: (callback: () => void) => () => void
  }
}

function waitForHydration(store: PersistedStore): Promise<void> {
  if (store.persist.hasHydrated()) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    const unsubscribe = store.persist.onFinishHydration(() => {
      unsubscribe()
      resolve()
    })

    if (store.persist.hasHydrated()) {
      unsubscribe()
      resolve()
    }
  })
}

export function useSettingsHydration() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true

    const hydrate = async () => {
      await Promise.all([
        waitForHydration(useSoundStore),
        waitForHydration(useAccessibilityStore),
        waitForHydration(useNotificationStore)
      ])

      await useNotificationStore.getState().initialize()
      if (mounted) {
        setReady(true)
      }
    }

    hydrate().catch(error => {
      console.error('Error al cargar la configuración:', error)
      if (mounted) {
        setReady(true)
      }
    })

    return () => {
      mounted = false
    }
  }, [])

  return ready
}
