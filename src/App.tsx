import React, { useState,FC } from 'react'
import styled from 'styled-components'

import Products from './components/products/Products'
import FlexWrapper from './components/UI/FlexWrapper'
import Wallet  from './components/wallet/Wallet'
import { IMoney } from './data/data'
import PanelControls from './components/panel-controls/PanelControls'

const App:FC = () => {
  const [depositedMoney,setDepositedMoney]= useState(0)
  const [currentBanknoteChange,setCurrentBanknoteChange] =useState<IMoney>({id:0, cost:0})
  const [changeBanknotes,setChangeBanknotes]=useState <Array<IMoney>>([ ])
  const [products, setProducts] = useState ([
    {id:1, name:'coca-cola', price:100, amount:5},
    {id:2, name:'bounty', price:90, amount:15},
    {id:3, name:'water', price:75, amount:10},
    {id:4, name:'monster-energy', price:75, amount:10},
    {id:5, name:'kvas', price:75, amount:10},
    {id:6, name:'протеиновый батончик', price:75, amount:10},
    {id:7, name:'спрайт', price:75, amount:10},
    {id:8, name:'ред-бул', price:75, amount:10},
    {id:9, name:'зеленый чай', price:75, amount:10},
  ])

  const byeProductHandler = (id:number): void => {
    setProducts(products.map(product=>{
      if (product.id==id && product.amount>0 && depositedMoney >= product.price){
        setDepositedMoney(depositedMoney-product.price)
        return {...product, amount:product.amount-1}
      }
      else
        return product
    }))
  }
  const setCurrentBanknoteHandler = (money:IMoney):void => {
    setCurrentBanknoteChange(money)
  }

  const deleteBanknote = ()  => {
    setChangeBanknotes(changeBanknotes.filter(m=> m.id!=currentBanknoteChange.id))
  }

  const dragStartChangeHandler=(e: React.DragEvent<HTMLDivElement>, money:IMoney): void => {
    setCurrentBanknoteChange(money)
  }

  return (
    <div className="App">
      <Container  >
        <FlexWrapper>
          <Products products={products}/>
          <PanelControls
            setChangeBanknotes={setChangeBanknotes}
            setDepositedMoney={setDepositedMoney}
            depositedMoney={depositedMoney}
            currentBanknoteChange={currentBanknoteChange}
            products={products}
            byeProductHandler={byeProductHandler}
            changeBanknotes={changeBanknotes}
            dragStartChangeHandler={dragStartChangeHandler}
          />
          <Wallet
            handleSetCurrentMoney={setCurrentBanknoteHandler} deleteCupur={deleteBanknote}
            currentMoneyChange={currentBanknoteChange} />
        </FlexWrapper>
      </Container>
    </div>
  )
}

export default App

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color:white;
`
