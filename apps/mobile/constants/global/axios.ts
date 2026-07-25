import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_AXIOS_BASE_URL || 'http://localhost:3000/'
})

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
