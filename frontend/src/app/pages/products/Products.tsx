import {
  FerramentasDeDetalhe,
  FerramentasDelistagem
} from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { TableListProduct } from './components/TableListProduct'
import { IListProduct, ProducService } from '../../shared/services/api'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const Products = () => {
  const columns_name = ['Ações', 'Nome', 'Preço de Custo', 'Imposto', 'sku']
  const [rows, setRows] = useState<IListProduct[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const navegate = useNavigate()

  const page = useMemo(() => {
    return Number(searchParams.get('page') || '1')
  }, [searchParams])

  useEffect(() => {
    ProducService.getAllProducts(page.toString()).then(result => {
      if (result instanceof Error) {
        alert(result.message)
        return
      } else {
        setRows(result.data)
        console.log(result)
      }
    })
  }, [page])

  const handleDelete = (id: string) => {
    if (window.confirm('Realmente deseja apagar?')) {
      ProducService.deleteProduct(id).then(result => {
        if (result instanceof Error) {
          alert(result.message)
        } else {
          setRows(oldRows => {
            return [...oldRows.filter(oldRow => oldRow.id !== id)]
          })
          alert('Registro apagado com sucesso!')
        }
      })
    }
  }

  return (
    <LayoutBaseDePagina
      titulo="Produtos Cadastrados"
      ferramentaDeListagem={
        <FerramentasDelistagem
          labelButton="Novo"
          onClickSearch={() => navegate('/product/new')}
        ></FerramentasDelistagem>
      }
    >
      <TableListProduct
        page={page}
        columnsName={columns_name}
        data={rows}
        handleDelete={handleDelete}
      ></TableListProduct>
    </LayoutBaseDePagina>
  )
}
