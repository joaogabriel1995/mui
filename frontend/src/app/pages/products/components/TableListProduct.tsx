import {
  Icon,
  IconButton,
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
import { Fragment } from 'react'
import { IListProduct } from '../../../shared/services/api'
import { useSearchParams } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditSharpIcon from '@mui/icons-material/EditSharp'
interface ITableListagem {
  columnsName: Array<string>
  data: IListProduct[]
  page: number
  handleDelete: (id: string) => void
}

export const TableListProduct: React.FC<ITableListagem> = ({
  columnsName,
  data,
  page,
  handleDelete
}) => {
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
                <TableCell key={i}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell>
                  <IconButton size="small">
                    <DeleteIcon
                      fontSize="small"
                      onClick={() => handleDelete(row.id)}
                    />
                  </IconButton>
                  <IconButton size="small">
                    <EditSharpIcon fontSize="small" />
                  </IconButton>{' '}
                </TableCell>
                <TableCell>{row.name} </TableCell>
                <TableCell>{row.costPrice}</TableCell>
                <TableCell>{row.taxation}</TableCell>
                <TableCell>{row.costPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            {
              <TableRow>
                <TableCell colSpan={columnsName.length}>
                  <Pagination
                    count={5}
                    page={page}
                    onChange={(e, newPage) => {
                      setSearchParams(
                        { page: newPage.toString() },
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
