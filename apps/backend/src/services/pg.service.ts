import pgPromise from 'pg-promise'
import { environment } from '../server/environment'

export const pgp = pgPromise({ schema: 'exploraocanna' })
export const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: environment.passwordDB
})
