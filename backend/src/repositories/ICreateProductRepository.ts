import { Product } from '@prisma/client'
import { ICreateProductDTO } from '../useCases/createProduct/ICreateProductDTO'

export interface ICreateProductRepository {
  create({
    name,
    costPrice,
    imposto,
    userId,
    sku
  }: ICreateProductDTO): Promise<Product | null>
}
