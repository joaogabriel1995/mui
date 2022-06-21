import { Product } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { ICreateProductDTO } from '../../useCases/createProduct/ICreateProductDTO'
import { ICreateProductRepository } from '../ICreateProductRepository'

export class CreateProductRepository implements ICreateProductRepository {
  async create({
    name,
    costPrice,
    imposto,
    userId,
    sku
  }: ICreateProductDTO): Promise<Product> {
    const productInstance = await prisma.product.create({
      data: {
        name: name,
        userId: userId,
        sku: sku,
        taxation: imposto,
        costPrice: costPrice
      }
    })
    return productInstance
  }
}
