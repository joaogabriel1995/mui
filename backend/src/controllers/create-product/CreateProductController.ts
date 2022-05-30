import { prisma } from '../../prisma/client'
import { Request, Response } from 'express'

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, costPrice, taxation, sku, userId } = request.body

    const product = await prisma.product.create({
      data: {
        name,
        costPrice,
        taxation,
        sku,
        userId
      }
    })
    return response.json(product)
  }
}
