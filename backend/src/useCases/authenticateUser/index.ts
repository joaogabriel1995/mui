import { AuthenticateUserController } from './AuthenticateUserController'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'
import { AuthenticateUserRepository } from '../../repositories/implementations/AuthenticateUserRepository'
import { GenerateRefreshToken } from '../../provider/implementations/GenerateRefreshToken'
import { GenerateTokenProvider } from '../../provider/implementations/GenereteTokenProvider'

const authenticateUserRepository = new AuthenticateUserRepository()
const generateTokenProvider = new GenerateTokenProvider()

const generateRefreshToken = new GenerateRefreshToken(generateTokenProvider)

const authenticateUserUseCase = new AuthenticateUserUseCase(
  authenticateUserRepository,
  generateTokenProvider,
  generateRefreshToken
)

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

export { authenticateUserController, authenticateUserUseCase }
