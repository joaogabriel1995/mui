import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

export class CreateProductController {
  private createProductUseCase: CreateProductUseCase
  constructor(createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase
  }

  async handle(request: Request, response: Response) {
    const { name, costPrice, imposto, userId, sku } = request.body
    try {
      const product = await this.createProductUseCase.execute({
        name,
        costPrice,
        imposto,
        userId,
        sku
      })
      return response.status(201).json(product)
    } catch (err) {
      return response.status(400).json('Erro')
    }
  }
}
