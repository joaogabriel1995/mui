import { Api } from '../axios-config'

interface IAuth {
  acessToken: string
}

const auth = async (
  email: string,
  password: string
): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/products', { data: { email, password } })
    if (data) {
      return data
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
