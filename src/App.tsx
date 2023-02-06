import React, { useState } from 'react'
import styled from 'styled-components'

import Products from './components/products/Products'
import FlexWrapper from './components/UI/FlexWrapper'

 

function App() {

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

  return (
    <div className="App">
      <Container  >
        <FlexWrapper>
          <Products products={products}/>
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