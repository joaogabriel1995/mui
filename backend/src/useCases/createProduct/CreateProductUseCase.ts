import { ICreateProductRepository } from '../../repositories/ICreateProductRepository'
import { ICreateProductDTO } from './ICreateProductDTO'

export class CreateProductUseCase {
  private createProductRepository: ICreateProductRepository
  constructor(icreateProductRepository: ICreateProductRepository) {
    this.createProductRepository = icreateProductRepository
  }
  async execute({ name, costPrice, imposto, userId, sku }: ICreateProductDTO) {
    const NewProduct = await this.createProductRepository.create({
      name,
      costPrice,
      imposto,
      userId,
      sku
    })
    return NewProduct
  }
}
