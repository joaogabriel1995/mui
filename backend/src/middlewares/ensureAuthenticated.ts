import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization
  console.log('Aqui ', authToken)

  if (!authToken) {
    console.log('Aqui  !authToken', authToken)
    return response.status(401).json({
      message: 'Token in missing'
    })
  }
  const [, token] = authToken.split(' ')
  try {
    verify(token, 'd4725c5b-fca7-44f4-b269-5c1f513983a5')
    return next()
  } catch (err) {
    return response.status(403).json({
      message: 'Token invalid'
    })
  }
}
