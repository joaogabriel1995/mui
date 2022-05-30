import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Usuarios, Products, AuthPage } from '../pages'
import { useAppDrawerContext } from '../shared/context'

export const AppRoutes = () => {
  const { setDrawerOptions } = useAppDrawerContext()
  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Pagina Inicial',
        path: '/home'
      },
      {
        path: '/user',
        label: 'Usuários',
        icon: 'personIcon'
      },
      {
        icon: 'inventoryIcon',
        label: 'Produtos',
        path: '/products'
      },
      {
        icon: 'moneyIcon',
        label: 'Anúncios',
        path: '/ad'
      },
      {
        icon: 'analyticsIcon',
        label: 'Estatísticas',
        path: '/statistics'
      }
    ])
  }, [setDrawerOptions])
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" />
      <Route path="/user" element={<Usuarios />} />
      <Route path="/products" element={<Products />} />
      <Route path="/ad" />
      <Route path="/statistics" />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
