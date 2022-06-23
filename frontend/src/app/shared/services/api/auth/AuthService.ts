import { Api } from '../axios-config'

export interface IAuth {
  acess_token: string
  refresh_token: string
}

export interface IRefresh {
  acessToken: string
}

const auth = async (
  email: string,
  password: string
): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/login', {
      email,
      password
    })
    console.log('Arquivo:authService', data.refreshToken)
    if (data) {
      return { acess_token: data.acessToken, refresh_token: data.refreshToken }
    }
    return new Error('Error no Login')
  } catch (error) {
    //console.log(error)
    return new Error((error as { message: string }).message || 'Error no Login')
  }
}

const refreshToken = async (id: string): Promise<IRefresh | Error> => {
  try {
    const { data } = await Api.post('/refresh-token', {
      refresh_token: id
    })
    if (data) {
      return data.token
    }
  } catch (error) {
    console.log(error)
    return new Error((error as { message: string }).message || 'Error no Login')
  }
}

export const AuthService = {
  auth,
  refreshToken
}
