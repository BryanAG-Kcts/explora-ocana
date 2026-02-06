import 'dotenv/config'

export const environment = {
  postgresUrl: process.env.POSTGRES_URL || '',
  passwordDB: process.env.PASSWORD_DB || '',
  port: process.env.PORT || 3000,
  saltRounds: Number(process.env.SALT_ROUNDS) || 10
}
