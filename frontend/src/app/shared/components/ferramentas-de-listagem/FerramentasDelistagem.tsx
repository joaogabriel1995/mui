import { Button, Icon, Paper, TextField, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { useAppThemeContext } from '../../context/ThemeContext'

interface IFerramentasDelistagem {
  labelButton: string
  searchText?: string
  showSearchInput?: boolean
  changingInputText?: (newText: string) => void
  onClickSearch?: () => void
}

export const FerramentasDelistagem: React.FC<IFerramentasDelistagem> = ({
  labelButton,
  searchText = '',
  showSearchInput = true,
  changingInputText,
  onClickSearch
}) => {
  const theme = useTheme()
  const { themeName } = useAppThemeContext()

  return (
    <Box
      gap={1}
      height={theme.spacing(5)}
      display="flex"
      alignItems="center"
      marginX={1}
      padding={1}
      paddingX={2}
      component={Paper}
      justifyContent="space-between"
    >
      {showSearchInput && (
        <TextField
          sx={{
            width: theme.spacing(35)
          }}
          size="small"
          value={searchText}
          placeholder="Pesquisar..."
          onChange={e => changingInputText?.(e.target.value)}
        ></TextField>
      )}
      <Button
        variant="contained"
        disableElevation
        color={themeName === 'light' ? 'secondary' : 'primary'}
        endIcon={<Icon> searchIcon </Icon>}
        onChange={() => onClickSearch()}
      >
        {labelButton}
      </Button>
    </Box>
  )
}
