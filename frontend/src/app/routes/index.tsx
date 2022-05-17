import { Navigate, Route, Routes } from 'react-router'
import { Button, Icon, useMediaQuery, useTheme } from '@mui/material'
import { useAppDrawerContext, useAppThemeContext } from '../shared/context'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" />
      <Route path="/register" />
      <Route path="/products" />
      <Route path="/ad" />
      <Route path="/statistics" />
      <Route path="*" />
    </Routes>
  )
}
