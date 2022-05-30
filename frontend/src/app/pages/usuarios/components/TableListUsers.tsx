import {
  LinearProgress,
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

interface ITableListagem {
  columnsName: Array<string>
  Loading: boolean
  data: IListUser[]
}

export const TableListagemUsers: React.FC<ITableListagem> = ({
  columnsName,
  data,
  Loading
}) => {
  const Value = useMemo(() => {
    const tablerow = []

    data.forEach((row, line) => {
      const tablecell = []
      console.log(row)
      for (let i in row) {
        tablecell.push(<TableCell key={i}>{row[i]}</TableCell>)
      }
      tablerow.push(<TableRow key={line}>{tablecell}</TableRow>)
    })
    return tablerow
  }, [data])

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
          <TableBody>{Value.map((row, i) => row)}</TableBody>
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
          </TableFooter>
        </Table>
      </TableContainer>
    </Fragment>
  )
}
