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
import { IListProduct } from '../../../shared/services/api'

interface ITableListagem {
  columnsName: Array<string>
  data: IListProduct[]
}

export const TableListProduct: React.FC<ITableListagem> = ({
  columnsName,
  data
}) => {
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
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.name} </TableCell>
                <TableCell>{row.costPrice}</TableCell>
                <TableCell>{row.imposto}</TableCell>
                <TableCell>{row.costPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}
