import axios from 'axios'
import { Enviroment } from '../../../environment'
import { ResponseInterceptor } from './interceptors'
import jwt_decode from 'jwt-decode'
import * as dayjs from 'dayjs'

interface IUser {
  exp: number
  iat: number
  sub: string
}

interface IRefresh {
  expiresIn: number
  id: number
  userId: string
}

const Api = axios.create({
  baseURL: Enviroment.URL_BASE
})

Api.interceptors.request.use(async request => {
  const acessToken = localStorage.getItem('APP_ACCESS_TOKEN')
    ? localStorage.getItem('APP_ACCESS_TOKEN')
    : null

  const refreshToken = localStorage.getItem('REFRESH_TOKEN')
    ? localStorage.getItem('REFRESH_TOKEN')
    : null
  if (!acessToken) {
    return request
  }
  const refreshTokenObject = JSON.parse(refreshToken)
  console.log('Entrei Aqui')
  request.headers = {
    Authorization: `Bearer ${JSON.parse(acessToken)}`,
    Accept: 'application/json'
  }
  const user: IUser = jwt_decode(acessToken)
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
  if (!isExpired) {
    console.log('Expirou', isExpired)
    return request
  }

  const response = await Api.post('/refresh-token', {
    refresh: refreshTokenObject.userId
  })
  console.log('data', response.data)
  localStorage.setItem('APP_ACCESS_TOKEN', JSON.stringify(response.data))
  request.headers = {
    Authorization: `Bearer ${JSON.parse(acessToken)}`,
    Accept: 'application/json'
  }

  return request
})

Api.interceptors.response.use(
  response => ResponseInterceptor(response),
  error => ResponseInterceptor(error)
)

export { Api }
