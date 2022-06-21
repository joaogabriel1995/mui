import { FindManyProductRepository } from '../../repositories/implementations/FindManyProductRepository'
import { FindManyProductController } from './FindManyProductController'
import { FindManyProductUseCase } from './FindManyProductUseCase'

const findManyProductRepository = new FindManyProductRepository()

const findManyProductUseCase = new FindManyProductUseCase(
  findManyProductRepository
)
const findManyProductController = new FindManyProductController(
  findManyProductUseCase
)

export { findManyProductController }
