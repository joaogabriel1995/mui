import { Api } from '../axios-config'

export interface IAuth {
  acessToken: string
  refreshToken: string
}

const auth = async (
  email: string,
  password: string
): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/login', { email, password })
    if (data) {
      return { acessToken: data.token, refreshToken: data.refreshToken }
    }
    return new Error('Error no Login')
  } catch (error) {
    console.error(error)
    return new Error((error as { message: string }).message || 'Error no Login')
  }
}

export const AuthService = {
  auth
}
