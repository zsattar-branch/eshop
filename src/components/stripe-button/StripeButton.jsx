import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_51HG83XEaGsnzKhzCxb0aUVji2oLDIQ8zT5FpVWYiQIrcf51vJEuIVl826FEkGhrHbJ3FpC0K0mTCw6GHNMjZjOqF002C6SYTuj';
  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Zain's Gear Shop"
        billingAddress={true}
        shippingAddress={true}
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publicKey}
      />

    </div>
  )
}

export default StripeButton