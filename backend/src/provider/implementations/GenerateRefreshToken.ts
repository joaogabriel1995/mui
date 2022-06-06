import dayjs from 'dayjs'
import { prisma } from '../../prisma/client'
import { GenerateTokenProvider } from './GenereteTokenProvider'
class GenerateRefreshToken {
  private generateTokenProvider: GenerateTokenProvider

  constructor(generateTokenProvider: GenerateTokenProvider) {
    this.generateTokenProvider = generateTokenProvider
  }
  async execute(userId: string) {
    const expiresIn = dayjs().add(15, 'days').unix()

    const refreshToken = await prisma.refreshToken.create({
      data: {
        userId,
        expiresIn
      }
    })
    return refreshToken
  }
}

export { GenerateRefreshToken }
