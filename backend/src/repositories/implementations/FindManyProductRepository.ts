import { Product } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { IFindManyProductRepository } from '../IFindManyProductRepository'

export class FindManyProductRepository implements IFindManyProductRepository {
  async findManyProduct(
    currentPage: string,
    listPerPage: number
  ): Promise<Product[] | null> {
    const intCurrentPage = Number(currentPage)
    const offset = (intCurrentPage - 1) * listPerPage
    const product = await prisma.product.findMany({
      skip: offset,
      take: listPerPage
    })
    return product
  }
  async productAlreadyExist(id: string): Promise<Product | null> {
    const productExist = await prisma.product.findFirst({
      where: {
        id: id
      }
    })
    return productExist
  }
}
