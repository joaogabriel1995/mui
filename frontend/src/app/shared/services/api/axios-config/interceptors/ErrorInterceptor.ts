import { AxiosError } from 'axios'
import { AuthService } from '../../../../services/api/index'

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de conexão'))
  }
  if (error.response?.status === 403) {
    return Promise.reject(new Error('Token Invalido'))
  }

  return Promise.reject(error)
}
