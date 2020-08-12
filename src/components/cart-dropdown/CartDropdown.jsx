import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import './CartDropdown.scss'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import Button from '../button/Button'

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
            <span className="empty-message">Your Cart Is Empty</span>
          )}
      </div>
      <Button onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden())}}>
        Go To Checkout</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown))
