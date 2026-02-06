import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_AXIOS_BASE_URL || 'http://localhost:3000/'
})
