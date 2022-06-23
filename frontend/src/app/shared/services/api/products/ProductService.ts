import { Api } from '../axios-config'

export interface IServiceProduct {
  id: string
  name: string
  costPrice: string
  taxation: string
  sku: string
  // created_at: string
  userId: number
}

type TProduct = {
  data: IServiceProduct[]
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

const deleteProduct = async (id: string): Promise<IServiceProduct | Error> => {
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

const getProductById = async (id: string): Promise<IServiceProduct | Error> => {
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

const createProduct = async (
  name: string,
  costPrice: number,
  taxation: number,
  sku: string
  // {name, costPrice, sku, }: Omit<IServiceProduct, 'id' | 'userId'>
): Promise<IServiceProduct | Error> => {
  try {
    const urlRelative = `/product`
    const refreshToken = JSON.parse(localStorage.getItem('REFRESH_TOKEN'))
    const userId = refreshToken.userId.toString()
    console.log(name, costPrice, taxation, sku)

    const { data } = await Api.post(urlRelative, {
      name: name,
      costPrice: Number(costPrice),
      imposto: Number(taxation),
      sku: sku,
      userId: userId
    })
    return data
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Error ao criar produto'
    )
  }
}

export const ProducService = {
  getAllProducts,
  deleteProduct,
  getProductById,
  createProduct
}
