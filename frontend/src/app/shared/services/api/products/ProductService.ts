import { Api } from '../axios-config'

export interface IListProduct {
  id: string
  name: string
  costPrice: string
  imposto: string
  sku: string
  created_at: string
  userId: number
}

type TProduct = {
  data: IListProduct[]
}

const getAllProducts = async (): Promise<TProduct | Error> => {
  try {
    const { data } = await Api.get('/products')
    if (data) {
      return {
        data
      }
    }
    return new Error('Error aos listar produtos')
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || 'Error aos listar produtros'
    )
  }
}

export const ProducService = {
  getAllProducts
}
