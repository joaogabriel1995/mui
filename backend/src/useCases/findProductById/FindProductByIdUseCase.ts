import { IFindManyProductRepository } from '../../repositories/IFindManyProductRepository'
import { findProductByIdDTO } from './FindProductByIdDTO'

export class FindProductByIdUseCase {
  private ifindManyProductRepository: IFindManyProductRepository
  constructor(ifindManyProductRepository: IFindManyProductRepository) {
    this.ifindManyProductRepository = ifindManyProductRepository
  }
  async execute({ id }: findProductByIdDTO) {
    const ProductById =
      await this.ifindManyProductRepository.productAlreadyExist(id)
    if (!ProductById) {
      throw new Error('Nenhum Produto encontrado.')
    }
    return ProductById
  }
}
