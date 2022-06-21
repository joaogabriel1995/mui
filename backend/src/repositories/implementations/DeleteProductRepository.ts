import { Product } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { IDeleteProductRepository } from '../IDeleteProductRepository'

export class DeleteProductRepository implements IDeleteProductRepository {
  async DeleteById(id: string): Promise<Product | null> {
    const del = await prisma.product.delete({
      where: { id: id }
    })
    return del
  }
}
