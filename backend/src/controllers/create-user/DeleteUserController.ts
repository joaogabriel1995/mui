import { Request, Response } from 'express'
import { prisma } from '../../prisma/client'

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const id = request.params.id
    const userExist = await prisma.user.findUnique({
      where: { id: id }
    })
    if (!userExist) {
      return response.status(400).json('O id não existe')
    }
    const del = await prisma.user.delete({
      where: {
        id: id
      }
    })
    response.status(200).json(del)
  }
}
