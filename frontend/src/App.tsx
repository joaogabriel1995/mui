import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes'
import { MenuLateral } from './app/shared/components'
import { DrawerProvider, AppThemeContext } from './app/shared/context'

export const App = () => {
  return (
    <AppThemeContext>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeContext>
  )
}
