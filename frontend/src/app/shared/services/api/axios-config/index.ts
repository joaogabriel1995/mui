import axios from 'axios'
import { Enviroment } from '../../../environment'
import { ResponseInterceptor } from './interceptors'

const Api = axios.create({
  baseURL: Enviroment.URL_BASE
})

Api.interceptors.response.use(
  response => ResponseInterceptor(response),
  error => ResponseInterceptor(error)
)

export { Api }
