import { createTheme } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: '#ffffff'
    },
    secondary: {
      main: blueGrey[200],
      dark: blueGrey[400],
      light: blueGrey[100],
      contrastText: '#ffffff'
    },
    text: {
      primary: '#ffffff'
    },
    background: {
      default: '#202124',
      paper: '#303134'
    }
  },
  typography: {
    allVariants: {
      color: 'white'
    }
  }
})
