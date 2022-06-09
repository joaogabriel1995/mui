import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    console.log(
      'Arquivo: ensureAuthenticated, info: Token in missing',
      authToken
    )
    return response.status(401).json({
      message: 'Token in missing'
    })
  }
  console.log(' authToken', authToken)
  const [, token] = authToken.split(' ')
  console.log('Arquivo: ensureAuthenticated, info: Token ', token)
  try {
    console.log(verify(token, 'd4725c5b-fca7-44f4-b269-5c1f513983a5'))
    return next()
  } catch (err) {
    return response.status(403).json({
      message: 'Token invalid'
    })
  }
}
