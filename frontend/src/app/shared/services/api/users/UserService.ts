import { Api } from '../axios-config'

export interface IListUser {
  id: number
  name: string
  email: string
  cpf: string
}
type TUsertowithtotalcount = {
  data: IListUser[]
}

const getAll = async (filter = ''): Promise<TUsertowithtotalcount | Error> => {
  try {
    const urlRelative = `/user?name=${filter}`
    const data = await Api.get(urlRelative)
    console.log(data)
    if (data) {
      return data
    }
    return new Error('Erro ao listar os registros')
  } catch (error) {
    console.log(error)
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros'
    )
  }
}

const getById = async (): Promise<any> => {}

const create = async (): Promise<any> => {}

const updateById = async (): Promise<any> => {}
const deleteById = async (): Promise<any> => {}
export const UserService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}
