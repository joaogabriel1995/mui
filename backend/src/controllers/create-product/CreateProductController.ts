import { prismaClient } from '../../database/prismaClient'
import { Request, Response } from 'express'

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, costPrice, imposto, sku, userId } = request.body

    const product = await prismaClient.product.create({
      data: {
        name,
        costPrice,
        imposto,
        sku,
        userId
      }
    })
    return response.json(product)
  }
}
