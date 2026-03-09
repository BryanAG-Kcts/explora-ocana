import 'dotenv/config'

export const environment = {
  postgresUrl: process.env.POSTGRES_URL || '',
  passwordDB: process.env.PASSWORD_DB || '',
  port: process.env.PORT || 3000,
  saltRounds: Number(process.env.SALT_ROUNDS) || 10,
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET as string || "Empanada",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET as string || "Empanada"
}
