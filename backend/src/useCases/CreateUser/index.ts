import { PrismaRepository } from '../../repositories/implementations/PrismaRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const prismaUserRepository = new PrismaRepository()

const createUserUseCase = new CreateUserUseCase(prismaUserRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
