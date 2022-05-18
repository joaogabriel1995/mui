import { createContext, useCallback, useContext, useState } from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean
  drawerOptions: IDrawerOption[]
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
  toggleDrawerOpen: () => void
}

interface IDrawerContextProps {
  children: React.ReactNode
}

interface IDrawerOption {
  icon: string
  path: string
  label: string
}

export const useAppDrawerContext = () => {
  return useContext(DrawerContext)
}

const DrawerContext = createContext<IDrawerContextData>(
  {} as IDrawerContextData
)


export const DrawerProvider: React.FC<IDrawerContextProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOption] = useState<IDrawerOption[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, [])
  const handlesetDrawerOption = useCallback(
    (newDrawerOption: IDrawerOption[]) => {
      setDrawerOption(newDrawerOption)
    },
    []
  )
  return (
    <DrawerContext.Provider
      value={{
        drawerOptions,
        isDrawerOpen,
        toggleDrawerOpen,
        setDrawerOptions: handlesetDrawerOption
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
