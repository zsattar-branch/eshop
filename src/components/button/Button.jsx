import React from 'react'
import { CustomButtonContainer } from './Button.style'


export default function Button({children, ...props}) {
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  )
}
