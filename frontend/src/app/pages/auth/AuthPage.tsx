import { Box, ThemeProvider, useTheme } from '@mui/system'
import { LightTheme } from '../../shared/themes/index'


export const AuthPage = () => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Box> </Box>
    </ThemeProvider>
  )
}
