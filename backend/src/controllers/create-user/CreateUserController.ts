import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, cpf } = request.body

    const user = await prismaClient.user.create({
      data: {
        name,
        cpf,
        email
      }
    })

    return response.json(user)
  }
}
