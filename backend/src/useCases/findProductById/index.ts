import { FindManyProductRepository } from '../../repositories/implementations/FindManyProductRepository'
import { FindProductByIdController } from './FindProductByIdController'
import { FindProductByIdUseCase } from './FindProductByIdUseCase'

const ifindManyProductRepository = new FindManyProductRepository()
const findProductByIdUseCase = new FindProductByIdUseCase(
  ifindManyProductRepository
)

const findProductByIdController = new FindProductByIdController(
  findProductByIdUseCase
)

export { findProductByIdController }
