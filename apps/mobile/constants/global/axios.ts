import axios from 'axios'
import { getAccessToken } from './authStorage'

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_AXIOS_BASE_URL || 'http://localhost:3000/'
})

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => Promise.reject(error)
)

type SafePromiseResult<T> = readonly [data: T | null, error: unknown | null]
export async function safePromise<T>(
  promise: Promise<T>
): Promise<SafePromiseResult<T>> {
  try {
    return [await promise, null]
  } catch (error) {
    return [null, error]
  }
}
