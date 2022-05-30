import { response, Router } from 'express'
import app from '../app'
import {
  DeleteUserController,
  FindManyUserController,
  UpdateUserController,
  CreateProductController,
  FindManyProductController,
  DeleteProductController,
  UpdateProductController
} from '../controllers'

import { createUserController } from '../useCases/CreateUser/index'
import { authenticateUserController } from '../useCases/authenticateUser/index'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { refreshTokenUserControler } from '../useCases/refreshTokenUser'

const findManyUserController = new FindManyUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createProductController = new CreateProductController()
const findManyProductController = new FindManyProductController()
const deleteProductController = new DeleteProductController()
const updateProductController = new UpdateProductController()

const appRouter = Router()
appRouter.post('/user', (request, response) => {
  createUserController.handle(request, response)
})
appRouter.post('/login', (request, response) => {
  authenticateUserController.handle(request, response)
})

appRouter.post('/refresh-token', (request, response) => {
  refreshTokenUserControler.handle(request, response)
})

appRouter.get('/user', ensureAuthenticated, findManyUserController.handle)
appRouter.put('/user', updateUserController.handle)
appRouter.delete('/user/del=:id', deleteUserController.handle)

appRouter.post('/product', createProductController.handle)
appRouter.get('/products', findManyProductController.handle)
appRouter.delete('/product/del=:id', deleteProductController.handle)
appRouter.patch('/product', updateProductController.handle)

export { appRouter }
