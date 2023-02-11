import { FC, MouseEventHandler, PropsWithChildren, useState } from 'react'

type Props = {
  color?: string,
  padding?: number,
  bd?: string,
  br?: number,
  bg?: string,
  w?: number,
  h?: number,
  fz?: number,
  onClick?: MouseEventHandler,
} & PropsWithChildren

const Button: FC<Props> = (
  {
    children,
    color = 'white',
    padding = 0,
    bd = '1px solid black',
    br = '0',
    bg = 'white',
    w = 100,
    h = 50,
    fz = 15,
    onClick,
  }
) => {
  const [isHover, setIsHover] = useState(false) 

  const handleMouseEnter = () => {
    setIsHover(true) 
  } 

  const handleMouseLeave = () => {
    setIsHover(false) 
  } 

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${w}px`,
        height: `${h}px`,
        padding: `${padding}px`,
        border: `${bd}`,
        color: `${color}px`,
        borderRadius: `${br}%`,
        fontSize: `${fz}px`,
        backgroundColor: isHover ? '#FF6746' : `${bg}`,
      }}
    >
      {children}
    </button>
  )

}

export default Button