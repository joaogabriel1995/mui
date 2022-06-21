import { Request, Response } from 'express'
import { FindManyProductUseCase } from './FindManyProductUseCase'

export class FindManyProductController {
  private findManyProductUseCase: FindManyProductUseCase
  constructor(findManyProductUseCase: FindManyProductUseCase) {
    this.findManyProductUseCase = findManyProductUseCase
  }

  async handle(request: Request, response: Response) {
    try {
      const currentPage = request.query.page ? String(request.query.page) : '1'
      if (currentPage) {
        const listProduct = await this.findManyProductUseCase.execute({
          currentPage
        })
        return response.status(200).json(listProduct)
      }
    } catch (err) {
      return response.status(400).json('Error ListProduct')
    }
  }
}
