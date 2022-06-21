import { Request, Response } from 'express'
import { request } from 'http'
import { DeleteProductUseCase } from './DeleteProductUseCase'

export class DeleteProductController {
  private deleteProductUseCase: DeleteProductUseCase
  constructor(deleteProductUseCase: DeleteProductUseCase) {
    this.deleteProductUseCase = deleteProductUseCase
  }

  async handle(request: Request, response: Response) {
    try {
      const deleteProduct = String(request.query.del)
      console.log('deleteProduct', request.query.del)
      const ddeleteProductResponse = await this.deleteProductUseCase.execute({
        id: deleteProduct
      })
      response.status(200).json(ddeleteProductResponse)
    } catch (erro) {
      return response.status(400).json('Erro')
    }
  }
}
