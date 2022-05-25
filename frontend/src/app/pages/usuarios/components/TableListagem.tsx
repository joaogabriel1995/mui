import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { Fragment, useMemo } from 'react'
import { IListUser } from '../../../shared/services/api'

interface ITableListagem {
  columnsName: Array<string>
  data: IListUser[]
}

export const TableListagem: React.FC<ITableListagem> = ({
  columnsName,
  data
}) => {
  const Value = useMemo(() => {
    const tablerow = []
    data.forEach((row, line) => {
      const tablecell = []
      for (let i in row) {
        tablecell.push(<TableCell key={line}>{row[i]}</TableCell>)
      }
      tablerow.push(<TableRow>{tablecell}</TableRow>)
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
                <TableCell key={i}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{Value.map((row, i) => row)}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}
