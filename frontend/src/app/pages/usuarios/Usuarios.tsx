import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  FerramentasDelistagem,
  FerramentasDeDetalhe
} from '../../shared/components'
import { useDeBounce } from '../../shared/hooks'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { IListUser, UserService } from '../../shared/services/api'
import { TableListagemUsers } from './components/TableListUsers'

export const Usuarios = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDeBounce()

  const [rows, setRows] = useState<IListUser[]>([])
  const columns_name = ['Id', 'Nome', 'Email', 'CPF']
  const [isLoading, setIsLoading] = useState(true)
  const busca = useMemo(() => {
    return searchParams.get('name') || ''
  }, [searchParams])
  useEffect(() => {
    debounce(() => {
      UserService.getAll(busca).then(result => {
        setIsLoading(true)
        if (result instanceof Error) {
          alert(result.message)
          setIsLoading(false)
          return
        } else {
          console.log(busca)
          setIsLoading(false)
          setRows(result.data)
          console.log(result)
        }
      })
    })
  }, [busca, debounce])

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
      <TableListagemUsers
        columnsName={columns_name}
        data={rows}
        Loading={isLoading}
      ></TableListagemUsers>
    </LayoutBaseDePagina>
  )
}
