import { Box, useTheme } from '@mui/system'
import {
  Button,
  Divider,
  Icon,
  Paper,
  Typography,
  useMediaQuery
} from '@mui/material'
import { useAppThemeContext } from '../../context'
interface IFerramentaDeDetalhe {
  textButtonSave?: string
  textButtonDel?: string
  textButtonNew?: string
  textButtonBack?: string

  visibleButtonSave?: boolean
  visibleButtonDel?: boolean
  visibleButtonNew?: boolean
  visibleButtonBack?: boolean

  onClickSave?: () => void
  onClickDel?: () => void
  onClickNew?: () => void
  onClickBack?: () => void
}

export const FerramentasDeDetalhe: React.FC<IFerramentaDeDetalhe> = ({
  textButtonSave = 'SALVAR',
  textButtonDel = 'APAGAR',
  textButtonNew = 'NOVO',
  textButtonBack = 'VOLTAR',
  visibleButtonSave = true,
  visibleButtonDel = true,
  visibleButtonNew = true,
  visibleButtonBack = true,
  onClickSave,
  onClickDel,
  onClickNew,
  onClickBack
}) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const { themeName } = useAppThemeContext()
  return (
    <Box
      height={theme.spacing(5)}
      component={Paper}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      gap={1}
    >
      {visibleButtonSave && (
        <Button
          variant="contained"
          disableElevation
          color={themeName === 'light' ? 'secondary' : 'primary'}
          startIcon={<Icon> save </Icon>}
          onClick={onClickSave}
        >
          {!smDown && (
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {textButtonSave}
            </Typography>
          )}
        </Button>
      )}
      {visibleButtonDel && (
        <Button
          variant="contained"
          disableElevation
          color={themeName === 'light' ? 'secondary' : 'primary'}
          startIcon={<Icon> delete </Icon>}
          onClick={onClickDel}
        >
          {!smDown && (
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {textButtonDel}
            </Typography>
          )}
        </Button>
      )}
      {visibleButtonNew && (
        <Button
          variant="contained"
          disableElevation
          color={themeName === 'light' ? 'secondary' : 'primary'}
          startIcon={<Icon> add </Icon>}
          onClick={onClickNew}
        >
          {!smDown && (
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {textButtonNew}
            </Typography>
          )}
        </Button>
      )}
      {visibleButtonBack &&
        (visibleButtonDel || visibleButtonSave || visibleButtonNew) && (
          <Divider variant="middle" orientation="vertical"></Divider>
        )}
      {visibleButtonBack && (
        <Button
          variant="contained"
          disableElevation
          color={themeName === 'light' ? 'secondary' : 'primary'}
          startIcon={<Icon> arrow_back </Icon>}
          onClick={onClickBack}
        >
          {!smDown && (
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {textButtonBack}
            </Typography>
          )}
        </Button>
      )}
    </Box>
  )
}
