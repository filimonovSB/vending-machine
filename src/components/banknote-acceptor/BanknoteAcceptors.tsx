import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

interface PropsBanknoteAcceptors extends PropsWithChildren{
    draggable?:boolean,
    onDragOver?:(e: React.DragEvent<HTMLDivElement>)=>void
    onDrop?:(e: React.DragEvent<HTMLDivElement>)=>void,
}

const BanknoteAcceptors:FC<PropsBanknoteAcceptors> = (props) => {
  return (
    <BanknoteAcceptor {...props}>{props.children}</BanknoteAcceptor>
  )
}

export default BanknoteAcceptors

const BanknoteAcceptor = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  margin: 10px;
  width:250px;
  height:120px;
  background-color: #fff;
  border: 5px solid black;
`