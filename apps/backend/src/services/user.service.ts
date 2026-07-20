import { userRepository } from "../repositories/user.repository"

export const userService = {
  getProfileUser: async (userId: number) => {
    const user = await userRepository.getProfileUser(userId)
    if (!user) throw new Error('Usuario no encontrado')
    return user
  },

  getInformationUser: async (userId: number) => {
    const user = await userRepository.getInformationUser(userId)
    if (!user) throw new Error('Usuario no encontrado')
    return user
  }
}