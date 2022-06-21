import { FindManyProductRepository } from '../../repositories/implementations/FindManyProductRepository'
import { DeleteProductRepository } from '../../repositories/implementations/DeleteProductRepository'
import { DeleteProductUseCase } from './DeleteProductUseCase'
import { DeleteProductController } from './DeleteProductController'

const deleteProductRepository = new DeleteProductRepository()
const findManyProductRepository = new FindManyProductRepository()

const deleteProductUseCase = new DeleteProductUseCase(
  deleteProductRepository,
  findManyProductRepository
)

const deleteProductController = new DeleteProductController(
  deleteProductUseCase
)

export { deleteProductController }
