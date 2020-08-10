import React from 'react'
import './CartDropdown.scss'

import Button from '../button/Button'

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button> Go To Checkout</Button>
    </div>
  )
}
export default CartDropdown
