import { FindManyUserRepository } from '../../repositories/implementations/FindManyUserRepository'
import { FindManyUserController } from './FindManyUserController'
import { FindManyUserUseCase } from './FindManyUserUseCase'

const findManyUserRepository = new FindManyUserRepository()

const findManyUserUseCase = new FindManyUserUseCase(findManyUserRepository)

const findManyUserController = new FindManyUserController(findManyUserUseCase)

export { findManyUserController }
