import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#6c757d',
      dark: '#212529',
      light: '#f8f9fa',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
      dark: '#eeeeee',
      light: '#125215',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#ffffff'
    },
    background: {
      default: '#e9ecef',
      paper: '#f8f9fa'
    }
  }
})
