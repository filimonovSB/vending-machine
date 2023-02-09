import React, { FC } from 'react'
import styled from 'styled-components'

<<<<<<< HEAD
import Button from '../UI/Button'
import { IProduct } from '../../data/data'
 
interface ProductsButtons{
    products:Array<IProduct>,
=======
import { product } from '../../App'
import Button from '../UI/Button'
 


interface ProductsButtons{
    products:Array<product>,
>>>>>>> parent of 171ccdf (collision)
    handleByeProduct:(id:number)  => void
}

const ProductsButtons:FC<ProductsButtons> = ({products, handleByeProduct}) => {

<<<<<<< HEAD
  return (
    <ButtonsStyled className="">
      {products.map(product=>(
        <Button key={product.id}
          color="black" padding={0}  br={50} bg="#FF9F46" w={70} h={70} fz={28}
          onClick={()=>{handleByeProduct(product.id)}}>
          {product.id}
        </Button>
      ))
      }
    </ButtonsStyled>
=======


  return (
   <ButtonsStyled className="">
        {products.map(product=>(
            <Button key={product.id}
            color="black" padding={0}  br={50} bg="#FF9F46" w={70} h={70} fz={28}
            onClick={()=>{handleByeProduct(product.id)}}>
             {product.id}
            </Button>
        ))}
   </ButtonsStyled>
>>>>>>> parent of 171ccdf (collision)
  )
}

export default ProductsButtons

const ButtonsStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:5px;
`