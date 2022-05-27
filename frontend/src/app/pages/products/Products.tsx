import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { TableListProduct } from './components/TableListProduct'
import { IListProduct, ProducService } from '../../shared/services/api'
import { useEffect, useState } from 'react'

export const Products = () => {
  const columns_name = ['Nome', 'Preço de Custo', 'Imposto', 'sku']
  const [rows, setRows] = useState<IListProduct[]>([])

  useEffect(() => {
    ProducService.getAllProducts().then(result => {
      if (result instanceof Error) {
        alert(result.message)
        return
      } else {
        setRows(result.data)
        console.log(result)
      }
    })
  }, [])

  return (
    <LayoutBaseDePagina
      titulo="Produtos Cadastrados"
      ferramentaDeDetalhes={<FerramentasDeDetalhe></FerramentasDeDetalhe>}
    >
      <TableListProduct
        columnsName={columns_name}
        data={rows}
      ></TableListProduct>
    </LayoutBaseDePagina>
  )
}
