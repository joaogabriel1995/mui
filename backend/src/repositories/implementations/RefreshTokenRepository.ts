import { IRefreshTokenRepository } from '../IRefreshTokenRepository'
import { RefreshToken } from '@prisma/client'
import { prisma } from '../../prisma/client'

export class RefreshTokenRepository implements IRefreshTokenRepository {
  async RefreshTokenAlreadyExist(id: string): Promise<RefreshToken | null> {
    const refreshTokenAlreadyExist = await prisma.refreshToken.findFirst({
      where: { id: id }
    })
    return refreshTokenAlreadyExist
  }
}
