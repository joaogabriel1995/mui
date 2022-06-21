import { User } from '@prisma/client'

export interface IFindManyUserRepository {
  FindManyUser(listPerPage: number, currentPage: string): Promise<User[] | null>
  FindManyUserSearch(searchName: string): Promise<User[] | null>
}
