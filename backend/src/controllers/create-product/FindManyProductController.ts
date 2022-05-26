import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class FindManyProductController {
  async handle(request: Request, response: Response) {
    const product = await prismaClient.product.findMany()
    return response.json(product)
  }
}
