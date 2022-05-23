import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  FerramentasDelistagem,
  FerramentasDeDetalhe
} from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { UserService } from '../../shared/services/api'

export const Usuarios = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const busca = useMemo(() => {
    return searchParams.get('name') || ''
  }, [searchParams])
  useEffect(() => {
    UserService.getAll(busca).then(result => {
      if (result instanceof Error) {
        alert(result.message)
        return
      }
      console.log(result)
    })
  }, [busca])

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
    ></LayoutBaseDePagina>
  )
}
