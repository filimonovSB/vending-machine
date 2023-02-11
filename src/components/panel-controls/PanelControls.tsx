import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { v4, parse} from 'uuid'

import Box from '../base/Box'
import BanknoteAcceptors from '../banknote-acceptor/BanknoteAcceptor'
import ProductsButtons from '../products-buttons/ProductsButtons'
import Banknote from '../banknote/Banknote'
import Button from '../base/Button'
import { IMoney, IProduct } from '../../types'
import { nominal } from '../../mocks'

type Props = {
  currentBanknoteChange: IMoney
  depositedMoney: number
  products: IProduct[]
  changeBanknotes: IMoney[]
  setProducts:(products:IProduct[]) => void
  buyProductHandler: (id: number) => void
  setDepositedMoney: (money: number) => void
  dragStartChangeHandler:(e: React.DragEvent<HTMLDivElement>, money: IMoney) => void
  setChangeBanknotes:(changeBanknotes: IMoney[]) => void
}
 
const PanelControls:FC<Props> = ({
  currentBanknoteChange,
  depositedMoney,
  products,
  changeBanknotes,
  setProducts,
  buyProductHandler,
  setDepositedMoney,
  setChangeBanknotes,
  dragStartChangeHandler,
}
) => {
  const dragOverChangeHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault() 
  }
  const dragOverHandle = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault() 
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement> ) => {
    e.preventDefault()
    setDepositedMoney(currentBanknoteChange.cost + depositedMoney) 
  }

  const getСhangeHandler = () => {
    let moneyTemp = depositedMoney
    const result = []
    while (moneyTemp > 0) {
      for (let i = 0; i < nominal.length; i++) {
        if (moneyTemp >= nominal[i]) {
          result.push(nominal[i])
          moneyTemp -= nominal[i]
          break
        }
      }
      if (moneyTemp < 50) break
    }
    while (moneyTemp > 0) {
      setProducts(products.map(product =>{
        if ( product.amount > 0 && moneyTemp >= product.price)
        {
          moneyTemp-= product.price
          return { ...product, amount: product.amount - 1 }
        }
        return product

      } ))
    }
    setDepositedMoney(0)
    let i = 0
    setChangeBanknotes(result.map(r => ({ id:parse(v4())[i++], cost: r })))
  }
  
  return (
    <StyledPanelControls>
      <Box mb={30} mt={20}>
        <h3>Введите купюру</h3>
        <BanknoteAcceptors
          draggable={true}
          onDragOver={dragOverHandle}
          onDrop={dropHandler}>               
        </BanknoteAcceptors>
        <h4>Вы ввели сумму: {depositedMoney}</h4>
      </Box>
      <ProductsButtons 
        products={products} 
        buyProductHandler={buyProductHandler}
      />
      <Box mb={30} mt={30}>
        <h3>сдача</h3>
        <Button 
          padding={5} 
          bg="orange" 
          onClick={getСhangeHandler}
        >
          Получить сдачу
        </Button>
        <BanknoteAcceptors>
          {changeBanknotes.map(banknote=>
            <Banknote
              bg={banknote.cost}
              key={banknote.id}
              draggable={true}
              onDragOver={dragOverChangeHandler}
              onDragStart={(e) => dragStartChangeHandler(e, banknote)}
            >
            </Banknote>
          )}
        </BanknoteAcceptors>
      </Box>
    </StyledPanelControls>
  )
}

const StyledPanelControls = styled.div`
  width: 450px;
  padding: 15px;
  background-color: #D9D9D9;
`

export default PanelControls