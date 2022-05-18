import { BarraDeFerramentas } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'

export const Cadastro = () => {
  return (
    <LayoutBaseDePagina
      titulo="Pagina Inicial"
      barraDeFerramentas={
        <BarraDeFerramentas labelButton="Novo"></BarraDeFerramentas>
      }
    ></LayoutBaseDePagina>
  )
}
