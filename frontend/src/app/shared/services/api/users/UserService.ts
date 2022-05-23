import { Api } from '../axios-config'

interface IListUser {
  id: number
  name: string
  email: string
  cpf: string
}
type TUsertowithtotalcount = {
  data: IListUser[]
}

const getAll = async (
  filter = 'undefined'
): Promise<TUsertowithtotalcount | Error> => {
  try {
    const { data } = await Api.get(`/user?name=${filter}`)
    if (data) {
      return {
        data
      }
    }
    return new Error('Erro ao listar os registros')
  } catch (error) {
    console.error(error)
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
