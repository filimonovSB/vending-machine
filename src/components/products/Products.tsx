import React, { FC } from 'react'
import styled from 'styled-components'

import Product from './product/Product'

import { IProduct } from '../../types'

type Props = {
  products: IProduct[]
}

const Products: FC<Props> = ({ products }) => {
  return (
    <ProductsStyled>
      {products.map(product =>
        <Product 
          id={product.id} 
          name={product.name} 
          price={product.price} 
          amount={product.amount} 
          key={product.name}
        />
      )}
    </ProductsStyled>
  )
}

const ProductsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 90vh;
  padding: 15px;
  border: 10px solid #000000;
  background-color: white;
`

export default Products