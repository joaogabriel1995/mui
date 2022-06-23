import { Button, LinearProgress } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { IServiceProduct, ProducService } from '../../shared/services/api'
import { Form } from '@unform/web'
import { VTextField } from '../../shared/forms'
import { FormHandles } from '@unform/core'

interface product {
  ProductName: string
  ProductCostPrice: number
  ProductTaxation: number
  ProductSku: string
}

export const NewProductorUpdate: React.FC = () => {
  const { id = 'new' } = useParams<'id'>()
  const [title, setTitle] = useState<string>('')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)

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

  const handleSalve = (data: product) => {
    const { ProductName, ProductCostPrice, ProductTaxation, ProductSku } = data
    console.log(ProductName, ProductCostPrice, ProductTaxation, ProductSku)
    ProducService.createProduct(
      ProductName,
      ProductCostPrice,
      ProductTaxation,
      ProductSku
    ).then(response => console.log(response.name))
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
  }, [id, navigate])
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
            formRef.current?.submitForm()
            navigate('/products')
          }}
          onClickDel={() => handleDelete(id)}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}
      <Form ref={formRef} onSubmit={handleSalve}>
        <VTextField placeholder="Nome" name="ProductName"></VTextField>
        <VTextField
          placeholder="Preço De Custo"
          name="ProductCostPrice"
        ></VTextField>
        <VTextField placeholder="Imposto" name="ProductTaxation"></VTextField>
        <VTextField placeholder="SKU" name="ProductSku"></VTextField>

        <Button type="submit" variant="contained" color="secondary">
          {' '}
          Cadastrar{' '}
        </Button>
      </Form>
    </LayoutBaseDePagina>
  )
}
