import { executionAsyncResource } from 'async_hooks'
import { prisma } from '../../prisma/client'
import { GenerateTokenProvider } from '../../provider/implementations/GenereteTokenProvider'
import { IRefreshTokenRepository } from '../../repositories/IRefreshTokenRepository'

class RefreshTokenUserUseCase {
  private refreshTokenRepository: IRefreshTokenRepository
  private generateTokenProvider: GenerateTokenProvider
  constructor(
    refreshTokenRepository: IRefreshTokenRepository,
    generateTokenProvider: GenerateTokenProvider
  ) {
    this.refreshTokenRepository = refreshTokenRepository
    this.generateTokenProvider = generateTokenProvider
  }

  async execute(refresh_token_id: string) {
    const refreshTokenAlreadyExist =
      await this.refreshTokenRepository.RefreshTokenAlreadyExist(
        refresh_token_id
      )
    console.log(refreshTokenAlreadyExist)
    if (refreshTokenAlreadyExist === null) {
      throw new Error('Refresh token Invalid')
    }

    const token = this.generateTokenProvider.execute(
      refreshTokenAlreadyExist.userId
    )
    console.log(token)
    return token
  }
}

export { RefreshTokenUserUseCase }
