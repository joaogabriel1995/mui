import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'
import { parse } from 'url'

export class FindUserByNameController {
  async handle(request: Request, response: Response) {
    console.log(request.query.name)

    const userExist = await prismaClient.user.findMany({
      where: {
        name: {
          contains: request.params.name
        }
      }
    })
    if (userExist.length === 0) {
      return response
        .status(400)
        .json('O nome pesquisado não existe em nossa base de dados')
    }

    response.status(200).json(userExist)
  }
}
