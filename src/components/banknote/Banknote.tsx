import React, { FC,PropsWithChildren } from 'react'
import styled from 'styled-components'

import rub100 from '../assets/banknotes/100rub.png'
import rub1000 from '../assets/banknotes/1000rub.png'
import rub50 from '../assets/banknotes/50rub.png'
import rub500 from '../assets/banknotes/500rub.png'
import { IMoney } from '../../data/data'


interface PropsBanknote extends PropsWithChildren {
    draggable?:boolean,
    onDragOver?:(e: React.DragEvent<HTMLDivElement>)=>void,
    onDragStart?:(e: React.DragEvent<HTMLDivElement>, moneys?:Array<IMoney>, money?:IMoney) => void ,
    onDragLeave?:(e: React.DragEvent<HTMLDivElement>) => void,
    onDragEnd?:(e: React.DragEvent<HTMLDivElement>) => void,
    
}
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

const Banknote:FC<PropsBanknote> = (props) => {
  return (
    <div {...props }
      style={{
        
        margin: '5px',
        width:'100px',
        height:'240px',
        padding:'5px',
        border: '1px solid black',
        backgroundColor: 'orange',
        fontSize:'20px',
        textAlign:'center',
        cursor: 'grab',
        backgroundImage:`url(${selectimage(props.children)})`,
        backgroundSize: 'cover',
      }}
    >
    
    </div>
  )
}

export default Banknote

const StyledBanknote = styled.div`
    width:50px;
    height:80px;
    padding:5px;
    border: 1px solid black;
    background-color: orange;
    font-size:20px;
    text-align:center;
    cursor: grab;
`