import React, { FC } from 'react'
import styled from 'styled-components'

import { product } from '../../App'
import Button from '../UI/Button'


interface ProductsButtons{
    products:Array<product>,
}

const ProductsButtons:FC<ProductsButtons> = ({products}) => {
  return (
   <ButtonsStyled className="">
        {products.map(product=>(
            <Button color="black" padding={0}  br={50} bg="#FF9F46" w={70} h={70} fz={28}>{product.id} </Button>
        ))}
   </ButtonsStyled>
  )
}

export default ProductsButtons

const ButtonsStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
`