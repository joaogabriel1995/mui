import { User } from '@prisma/client'

export interface ICreateUserRepository {
  userAlreadyExist(email: string): Promise<User | null>
  create(name: string, email: string, password: string): Promise<User>
  
}
