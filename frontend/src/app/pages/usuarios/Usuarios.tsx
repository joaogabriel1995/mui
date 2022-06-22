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
  const columns_name = ['Id', 'Nome', 'Email']
  const { debounce } = useDeBounce()
  const [searchParams, setSearchParams] = useSearchParams()

  const [rows, setRows] = useState<IListUser[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const busca = useMemo(() => {
    return searchParams.get('name') || ''
  }, [searchParams])

  const page = useMemo(() => {
    return Number(searchParams.get('page') || '1')
  }, [searchParams])

  useEffect(() => {
    debounce(() => {
      UserService.getAll(busca, page.toString()).then(result => {
        setIsLoading(true)
        if (result instanceof Error) {
          alert(result.message)
          setIsLoading(false)
          return
        } else {
          console.log(busca)
          setIsLoading(false)
          setRows(result.ListUser)
        }
      })
    })
  }, [busca, page])

  return (
    <LayoutBaseDePagina
      titulo="Listagem de usuários"
      ferramentaDeListagem={
        <FerramentasDelistagem
          labelButton="Pesquisar"
          changingInputText={text =>
            setSearchParams({ name: text, page: '1' }, { replace: true })
          }
          searchText={busca}
        ></FerramentasDelistagem>
      }
    >
      <TableListagemUsers
        columnsName={columns_name}
        data={rows}
        Loading={isLoading}
        name={busca}
        page={page}
      ></TableListagemUsers>
    </LayoutBaseDePagina>
  )
}
