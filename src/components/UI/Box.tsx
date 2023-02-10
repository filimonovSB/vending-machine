import styled from 'styled-components'

import React, { FC, PropsWithChildren } from 'react'

interface IBoxProps extends PropsWithChildren{
  m?:number,
  mt?:number,
  mr?:number,
  mb?:number,
  ml?:number,
  p?:number,
  pt?:number,
  pr?:number,
  pb?:number,
  pl?:number,
  w?:number,
}

const Box:FC<IBoxProps> = ({
  m = 0,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  p = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  w = '100%',
  children,
}) => {

  return (
    <div
      style={{
        margin: `${m}px`,
        marginTop: `${mt}px`,
        marginRight: `${mr}px`,
        marginBottom: `${mb}px`,
        marginLeft: `${ml}px`,
        padding: `${p}px`,
        paddingTop: `${pt}px`,
        paddingRight: `${pr}px`,
        paddingBottom: `${pb}px`,
        paddingLeft: `${pl}px`,
        width:`${w}`,
      }}
    >
      {children}
    </div>
  )
}

 

export default Box
 
 