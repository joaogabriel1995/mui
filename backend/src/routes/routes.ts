import { Router } from 'express'
import {
  CreateUserController,
  DeleteUserController,
  FindManyUserController,
  UpdateUserController,
  CreateProductController,
  FindManyProductController
} from '../controllers'

const createUserController = new CreateUserController()
const findManyUserController = new FindManyUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createProductController = new CreateProductController()
const findManyProductController = new FindManyProductController()

const appRouter = Router()
appRouter.post('/user', createUserController.handle)
appRouter.get('/user', findManyUserController.handle)
appRouter.put('/user', updateUserController.handle)
appRouter.delete('/user/del=:id', deleteUserController.handle)

appRouter.post('/product', createProductController.handle)
appRouter.get('/product', findManyProductController.handle)
export { appRouter }
