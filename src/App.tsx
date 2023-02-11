import React, { useState,FC } from 'react'
import styled from 'styled-components'

import Products from './components/products/Products'
import FlexWrapper from './components/base/FlexWrapper'
import Wallet  from './components/wallet/Wallet'
import { IMoney } from './types'
import PanelControls from './components/panel-controls/PanelControls'
import { products as p }  from './mocks'

const App: FC = () => {
  const [depositedMoney, setDepositedMoney] = useState(0)
  const [currentBanknoteChange, setCurrentBanknoteChange] = useState<IMoney>({ id: 0, cost: 0 })
  const [changeBanknotes, setChangeBanknotes] = useState<IMoney[]>([])
  const [products, setProducts] = useState(p)
  const buyProductHandler = (id: number) => {
    setProducts(products.map(product => {
      if (product.id === id && product.amount > 0 && depositedMoney >= product.price) {
        setDepositedMoney(depositedMoney - product.price)
        return { ...product, amount: product.amount - 1 }
      }
      else
        return product
    }))
  }
  const setCurrentBanknoteHandler = (money: IMoney) => {
    setCurrentBanknoteChange(money)
  }

  const deleteBanknote = () => {
    setChangeBanknotes(changeBanknotes.filter(bancnote => bancnote.id !== currentBanknoteChange.id))
  }

  const dragStartChangeHandler=(e: React.DragEvent<HTMLDivElement>, money: IMoney) => {
    setCurrentBanknoteChange(money)
  }

  return (
    <div className="App">
      <Container>
        <FlexWrapper>
          <Products products={products}/>
          <PanelControls
            depositedMoney={depositedMoney}
            currentBanknoteChange={currentBanknoteChange}
            products={products}
            changeBanknotes={changeBanknotes}
            setProducts={setProducts}
            setChangeBanknotes={setChangeBanknotes}
            setDepositedMoney={setDepositedMoney}
            buyProductHandler={buyProductHandler}
            dragStartChangeHandler={dragStartChangeHandler}
          />
          <Wallet
            currentBanknoteChange={currentBanknoteChange}
            setCurrentBanknoteHandler={setCurrentBanknoteHandler} 
            deleteBanknote={deleteBanknote}
          />
        </FlexWrapper>
      </Container>
    </div>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
`

export default App