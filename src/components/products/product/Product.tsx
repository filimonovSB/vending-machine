import React, { FC } from 'react'
import styled from 'styled-components'

import monster from '../../../assets/images/products-images/monstr.png'
import cola from '../../../assets/images/products-images/cola.png'
import water from '../../../assets/images/products-images/water.png'
import bounty from '../../../assets/images/products-images/bounty.png'
import kvas from '../../../assets/images/products-images/kvas.png'
import protein from '../../../assets/images/products-images/protein.png'
import sprite from '../../../assets/images/products-images/sprite.png'
import redBul from '../../../assets/images/products-images/red_bul.png'
import tea from '../../../assets/images/products-images/tea.png'
import empty from '../../../assets/images/products-images/void.png'

import { IProduct } from '../../../types'

const productsImages = new Map([
  [1, cola],
  [2, bounty],
  [3, water],
  [4, monster],
  [5, kvas],
  [6, protein],
  [7, sprite],
  [8, redBul],
  [9, tea],
])

const Product: FC<IProduct> = ({ id, price, amount }) => {
  if (amount > 0)
    return (
      <StyledProduct>
        <img src={productsImages.get(id)} alt="" />
        <Price>Цена:{price}</Price>
        <Amount>Количество {amount}</Amount>
        <StyledId>{id}</StyledId>
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
  max-width: 200px;
  margin: 5px;
  background-color: #D9D9D9;
  text-align: center;
`
const Amount = styled.div`
  margin: 5px 0 5px 0;
  font-size: 20px;
  color: #194755;
`
const Price = styled.div`
  font-size: 30px;
`
const StyledId = styled.div`
  width:20px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius:50%;
  background-color: orange;
`
