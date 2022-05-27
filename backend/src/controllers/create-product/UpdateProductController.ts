import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, name, costPrice, imposto, sku } = request.body
    const update = await prismaClient.product.update({
      where: { id: id },
      data: {
        name,
        costPrice,
        imposto,
        sku
      }
    })
    return response.status(200).json(update)
  }
}
