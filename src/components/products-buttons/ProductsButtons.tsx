import React, { FC } from 'react'
import styled from 'styled-components'

import Button from '../base/Button'
import { IProduct } from '../../types'
 
type Props = {
  products: IProduct[]
  buyProductHandler: (id: number) => void
}

const ProductsButtons: FC<Props> = ({ products, buyProductHandler }) => {
  return (
    <ButtonsStyled>
      {products.map(product => (
        <Button 
          onClick={() => {buyProductHandler(product.id)}}
          key={product.id}
          color="black" 
          padding={0}  
          br={50} 
          bg="#FF9F46" 
          w={70} 
          h={70} 
          fz={28}
        >
          {product.id}
        </Button>
      ))}
    </ButtonsStyled>
  )
}

const ButtonsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`

export default ProductsButtons