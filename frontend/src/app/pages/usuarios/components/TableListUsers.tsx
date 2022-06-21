import {
  LinearProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow
} from '@mui/material'
import { Fragment, useMemo } from 'react'
import { Enviroment } from '../../../shared/environment'
import { IListUser } from '../../../shared/services/api'
import { useSearchParams } from 'react-router-dom'

interface ITableListagem {
  columnsName: Array<string>
  Loading: boolean
  name: string
  data: IListUser[]
  page: number
}

export const TableListagemUsers: React.FC<ITableListagem> = ({
  columnsName,
  data,
  Loading,
  name,
  page
}) => {
  // const Value = useMemo(() => {
  //   const tablerow = []

  //   data.forEach((row, line) => {
  //     const tablecell = []
  //     console.log(row)
  //     for (let i in row) {
  //       tablecell.push(<TableCell key={i}>{row[i]}</TableCell>)
  //     }
  //     tablerow.push(<TableRow key={line}>{tablecell}</TableRow>)
  //   })
  //   return tablerow
  // }, [data])
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <Fragment>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ margin: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columnsName.map((row, i) => (
                <TableCell key={row}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name} </TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {data.length === 0 && !Loading && (
            <caption> {Enviroment.EMPTYLIST}</caption>
          )}

          <TableFooter>
            {Loading && (
              <TableRow>
                <TableCell colSpan={columnsName.length}>
                  <LinearProgress variant="indeterminate" />
                </TableCell>
              </TableRow>
            )}

            {
              <TableRow>
                <TableCell colSpan={columnsName.length}>
                  <Pagination
                    count={5}
                    page={page}
                    onChange={(e, newPage) => {
                      setSearchParams(
                        { name, page: newPage.toString() },
                        { replace: true }
                      )
                    }}
                  ></Pagination>
                </TableCell>
              </TableRow>
            }
          </TableFooter>
        </Table>
      </TableContainer>
    </Fragment>
  )
}
