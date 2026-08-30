import { create } from 'zustand'
import { removeTokens } from '@/constants/global/authStorage'

export interface User {
  id: number
  name: string
  lastName: string
  fullname: string
  email: string
  document: string
  documentType: string
  phone: string
  birthdate: string
  gender: string
  ethnicGroup: string
  country: string
  department: string | null
  city: string | null
  commune: string | null
  neighborhood: string | null
  armedConflict: boolean
  role: 'Estudiante' | 'Docente'
  school: string
  educationLevel: string
}

interface Store {
  user: User | null
  getUser: () => User | null
  setUser: (user: User) => void
  logOut: () => Promise<void>
}
export const useUserStore = create<Store>((set, get) => ({
  user: null,
  getUser: () => get().user,
  setUser: user => set({ user }),
  logOut: async () => {
    set({ user: null })
    await removeTokens()
  }
}))
