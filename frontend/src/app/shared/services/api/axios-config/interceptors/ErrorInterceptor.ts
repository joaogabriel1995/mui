import { AxiosError } from 'axios'
import { AuthService } from '../../../../services/api/index'

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de conexão'))
  }
  if (error.response?.status === 400) {
    return Promise.reject(new Error('Não foi possivel acessar a api'))
  }

  return Promise.reject(error)
}
