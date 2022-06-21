import { IFindManyUserRepository } from '../../repositories/IFindManyUserRepository'
import { IFindManyUserDTO } from './FindManyUserDTO'

export class FindManyUserUseCase {
  private ifindManyUserRepository: IFindManyUserRepository
  constructor(ifindManyUserRepository: IFindManyUserRepository) {
    this.ifindManyUserRepository = ifindManyUserRepository
  }
  async execute({ paramsSearchName, currentPage }: IFindManyUserDTO) {
    if (paramsSearchName === 'undefined' || paramsSearchName === '') {
      console.log(currentPage)
      const listPerPage = 5
      const ListUser = await this.ifindManyUserRepository.FindManyUser(
        listPerPage,
        currentPage
      )
      console.log('FindManyUserUseCase:', ListUser)
      if (!ListUser) {
        throw new Error('Nenhum Usuario encontrado.')
      }
      return ListUser
    }
    if (paramsSearchName !== 'undefined') {
      const ListUserQuery = this.ifindManyUserRepository.FindManyUserSearch(
        paramsSearchName ? paramsSearchName : ''
      )
      if (!ListUserQuery) {
        throw new Error('Nenhum Usuario com esse nome encontrado.')
      }
      return ListUserQuery
    }
  }
}
