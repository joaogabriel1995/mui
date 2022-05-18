import { Button, Icon, Paper, TextField, useTheme } from '@mui/material'
import { Box, textAlign, width } from '@mui/system'
import { useAppThemeContext } from '../../context/ThemeContext'

interface IBarraDeFerramentas {
  labelButton: string
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentas> = ({
  labelButton
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
      <TextField
        sx={{
          width: theme.spacing(35)
        }}
        size="small"
        placeholder="Pesquisar..."
      ></TextField>
      <Button
        variant="contained"
        disableElevation
        color={themeName === 'light' ? 'secondary' : 'primary'}
        endIcon={<Icon> add </Icon>}
      >
        {labelButton}
      </Button>
    </Box>
  )
}
