import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'

const Cart = () => {
  const token = localStorage.getItem("userToken")
  const cartItems = useSelector((state) => state.cart)

  const render = () => {
    return (
      <div className='CartSection'>
        <h1>Shopping Cart</h1>
        {
          cartItems && cartItems.map((item, index) =>
            <div className='CartCard' key={index}>
              <p>{item.title}</p>
              <p>{item.sellingPrice}</p>
              <p>{item.discount}</p>
            </div>
          )
        }
      </div>
    )
  }

  return (
    <div>
      {
        token
          ? render()
          : <div>Nothing</div>
      }
    </div>
  )
}

export default Cart