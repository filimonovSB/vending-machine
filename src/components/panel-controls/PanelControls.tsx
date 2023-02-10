import React, { FC, useState } from 'react'
import styled from 'styled-components'

import Box from '../UI/Box'
import BanknoteAcceptors from '../banknote-acceptor/BanknoteAcceptors'
import ProductsButtons from '../products-buttons/ProductsButtons'
import Banknote from '../banknote/Banknote'
import Button from '../UI/Button'
import { IMoney, IProduct } from '../../data/data'

interface PropsPanelControls{
    currentBanknoteChange:IMoney,
    depositedMoney:number,
    products:Array<IProduct>
    changeBanknotes:Array<IMoney>,
    byeProductHandler:(id: number)=>void,
    setDepositedMoney:(money:number)=> void,
    dragStartChangeHandler:(e: React.DragEvent<HTMLDivElement>,money:IMoney)=>void,
    setChangeBanknotes:(changeBanknotes:Array<IMoney>)=> void,
}
 
const PanelControls:FC<PropsPanelControls> = ({
  currentBanknoteChange,
  depositedMoney,
  products,
  changeBanknotes,
  byeProductHandler,
  setDepositedMoney,
  setChangeBanknotes,
  dragStartChangeHandler,
}
) => {
  const dragOverChangeHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault() 
  }
  const dragOverHandle=(e: React.DragEvent<HTMLDivElement>):void => {
    e.preventDefault() 
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement> ):void => {
    e.preventDefault()
    setDepositedMoney(currentBanknoteChange.cost+depositedMoney) 
  }
  const getСhangeHandler=()=>{
    setDepositedMoney(0)
    const tempArray = [1000,500,100,50]
    const result = []
    let moneyTemp = depositedMoney
    while (moneyTemp>0){
      for( let i=0; i<tempArray.length; i++)
      {
        if (moneyTemp>= tempArray[i])
        {
          result.push(tempArray[i])
          moneyTemp -=tempArray[i]
          break
        }
      }
      if (moneyTemp<50) break
    }
    setDepositedMoney(0)
    let i = 1
    setChangeBanknotes(result.map(r=> ({id:i++,cost:r})))
  }
  
  return (
    <StyledPanelControls>
      <Box mb={30} mt={20} >
        <h3>Введите купюру</h3>
        <BanknoteAcceptors
          draggable={true}
          onDragOver={(e) => dragOverHandle(e)}
          onDrop={(e) => dropHandler(e)}>               
        </BanknoteAcceptors>
        <h4>Вы ввели сумму: {depositedMoney}</h4>
      </Box>
      <ProductsButtons products={products} handleByeProduct={byeProductHandler}/>
      <Box mb={30} mt={30}>
        <h3>сдача</h3>
        <Button padding={5} bg="orange" onClick={getСhangeHandler}>Получить сдачу</Button>
        <BanknoteAcceptors>
          {changeBanknotes.map(c=>
            <Banknote
              bg={c.cost}
              key={c.id}
              draggable={true}
              onDragOver={(e) => dragOverChangeHandler(e)}
              onDragStart={(e) => dragStartChangeHandler(e,c )}
            >
            </Banknote>
          )}
        </BanknoteAcceptors>
      </Box>
    </StyledPanelControls>
  )
}

export default PanelControls

const StyledPanelControls = styled.div`
  width:450px;
  background-color: #D9D9D9;
  padding:15px;

`