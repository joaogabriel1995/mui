import { Api } from '../axios-config'

export interface IListProduct {
  id: string
  name: string
  costPrice: string
  taxation: string
  sku: string
  created_at: string
  userId: number
}

type TProduct = {
  data: IListProduct[]
}

const getAllProducts = async (currentPage = ''): Promise<TProduct | Error> => {
  try {
    const urlRelative = `/products?&page=${currentPage}`
    const { data } = await Api.get(urlRelative)
    if (data) {
      return {
        data
      }
    }
    return new Error('Error aos listar produtos')
  } catch (error) {
    console.log(error)
    return new Error(
      (error as { message: string }).message || 'Error aos listar produtros'
    )
  }
}

const deleteProduct = async (id: string): Promise<IListProduct | Error> => {
  try {
    const urlRelative = `/product/?del=${id}`
    console.log(urlRelative)
    const { data } = await Api.delete(urlRelative)
    return data
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Error ao delear produtros'
    )
  }
}

const getProductById = async (id: string): Promise<IListProduct | Error> => {
  try {
    const urlRelative = `/products/${id}`
    const { data } = await Api.get(urlRelative)
    return data
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Error ao listar produto'
    )
  }
}

export const ProducService = {
  getAllProducts,
  deleteProduct,
  getProductById
}
