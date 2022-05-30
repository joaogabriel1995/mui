import { Request, Response } from 'express'
import { prisma } from '../../prisma/client'

export class FindManyProductController {
  async handle(request: Request, response: Response) {
    const product = await prisma.product.findMany()
    return response.json(product)
  }
}
