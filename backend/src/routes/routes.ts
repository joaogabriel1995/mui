import { Router } from 'express'
import app from '../app'
import {
  CreateUserController,
  DeleteUserController,
  FindManyUserController,
  UpdateUserController,
  CreateProductController,
  FindManyProductController,
  DeleteProductController,
  UpdateProductController
} from '../controllers'

const createUserController = new CreateUserController()
const findManyUserController = new FindManyUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createProductController = new CreateProductController()
const findManyProductController = new FindManyProductController()
const deleteProductController = new DeleteProductController()
const updateProductController = new UpdateProductController()

const appRouter = Router()
appRouter.post('/user', createUserController.handle)
appRouter.get('/user', findManyUserController.handle)
appRouter.put('/user', updateUserController.handle)
appRouter.delete('/user/del=:id', deleteUserController.handle)

appRouter.post('/product', createProductController.handle)
appRouter.get('/products', findManyProductController.handle)
appRouter.delete('/product/del=:id', deleteProductController.handle)
appRouter.patch('/product', updateProductController.handle)

export { appRouter }
