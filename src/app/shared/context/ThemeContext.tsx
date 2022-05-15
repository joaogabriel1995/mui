import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { ThemeProvider } from '@mui/material'
import { DarkTheme, LightTheme } from './../themes'
import { Box } from '@mui/system'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

export interface IThemeContextProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

export const AppThemeContext: React.FC<IThemeContextProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')
  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => (oldThemeName === 'light' ? 'dark' : 'light'))
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme
    return DarkTheme
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
