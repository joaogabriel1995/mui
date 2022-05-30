import { User } from '@prisma/client'

export interface IAuthenticateUserRepository {
  emailAlreadyExist: (email: string) => Promise<User | null>
}
