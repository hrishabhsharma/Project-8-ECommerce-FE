import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'

const Cart = () => {
  const token = localStorage.getItem("userToken")
  const userName = localStorage.getItem("userName")
  const user = localStorage.getItem("userId")
  const cart = useSelector((state) => state.cart)
  console.log(user)
  console.log(userName)
  console.log(cart)

  const render = (
    <div className='CartSection'>
      <h1>Shopping Cart</h1>
      {
        cart.data && cart.data.map((item, index) =>
          <div className='CartCard' key={index}>
            <p>{item.productId.title}</p>
            <p>{item.productId.sellingPrice}</p>
            <p>{item.productId.discount}</p>
          </div>
        )
      }
    </div>
  )

  return (
    <div>
      {
        token
          ? render
          : <div>Nothing</div>
      }
    </div>
  )
}

export default Cart