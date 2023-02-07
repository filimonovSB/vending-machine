import React, { useState } from 'react'
import styled from 'styled-components'

import Products from './components/products/Products'
import FlexWrapper from './components/UI/FlexWrapper'
import Box from './components/UI/Box'
import ProductsButtons from './components/products-buttons/ProductsButtons'
import Button from './components/UI/Button'

 

function App() {
  const [money,setMouney]= useState(0)
  const [moneyInput, setMoneyInput] = useState<string>()
  const [change,setChange] = useState(0)
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

  const handleInputMoney = () =>{
    setMouney(Number(moneyInput)+money)
    setMoneyInput('')
  }
  const handleChangeValue = (e: React.ChangeEvent <HTMLInputElement>) => {
    setMoneyInput(e.target.value)
  }
  const handleByeProduct = (id:number): void => {
    setProducts(products.map(product=>{
      if (product.id==id && product.amount>0 && money >= product.price){
        setMouney(money-product.price)
        return {...product, amount:product.amount-1}
      }
      else
        return product
    }))
  }
  const handleChange=()=>{
    setMouney(0)
    setChange(money)
  }

  return (
    <div className="App">
      <Container  >
        <FlexWrapper>
          <Products products={products}/>
          <PanelControls>
            <Box mb={30} mt={20} >
              <h3>Введите купюру</h3>
              <input type="text" value={moneyInput} onChange={handleChangeValue} />
              <Button onClick={handleInputMoney} w={100} h={40} bg="orange" padding={5}>Ок</Button>
              <h4>Вы ввели сумму: {money}</h4>
            </Box>
            <ProductsButtons products={products} handleByeProduct={handleByeProduct}/>
            <Box mb={30} mt={30}>
              <h3>сдача</h3>
              <input type="text" value={change} disabled/>
              <Button padding={5} bg="orange" onClick={handleChange}>Получить сдачу</Button>
            </Box>
          </PanelControls>
        </FlexWrapper>
        
      </Container>
    </div>
  )
}

export default App

export interface product{
  id: number,
  name: string,
  price: number,
  amount: number,
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const PanelControls = styled.div`
  width:450px;
  background-color: #D9D9D9;
  padding:15px;

`