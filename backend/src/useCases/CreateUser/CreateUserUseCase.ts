import { ICreateUserRepository } from '../../repositories/ICreateUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

class CreateUserUseCase {
  private createRepository: ICreateUserRepository
  constructor(createRepository: ICreateUserRepository) {
    this.createRepository = createRepository
  }

  async execute({ name, email, password }: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.createRepository.userAlreadyExist(email)
    if (userAlreadyExist) {
      throw new Error('Já existe um usuário cadastrado com esse E-mail.')
    }

    const user = await this.createRepository.create(name, email, password)
    return user
  }
}

export { CreateUserUseCase }
