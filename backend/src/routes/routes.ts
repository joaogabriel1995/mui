import { Router, Request, Response } from 'express'
import {
  CreateUserController,
  DeleteUserController,
  FindManyUserController,
  UpdateUserController
} from '../controllers'

const createUserController = new CreateUserController()
const findManyUserController = new FindManyUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const appRouter = Router()

appRouter.post('/user', createUserController.handle)
appRouter.get('/user', findManyUserController.handle)
appRouter.put('/user', updateUserController.handle)
appRouter.delete('/user/:id', deleteUserController.handle)

export { appRouter }
