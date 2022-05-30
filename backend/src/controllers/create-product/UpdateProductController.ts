import { Request, Response } from 'express'
import { prisma } from '../../prisma/client'

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, name, costPrice, taxation, sku } = request.body
    const update = await prisma.product.update({
      where: { id: id },
      data: {
        name,
        costPrice,
        taxation,
        sku
      }
    })
    return response.status(200).json(update)
  }
}
