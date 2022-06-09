import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

class AuthenticateUserController {
  private authenticateUserUseCase: AuthenticateUserUseCase
  constructor(authenticateUserUseCase: AuthenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase
  }

  async handle(request: Request, response: Response) {
    const { email, password } = request.body
    try {
      const { acessToken, refreshToken } =
        await this.authenticateUserUseCase.execute({
          email,
          password
        })
      return response.status(200).json({ acessToken, refreshToken })
    } catch (err) {
      return response.status(400).json('Erro')
    }
  }
}

export { AuthenticateUserController }
