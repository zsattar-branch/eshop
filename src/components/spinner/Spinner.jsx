import React from 'react'
import {SpinnerContainer, SpinnerOverlay } from './Spinner.styles'

const Spinner = (WrappedComponent) =>{
  const WithSpinner = ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
      <WrappedComponent {...otherProps}/>
      )
  }
  return WithSpinner
}

export default Spinner
