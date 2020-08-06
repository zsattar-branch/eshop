import React from 'react'
import "./Button.scss"

export default function Button({isGoogleSignIn, children, ...otherProps}) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
