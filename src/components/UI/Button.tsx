import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

interface ButtonProps extends PropsWithChildren{
    color?:string,
    padding?:number,
    bd?:string,
    br?:number,
    bg?:string,
    w?:number,
    h?:number,
    fz?:number,
}

const Button:FC<ButtonProps> = (
    {children, color='white', padding=0, bd='1px solid black', br='0', bg='white', w=100,h=50, fz=15}) => {

    const StyledButton=styled.button`
        width:${w}px;
        height:${h}px;
        color:${color}px;
        padding:${padding}px;
        border:${bd};
        border-radius:${br}%;
        background-color:${bg};
        font-size:${fz}px;
        &:hover{
            background-color:#FF6746;
        }
        &:active{
            background-color:#FE1E00;
        }
    `
  return (
    <StyledButton>{children}</StyledButton>
  )

}

export default Button