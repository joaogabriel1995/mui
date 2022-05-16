import { Navigate, Route, Routes } from 'react-router'
import { Button } from '@mui/material'
import { useAppThemeContext } from '../shared/context'

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext()
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            {' '}
            Teste
          </Button>
        }
      />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
