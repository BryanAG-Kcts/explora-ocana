import { userRepository } from "../repositories/user.repository"

export const userService = {
  getUserById: async (userId: string) => {
    const user = await userRepository.getDataBasicUser(userId)
    if (!user) throw new Error('Usuario no encontrado')
    return user
  },
}