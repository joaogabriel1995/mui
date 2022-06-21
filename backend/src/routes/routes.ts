import { response, Router } from 'express'
import app from '../app'
import {
  DeleteUserController,
  UpdateUserController,
  UpdateProductController
} from '../controllers'

import { createUserController } from '../useCases/createUser/index'
import { findManyUserController } from '../useCases/findManyUser/index'
import { findManyProductController } from '../useCases/findManyProduct/index'

import { authenticateUserController } from '../useCases/authenticateUser/index'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { refreshTokenUserControler } from '../useCases/refreshTokenUser'
import { createProductController } from '../useCases/createProduct/index'
import { deleteProductController } from '../useCases/deleteProduct'

const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

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

appRouter.get('/user', (request, response) => {
  findManyUserController.handle(request, response)
})

appRouter.put('/user', updateUserController.handle)
appRouter.delete('/user/del=:id', deleteUserController.handle)

appRouter.post('/product', (request, response) =>
  createProductController.handle(request, response)
)
appRouter.get('/products', (request, response) =>
  findManyProductController.handle(request, response)
)
appRouter.delete('/product', (request, response) =>
  deleteProductController.handle(request, response)
)
appRouter.patch('/product', updateProductController.handle)

export { appRouter }
