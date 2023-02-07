import React, { FC } from 'react'
import styled from 'styled-components'

import monster from '../../assets/products-images/monstr.png'
import cola from '../../assets/products-images/cola.png'
import water from '../../assets/products-images/water.png'
import bounty from '../../assets/products-images/bounty.png'
import kvas from '../../assets/products-images/kvas.png'
import protein from '../../assets/products-images/protein.png'
import sprite from '../../assets/products-images/sprite.png'
import redBul from '../../assets/products-images/red_bul.png'
import tea from '../../assets/products-images/tea.png'
import empty from '../../assets/products-images/void.png'
import { product } from '../../../App'


const imagesProducts = new Map([
    [1,cola],
    [2,bounty],
    [3,water],
    [4,monster],
    [5,kvas],
    [6,protein],
    [7,sprite],
    [8,redBul],
    [9,tea],
])


const Product:FC<product> = ({id,name, price, amount}) => {
  if ( amount >0)
    return (
        <StyledProduct>
        <img src={imagesProducts.get(id)} alt="" />
        <Price>Цена:{price}</Price>
        <div className="">{id}</div>
        <Amount  >{amount}</Amount>
        </StyledProduct>
    )
  else
  return (
    <StyledProduct>
    <img src={empty} alt="" />
     
    </StyledProduct>
)
}

export default Product

const StyledProduct = styled.div`
    background-color: #D9D9D9;
    max-width: 200px;
    margin:5px;
    text-align:center;
`
const Amount = styled.div`
    font-size:30px;
    color:red;
`
const Price = styled.div`
    font-size: 30px;
`