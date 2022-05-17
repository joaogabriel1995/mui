import { prisma } from '@prisma/client'
import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id, name, email, cpf } = request.body

    const userExist = await prismaClient.user.findUnique({ where: { id } })

    if (!userExist) {
      return response.status(400).json('O Id não existe')
    }

    if (!id) {
      return response.status(400).json('O Id não foi passado')
    }

    const update = await prismaClient.user.update({
      where: {
        id
      },
      data: {
        name,
        email,
        cpf
      }
    })
    return response.status(200).json(update)
  }
}
