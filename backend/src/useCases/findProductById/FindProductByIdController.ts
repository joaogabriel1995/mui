import { Request, Response } from 'express'
import { FindProductByIdUseCase } from './FindProductByIdUseCase'

export class FindProductByIdController {
  private findProductByIdUseCase: FindProductByIdUseCase
  constructor(findProductByIdUseCase: FindProductByIdUseCase) {
    this.findProductByIdUseCase = findProductByIdUseCase
  }
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params
      console.log(id)
      const test = await this.findProductByIdUseCase.execute({ id })
      return response.status(200).json(test)
    } catch (erro) {
      return response.status(400).json('Erro')
    }
  }
}
