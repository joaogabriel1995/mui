import { CreateProductController } from '../createProduct/CreateProductController'
import { CreateProductRepository } from '../../repositories/implementations/CreateProductRepository'
import { CreateProductUseCase } from './CreateProductUseCase'

const createProductRepository = new CreateProductRepository()
const createProductUseCase = new CreateProductUseCase(createProductRepository)
const createProductController = new CreateProductController(
  createProductUseCase
)

export { createProductController }
