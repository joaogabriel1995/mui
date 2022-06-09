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
    const refreshToken = localStorage.getItem('REFRESH_TOKEN')

    console.log('useEffect', acessToken)

    if (acessToken) {
      setAcessToken(JSON.parse(acessToken))
    } else {
      setAcessToken(undefined)
    }
  }, [])

  const handleLogin = useCallback(async (email: string, password: string) => {
    const auth = await AuthService.auth(email, password)
    if (auth instanceof Error) {
      return auth.message
    } else {
      console.log('APP_ACCESS_TOKEN ', auth.acess_token)
      localStorage.setItem('APP_ACCESS_TOKEN', auth.acess_token)
      localStorage.setItem('REFRESH_TOKEN', JSON.stringify(auth.refresh_token))

      setRefreshToken(auth.refresh_token)
      setAcessToken(auth.acess_token)
    }
  }, [])
  const handleLogout = useCallback(() => {
    localStorage.removeItem('APP_ACCESS_TOKEN')
    localStorage.removeItem('REFRESH_TOKEN')
    setRefreshToken(undefined)

    setAcessToken(undefined)
  }, [])

  const isAuthenticated = useMemo(() => !!acessToken, [acessToken])
  console.log(isAuthenticated)

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
