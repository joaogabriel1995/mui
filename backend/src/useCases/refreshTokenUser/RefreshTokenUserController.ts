import { Request, Response } from 'express'
import { RefreshTokenUserUseCase } from './RefreshTokenUserUsecase'

class RefreshTokenUserControler {
  constructor(private refreshTokenUserUseCase: RefreshTokenUserUseCase) {}
  async handle(request: Request, response: Response) {
    const { refresh_token } = request.body
    try {
      const token = await this.refreshTokenUserUseCase.execute(refresh_token)
      return response.status(200).json({ token })
    } catch {
      return response.status(401).json('Error')
    }
  }
}

export { RefreshTokenUserControler }
