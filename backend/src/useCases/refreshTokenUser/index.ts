import { RefreshTokenUserControler } from './RefreshTokenUserController'
import { RefreshTokenUserUseCase } from './RefreshTokenUserUsecase'
import { GenerateTokenProvider } from '../../provider/implementations/GenereteTokenProvider'
import { RefreshTokenRepository } from '../../repositories/implementations/RefreshTokenRepository'

const generateTokenProvider = new GenerateTokenProvider()
const iRefreshTokenRepository = new RefreshTokenRepository()

const refreshTokenUserUseCase = new RefreshTokenUserUseCase(
  iRefreshTokenRepository,
  generateTokenProvider
)

const refreshTokenUserControler = new RefreshTokenUserControler(
  refreshTokenUserUseCase
)

export { refreshTokenUserControler }
