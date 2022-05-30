import { compare } from 'bcryptjs'
import { GenerateRefreshToken } from '../../provider/implementations/GenerateRefreshToken'
import { GenerateTokenProvider } from '../../provider/implementations/GenereteTokenProvider'
import { IAuthenticateUserRepository } from '../../repositories/IAuthenticateUserRepository'
import { AuthenticateUserRequestDTO } from './AuthenticateUserDTO'

class AuthenticateUserUseCase {
  private authUserRepository: IAuthenticateUserRepository
  private generateTokenProvider: GenerateTokenProvider
  private generateRefreshToken: GenerateRefreshToken

  constructor(
    authUserRepository: IAuthenticateUserRepository,
    generateTokenProvider: GenerateTokenProvider,
    generateRefreshToken: GenerateRefreshToken
  ) {
    this.authUserRepository = authUserRepository
    this.generateTokenProvider = generateTokenProvider
    this.generateRefreshToken = generateRefreshToken
  }
  async execute({ email, password }: AuthenticateUserRequestDTO) {
    const userAlreadyExists = await this.authUserRepository.emailAlreadyExist(
      email
    )
    if (!userAlreadyExists) {
      throw new Error('User or password incorrect')
    }
    const passwordMatch = await compare(password, userAlreadyExists.password)
    if (!passwordMatch) {
      throw new Error('User or password incorrect')
    }
    const token = await this.generateTokenProvider.execute(userAlreadyExists.id)
    const refreshToken = await this.generateRefreshToken.execute(
      userAlreadyExists.id
    )
    console.log(token, refreshToken)
    return { token, refreshToken }
  }
}

export { AuthenticateUserUseCase }
