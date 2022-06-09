import { sign } from 'jsonwebtoken'

class GenerateTokenProvider {
  async execute(userid: string) {
    const acessToken = sign({}, 'd4725c5b-fca7-44f4-b269-5c1f513983a5', {
      subject: userid,
      expiresIn: '30s'
    })
    return acessToken
  }
}

export { GenerateTokenProvider }
