import pgPromise from 'pg-promise'
import { environment } from '../server/environment'

export const pgp = pgPromise({ schema: 'exploraocanna' })
export const db = pgp({
  connectionString: environment.postgresUrl
})

db.connect()
  .then(async () => {
    console.log('Conectado a la base de datos')
  })
  .catch(e => console.log(e))
