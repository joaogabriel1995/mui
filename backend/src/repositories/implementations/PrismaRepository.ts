import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { prisma } from '../../prisma/client'
import { ICreateUserRepository } from '../ICreateUserRepository'

export class PrismaRepository implements ICreateUserRepository {
  async userAlreadyExist(email: string): Promise<User | null> {
    const userExist = await prisma.user.findFirst({ where: { email } })

    return userExist
  }

  async create(name: string, email: string, password: string): Promise<User> {
    const encryptPassword = await hash(password, 8)

    const user = await prisma.user.create({
      data: { name, email, password: encryptPassword }
    })
    return user
  }
}
