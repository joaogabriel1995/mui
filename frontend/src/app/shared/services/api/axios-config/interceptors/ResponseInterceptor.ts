import axios, { AxiosResponse } from 'axios'
import { Api } from '..'

export const ResponseInterceptor = (response: AxiosResponse) => {
  return {response},
    error => {
      const status = error.response ? error.response.status : null
      Api.post('/refresh-token')
    }
  )
}
