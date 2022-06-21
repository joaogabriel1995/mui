import axios from 'axios'
import { Enviroment } from '../../../environment'
import { AuthService } from '../auth/AuthService'

// interface IUser {
//   exp: number
//   iat: number
//   sub: string
// }

// interface IRefresh {
//   expiresIn: number
//   id: number
//   userId: string
// }

const Api = axios.create({
  baseURL: Enviroment.URL_BASE
})

Api.interceptors.request.use(async request => {
  try {
    const acessToken = localStorage.getItem('APP_ACCESS_TOKEN')
      ? localStorage.getItem('APP_ACCESS_TOKEN')
      : null

    if (!acessToken) {
      return request
    }
    // const user: IUser = jwt_decode(acessToken)
    // const ExpiresIn = dayjs().isAfter(dayjs.unix(user.exp))

    request.headers = {
      Authorization: `Bearer ${acessToken}`,
      Accept: 'application/json'
    }

    return request
  } catch (error) {
    console.log(error)
    return new Error((error as { message: string }).message || 'Error refresh')
  }
})

Api.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    try {
      const status = error.response ? error.response.status : null
      const prevRequest = error.config
      if (status === 403) {
        const refreshToken = JSON.parse(localStorage.getItem('REFRESH_TOKEN'))

        console.log('refresh: ', refreshToken)
        const token = await AuthService.refreshToken(refreshToken.id)

        localStorage.setItem('APP_ACCESS_TOKEN', JSON.stringify(token))
        return Api(prevRequest)
      }
    } catch (Error) {}
  }
)

export { Api }
