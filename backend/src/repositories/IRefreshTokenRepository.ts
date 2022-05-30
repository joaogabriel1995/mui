import { RefreshToken } from '@prisma/client'

export interface IRefreshTokenRepository {
  RefreshTokenAlreadyExist(id: string): Promise<RefreshToken | null>
}
