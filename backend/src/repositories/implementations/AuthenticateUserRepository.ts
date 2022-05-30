import { User } from '@prisma/client'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../prisma/client'
import { IAuthenticateUserRepository } from '../IAuthenticateUserRepository'

class AuthenticateUserRepository implements IAuthenticateUserRepository {
  async emailAlreadyExist(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { email } })
    return user
  }

}
export { AuthenticateUserRepository }
