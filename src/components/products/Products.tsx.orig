import React, { FC } from 'react'
import styled from 'styled-components'

import Product from './product/Product'

import { product } from '../../App'





interface ProductsProps{
  products: Array<product>
}

const Products:FC<ProductsProps> = ({products}) => {
  return (
    <ProductsStyled>
      {products.map(product=>
        <Product id={product.id} name={product.name} price={product.price} amount={product.amount} key={product.name}/>
      )}
    </ProductsStyled>
  )
}

export default Products
const ProductsStyled = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px;
  border: 10px solid #000000;
  background-color: white;
  height: 90vh;
`