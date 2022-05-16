import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes'
import { MenuLateral } from './app/shared/components'
import { AppThemeContext } from './app/shared/context/ThemeContext'

export const App = () => {
  return (
    <AppThemeContext>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeContext>
  )
}
