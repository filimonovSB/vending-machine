import React from 'react'
import styled from 'styled-components'

import rub100 from '../../assets/images/banknotes/100rub.png'
import rub1000 from '../../assets/images/banknotes/1000rub.png'
import rub50 from '../../assets/images/banknotes/50rub.png'
import rub500 from '../../assets/images/banknotes/500rub.png'

const selectImage = (number: number) => {
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
 
const Banknote = styled.div<{ bg: number }>`
  width: 100px;
  height: 240px;
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  background-color: orange;
  font-size: 20px;
  text-align: center;
  background-image: url(${props => selectImage(props.bg)});
  background-size: cover;
  cursor: grab;
`

export default Banknote