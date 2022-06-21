import { Request, Response } from 'express'
import { FindManyUserUseCase } from './FindManyUserUseCase'

export class FindManyUserController {
  private findManyUserUseCase: FindManyUserUseCase
  constructor(findManyUserUseCase: FindManyUserUseCase) {
    this.findManyUserUseCase = findManyUserUseCase
  }

  async handle(request: Request, response: Response) {
    try {
      const currentPage = request.query.page ? String(request.query.page) : '1'
      console.log(String(request.query.page))
      if (currentPage) {
        console.log('aqui', currentPage)
        const paramsSearchName = String(request.query.name)
        const listUser = await this.findManyUserUseCase.execute({
          paramsSearchName,
          currentPage
        })

        return response.status(200).json(listUser)
      }
    } catch (erro) {
      return response.status(400).json('Erro')
    }
  }
}
