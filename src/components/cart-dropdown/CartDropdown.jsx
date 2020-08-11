import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './CartDropdown.scss'
import CartItem from '../cart-item/CartItem'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import Button from '../button/Button'

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        }
      </div>
      <Button> Go To Checkout</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  cartItems:selectCartItemsCount
})


export default connect(mapStateToProps)(CartDropdown)
