import cors from 'cors'
import express, { type Express } from 'express'
import { authRouter } from '../routes/auth.routes'
import { environment } from './environment'

export class Server {
  app: Express

  constructor() {
    this.app = express()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/auth', authRouter)
    this.app.all('/{*splat}', (_, res) => {
      res.json({ msg: 'Hello World!' })
    })
  }

  start() {
    this.middlewares()
    this.routes()
    this.app.listen(environment.port, () => {
      console.log(
        `Example app listening at http://localhost:${environment.port}`
      )
    })
  }
}
