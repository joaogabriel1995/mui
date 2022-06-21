import { Product } from '@prisma/client'

export interface IFindManyProductRepository {
  productAlreadyExist(id: string): Promise<Product | null>
  findManyProduct(
    currentPage: string,
    listPerPage: number
  ): Promise<Product[] | null>
}
