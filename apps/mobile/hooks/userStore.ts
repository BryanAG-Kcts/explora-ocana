import { create } from 'zustand'

export interface User {
  id: number
  name: string
  lastname: string
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
  commmune: string | null
  neighborhood: string | null
  armedconflict: boolean
}

interface Store {
  user: User | null
  getUser: () => User | null
  setUser: (user: User) => void
}
export const useStore = create<Store>((set, get) => ({
  user: null,
  getUser: () => get().user,
  setUser: user => set({ user })
}))
