import express from 'express'
import { appRouter } from './routes/routes'
import cors from 'cors'

class App {
  public express: express.Application

  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }
  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(appRouter)
  }
  private routes(): void {
    this.express.use(appRouter)
  }
}

export default new App().express
