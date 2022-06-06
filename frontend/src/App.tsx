import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes'
import { MenuLateral, Login } from './app/shared/components'
import {
  DrawerProvider,
  AppThemeContext,
  AuthProvider
} from './app/shared/context'

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeContext>
        <Login>


        <DrawerProvider>
          <BrowserRouter>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>
          </BrowserRouter>
        </DrawerProvider>
        </Login>
      </AppThemeContext>
    </AuthProvider>
  )
}
