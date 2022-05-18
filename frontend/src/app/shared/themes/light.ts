import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6c757d',
      dark: '#212529',
      light: '#f8f9fa',
      contrastText: '#000000'
    },
    secondary: {
      main: grey[300],
      dark: grey[400],
      light: grey[200],
      contrastText: '#000000'
    },
    text: {
      primary: grey[700]
    },
    background: {
      default: '#e9ecef',
      paper: '#f8f9fa'
    }
  }
})
