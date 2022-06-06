import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { AuthService } from '../services/api/index'

interface IAuthContextData {
  logout: () => void
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<string | void>
}
interface IAuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [acessToken, setAcessToken] = useState<string | undefined>()
  const [refreshToken, setRefreshToken] = useState<string | undefined>()

  useEffect(() => {
    const acessToken = localStorage.getItem('APP_ACCESS_TOKEN')

    console.log('useEffect', acessToken)

    if (acessToken) {
      setAcessToken(JSON.parse(acessToken))
    } else {
      setAcessToken(undefined)
    }
  }, [])

  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth(email, password)
    if (result instanceof Error) {
      return result.message
    } else {
      console.log('APP_ACCESS_TOKEN ', result.acessToken)
      localStorage.setItem(
        'APP_ACCESS_TOKEN',
        JSON.stringify(result.acessToken)
      )
      localStorage.setItem('REFRESH_TOKEN', JSON.stringify(result.refreshToken))

      setAcessToken(result.acessToken)
      setRefreshToken(result.refreshToken)
    }
  }, [])
  const handleLogout = useCallback(() => {
    localStorage.removeItem('APP_ACCESS_TOKEN')
    setAcessToken(undefined)
  }, [])

  const isAuthenticated = useMemo(() => !!acessToken, [acessToken])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
