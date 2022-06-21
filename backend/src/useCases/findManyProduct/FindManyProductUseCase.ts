import { IFindManyProductRepository } from '../../repositories/IFindManyProductRepository'
import { IFindManyProductDTO } from './IFindManyProductDTO'

export class FindManyProductUseCase {
  private ifindManyProductRepository: IFindManyProductRepository
  constructor(ifindManyProductRepository: IFindManyProductRepository) {
    this.ifindManyProductRepository = ifindManyProductRepository
  }
  async execute({ currentPage }: IFindManyProductDTO) {
    const listPerPage = 5
    const listProduct = await this.ifindManyProductRepository.findManyProduct(
      currentPage,
      listPerPage
    )

    if (!listProduct) {
      throw new Error('Nenhum Produto encontrado.')
    }
    return listProduct
  }
}
