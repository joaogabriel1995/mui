import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Cadastro } from '../pages'
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
        path: '/register',
        label: 'Cadastro',
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
      <Route path="/home" />
      <Route path="/register" element={<Cadastro />} />
      <Route path="/products" />
      <Route path="/ad" />
      <Route path="/statistics" />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
