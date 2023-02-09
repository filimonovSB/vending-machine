import React, { FC, PropsWithChildren } from 'react'
 
interface IFlexProps extends PropsWithChildren{
    w?:string,
    jc?:string,
    ai?:string,
    fw?:string,
}

const FlexWrapper:FC<IFlexProps> = ({children, w='100%', jc='stretch', fw='nowrap' , ai='normal'}) => {
 
  return (
    <div style={{
      display: 'flex',
      flexWrap: `${ fw=='nowrap' ? 'nowrap' : 'wrap'}`,
      justifyContent:`${jc}`,
      alignItems:`${ai}`,
      width:`${w}`,
    }}>
      {children}
    </div>
  )
}

export default FlexWrapper

