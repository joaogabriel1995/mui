import {
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import { Box } from '@mui/system'
import { useAppDrawerContext } from '../context/DrawerContext'

interface ILayoutBaseDePagina {
  children?: React.ReactNode
  titulo?: string
  ferramentaDeListagem?: React.ReactNode | undefined
  ferramentaDeDetalhes?: React.ReactNode | undefined
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({
  children,
  titulo,
  ferramentaDeListagem,
  ferramentaDeDetalhes
}) => {
  const { toggleDrawerOpen } = useAppDrawerContext()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 4 : mdDown ? 7 : 9)}
      >
        {smDown ? (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        ) : undefined}
        <Typography
          variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {' '}
          {titulo}
        </Typography>
      </Box>
      {ferramentaDeListagem && <Box>{ferramentaDeListagem}</Box>}
      {ferramentaDeDetalhes && <Box>{ferramentaDeDetalhes}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  )
}
