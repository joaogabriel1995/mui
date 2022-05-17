import { Response, Request } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class FindManyUserController {
  async handle(request: Request, response: Response) {
    const read = await prismaClient.user.findMany()
    return response.json(read)
  }
}
