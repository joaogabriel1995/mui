import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const id = parseInt(request.params.id)

    const del = await prismaClient.product.delete({
      where: { id: id }
    })
    return response.status(200).json(del)
  }
}
