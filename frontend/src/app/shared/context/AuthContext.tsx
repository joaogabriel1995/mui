import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
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

  useEffect(() => {
    const acessToken = localStorage.getItem('APP_ACCESS_TOKEN')
    if (acessToken) {
      setAcessToken(JSON.parse(acessToken))
    } else {
      setAcessToken(undefined)
    }
  }, [])

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      const result = await AuthService.auth(email, password)
      if (result instanceof Error) {
        return result.message
      } else {
        
        localStorage.setItem(
          'APP_ACCESS_TOKEN',
          JSON.stringify(result.acessToken)
        )
        setAcessToken(result.acessToken)
      }
    },
    [acessToken]
  )
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
