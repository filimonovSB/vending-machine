import React, { FC,PropsWithChildren } from 'react'
import styled from 'styled-components'

import rub100 from '../assets/banknotes/100rub.png'
import rub1000 from '../assets/banknotes/1000rub.png'
import rub50 from '../assets/banknotes/50rub.png'
import rub500 from '../assets/banknotes/500rub.png'


const selectimage = (number:React.ReactNode) =>{
  switch(number) {
  case 50:
    return rub50
  case 100:
    return rub100
  case 500:
    return rub500  
  case 1000:
    return rub1000
  default:
    return ''
  }
}
 
const Banknote = styled.div<{bg: number}>`
  margin: 5px;
  width: 100px;
  height: 240px;
  padding: 5px;
  border: 1px solid black;
  background-color: orange;
  font-size:20px;
  text-align:center;
  cursor: grab;
  background-image: url(${props => selectimage(props.bg)});
  background-size: cover;
`
export default Banknote