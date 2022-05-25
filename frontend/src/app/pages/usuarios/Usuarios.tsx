import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  FerramentasDelistagem,
  FerramentasDeDetalhe
} from '../../shared/components'
import { useDeBounce } from '../../shared/hooks'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { IListUser, UserService } from '../../shared/services/api'
import { TableListagem } from './components/TableListagem'

export const Usuarios = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDeBounce()

  const [rows, setRows] = useState<IListUser[]>([])
  const columns_name = ['Ação', 'Nome', 'Email', 'CPF']

  const busca = useMemo(() => {
    return searchParams.get('name') || ''
  }, [searchParams])
  useEffect(() => {
    debounce(() => {
      UserService.getAll(busca).then(result => {
        if (result instanceof Error) {
          alert(result.message)
          return
        }
        setRows(result.data)
        console.log(result)
      })
    })
  }, [debounce, busca])

  return (
    <LayoutBaseDePagina
      ferramentaDeDetalhes={<FerramentasDeDetalhe></FerramentasDeDetalhe>}
      titulo="Listagem de usuários"
      ferramentaDeListagem={
        <FerramentasDelistagem
          labelButton="Pesquisar"
          changingInputText={text =>
            setSearchParams({ name: text }, { replace: true })
          }
          searchText={busca}
        ></FerramentasDelistagem>
      }
    >
      <TableListagem columnsName={columns_name} data={rows}></TableListagem>
    </LayoutBaseDePagina>
  )
}
