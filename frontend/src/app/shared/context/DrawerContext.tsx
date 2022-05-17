import { createContext, useCallback, useContext, useState } from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
}

interface IDrawerContextProps {
  children: React.ReactNode
}

export const useAppDrawerContext = () => {
  return useContext(DrawerContext)
}

const DrawerContext = createContext<IDrawerContextData>(
  {} as IDrawerContextData
)

export const DrawerProvider: React.FC<IDrawerContextProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, [])
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}
