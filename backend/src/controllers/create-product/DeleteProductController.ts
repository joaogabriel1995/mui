import { Request, Response } from 'express'
import { prisma } from '../../prisma/client'

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const id = request.params.id

    const del = await prisma.product.delete({
      where: { id: id }
    })
    return response.status(200).json(del)
  }
}
