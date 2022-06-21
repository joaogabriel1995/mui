import { User } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { IFindManyUserDTO } from '../../useCases/findManyUser/FindManyUserDTO'
import { IFindManyUserRepository } from '../IFindManyUserRepository'

export class FindManyUserRepository implements IFindManyUserRepository {
  async FindManyUser(
    listPerPage: number,
    currentPage: string
  ): Promise<User[] | null> {
    const intCurrentPage = Number(currentPage)
    const offset = (intCurrentPage - 1) * listPerPage
    const UserList = await prisma.user.findMany({
      skip: offset,
      take: listPerPage
    })
    return UserList
  }
  async FindManyUserSearch(searchName: string): Promise<User[] | null> {
    const UserListQuery = await prisma.user.findMany({
      where: { name: { contains: searchName } }
    })
    return UserListQuery
  }
}
