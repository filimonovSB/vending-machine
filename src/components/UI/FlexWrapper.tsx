import React, { FC, PropsWithChildren } from 'react'
 
interface IFlexProps extends PropsWithChildren{
    w?:string,
    jc?:string,
    ai?:string,
    fw?:string,
}

const FlexWrapper:FC<IFlexProps> = ({children, w='100%', jc='stretch', fw , ai='normal'}) => {
 
  return (
    <div style={{
      display: 'flex',
      width:`${w}`,
      justifyContent:`${jc}`,
      alignItems:`${ai}`,
      flexWrap:'nowrap' || fw,
    }}>
      {children}
    </div>
  )
}

export default FlexWrapper

