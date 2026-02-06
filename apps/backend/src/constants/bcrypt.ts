import bcrypt from 'bcrypt'
import { environment } from '../server/environment'

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, environment.saltRounds)
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash)
}
