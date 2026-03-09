import jwt from "jsonwebtoken"
import { environment } from "../server/environment"

export function generateAccessToken(payload: object) {
  return jwt.sign(payload, environment.jwtAccessSecret, {
    expiresIn: "15m"
  })
}

export function generateRefreshToken(payload: object) {
  return jwt.sign(payload, environment.jwtRefreshSecret, {
    expiresIn: "7d"
  })
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, environment.jwtAccessSecret)
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, environment.jwtRefreshSecret)
}