import { IDeleteProductRepository } from '../../repositories/IDeleteProductRepository'
import { IFindManyProductRepository } from '../../repositories/IFindManyProductRepository'
import { IDeleteProductDTO } from './DeleteProductDTO'

export class DeleteProductUseCase {
  private ideleteProductRepository: IDeleteProductRepository
  private ifindManyProductRepository: IFindManyProductRepository

  constructor(
    ideleteProductRepository: IDeleteProductRepository,
    ifindManyProductRepository: IFindManyProductRepository
  ) {
    this.ideleteProductRepository = ideleteProductRepository
    this.ifindManyProductRepository = ifindManyProductRepository
  }

  async execute({ id }: IDeleteProductDTO) {
    const productExist = this.ifindManyProductRepository.productAlreadyExist(id)
    if (!productExist) {
      throw new Error('Nenhum Produto encontrado.')
    }
    const del = this.ideleteProductRepository.DeleteById(id)
    return del
  }
}
