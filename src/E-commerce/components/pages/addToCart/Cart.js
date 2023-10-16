import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const token = localStorage.getItem("userToken")
  const cartItems = useSelector((state) => state.cart)

  const render = () => {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {
          cartItems && cartItems.map((item,index)=>
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.costPrice}</p>
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