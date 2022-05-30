import { Response, Request } from 'express'
import { prisma } from '../../prisma/client'

interface IFindManyUserController {
  query?: string | undefined
}

export class FindManyUserController<IFindManyUserController> {
  async handle(request: Request, response: Response) {
    const query = String(request.query.name)
    console.log(String(query))
    if (query !== 'undefined') {
      const read = await prisma.user.findMany({
        where: { name: { contains: query } }
      })
      return response.json(read)
    } else {
      const read = await prisma.user.findMany()
      return response.json(read)
    }
  }
}
