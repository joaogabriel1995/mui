import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { display, useTheme } from '@mui/system'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  FerramentasDelistagem,
  FerramentasDeDetalhe
} from '../../shared/components'
import { useDeBounce } from '../../shared/hooks'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { IListUser, UserService } from '../../shared/services/api'

export const Usuarios = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDeBounce()
  const theme = useTheme()

  const [rows, setRows] = useState<IListUser[]>([])

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
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ margin: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome Completo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>CPF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow>
                <TableCell>Teste</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.cpf}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  )
}
