import React, { FC, useState } from 'react'
import styled from 'styled-components'

import FlexWrapper from '../UI/FlexWrapper'
import Banknote from '../banknote/Banknote'
import { IMoney } from '../../data/data'

interface WalletProps {
    handleSetCurrentMoney: (money:IMoney)=>void ,
    deleteCupur: ()=>void ,
    currentMoneyChange: IMoney,
}
const Wallet:FC<WalletProps> = ({handleSetCurrentMoney,deleteCupur,currentMoneyChange}) => {
  const [moneys,setMoneys]=useState<Array<IMoney>>([
    {id:1, cost:50},
    {id:2, cost:100},
    {id:3, cost:500},
    {id:4, cost:1000},
  ])
  const [current,setCurrent] = useState<IMoney>( {id:0, cost:5},)
  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault() 
  }
  function dragEndHandler(e:React.DragEvent<HTMLDivElement>): void{
    setMoneys(moneys.filter(m=> m.id!=current.id))
  }
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>,moneys:Array<IMoney>, money:IMoney): void {       
    handleSetCurrentMoney(money)
    setCurrent(money)
  }
  function dropWalletHandler(e: React.DragEvent<HTMLDivElement> ): void {
    e.preventDefault()
    setMoneys([...moneys,{id:Date.now(),cost: currentMoneyChange.cost}])
    deleteCupur()
  }
  function dragOverWalletHandler(e: React.DragEvent<HTMLDivElement> ): void {
    e.preventDefault()  
  }
  return (
    <StyletWallet  draggable={true} onDrop={(e) => dropWalletHandler(e)} onDragOver={(e) => dragOverWalletHandler(e)}>
      <FlexWrapper jc="space-between" fw="wrap" > 
        {moneys.map(money=>
          <Banknote
            bg={money.cost}
            key={money.id}
            draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragStart={(e) => dragStartHandler(e, moneys,money)}
            onDragEnd={(e) => dragEndHandler(e)}
          >
            
          </Banknote>
        )}
      </FlexWrapper>
    </StyletWallet>
  )
}

export default Wallet

const StyletWallet = styled.div`
    border: 2px solid black;
    width: 800px;
    background-color: #A3706A;
`