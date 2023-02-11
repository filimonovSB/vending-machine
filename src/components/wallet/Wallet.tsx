import React, { FC, useState } from 'react'
import styled from 'styled-components'

import FlexWrapper from '../base/FlexWrapper'
import Banknote from '../banknote/Banknote'
import { IMoney } from '../../types'

type Props = {
  setCurrentBanknoteHandler: (money: IMoney) => void ,
  deleteBanknote: () => void ,
  currentBanknoteChange: IMoney,
}
 
const Wallet:FC<Props> = (
  {
    setCurrentBanknoteHandler,
    deleteBanknote,
    currentBanknoteChange,
  }
) => {
  const [moneys, setMoneys] = useState<IMoney[]>([
    {id: 1, cost: 50},
    {id: 2, cost: 100},
    {id: 3, cost: 500},
    {id: 4, cost: 1000},
  ])
  const [current,setCurrent] = useState<IMoney>({ id: 0, cost: 5 })

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault() 
  }
  const dragEndHandler = (e:React.DragEvent<HTMLDivElement>) => {
    setMoneys(moneys.filter(m => m.id != current.id))
  }
  const dragStartHandler = (money: IMoney) => {       
    setCurrentBanknoteHandler(money)
    setCurrent(money)
  }
  const dropWalletHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setMoneys([...moneys,{id:currentBanknoteChange.id, cost: currentBanknoteChange.cost}])
    deleteBanknote()
  }
  const dragOverWalletHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()  
  }

  return (
    <StyletWallet  
      draggable={true} 
      onDrop={dropWalletHandler} 
      onDragOver={dragOverWalletHandler}
    >
      <FlexWrapper jc="space-between" fw="wrap" > 
        {moneys.map(money=>
          <Banknote
            draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragStart={() => dragStartHandler(money)}
            onDragEnd={(e) => dragEndHandler(e)}
            bg={money.cost}
            key={money.id}
          />
        )}
      </FlexWrapper>
    </StyletWallet>
  )
}

const StyletWallet = styled.div`
  width: 800px;
  border: 2px solid black;
  background-color: #A3706A;
`

export default Wallet