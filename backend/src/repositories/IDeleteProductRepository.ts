import { Product } from '@prisma/client'

export interface IDeleteProductRepository {
  DeleteById(id: string): Promise<Product | null>
}
