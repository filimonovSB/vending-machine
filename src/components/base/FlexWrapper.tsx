import { FC, PropsWithChildren } from 'react'
 
type Props = {
  w?: string,
  jc?: string,
  ai?: string,
  fw?: string,
} & PropsWithChildren

const FlexWrapper: FC<Props> = ({ children, w='100%', jc='stretch', fw='nowrap', ai='normal' }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: `${ fw === 'nowrap' ? 'nowrap' : 'wrap'}`,
      justifyContent: `${jc}`,
      alignItems: `${ai}`,
      width: `${w}`,
    }}>
      {children}
    </div>
  )
}

export default FlexWrapper

