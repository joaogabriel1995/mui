import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const intId = parseInt(request.params.id)
    const userExist = await prismaClient.user.findUnique({
      where: { id: intId }
    })
    if (!userExist) {
      return response.status(400).json('O id não existe')
    }
    const del = await prismaClient.user.delete({
      where: {
        id: intId
      }
    })
    response.status(200).json(del)
  }
}
