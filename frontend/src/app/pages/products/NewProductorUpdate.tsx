import { LinearProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { ProducService } from '../../shared/services/api'
import { Form } from '@unform/web'
import { VTextField } from '../../shared/forms'

export const NewProductorUpdate: React.FC = () => {
  const { id = 'new' } = useParams<'id'>()
  const [title, setTitle] = useState<string>('')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = (id: string) => {
    if (window.confirm('Realmente deseja apagar?')) {
      ProducService.deleteProduct(id).then(result => {
        if (result instanceof Error) {
          alert(result.message)
        } else {
          alert('Registro apagado com sucesso!')
          navigate('/products')
        }
      })
    }
  }

  useEffect(() => {
    if (id === 'new') {
      setTitle('Adicionar Novo Produto')
    } else {
      setIsLoading(true)
      ProducService.getProductById(id).then(result => {
        setIsLoading(false)
        if (result instanceof Error) {
          alert(result.message)
          navigate('/products')
        } else {
          console.log(result)
        }
      })
      setTitle('Editar Produto')
    }
  }, [id])
  return (
    <LayoutBaseDePagina
      titulo={title}
      ferramentaDeDetalhes={
        <FerramentasDeDetalhe
          visibleButtonDel={id !== 'new'}
          onClickBack={() => {
            navigate('/products')
          }}
          onClickNew={() => {
            navigate('/product/new')
          }}
          onClickSave={() => {
            navigate('/products')
          }}
          onClickDel={() => handleDelete(id)}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}
      <Form onSubmit={dados => console.log(dados)}>
        <VTextField name="ProductName"></VTextField>
        <button type="submit">Submit</button>
      </Form>
    </LayoutBaseDePagina>
  )
}
