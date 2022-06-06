import { sign } from 'jsonwebtoken'

class GenerateTokenProvider {
  async execute(id: string) {
    const token = sign({}, 'd4725c5b-fca7-44f4-b269-5c1f513983a5', {
      subject: id,
      expiresIn: '4s'
    })
    return token
  }
}

export { GenerateTokenProvider }
