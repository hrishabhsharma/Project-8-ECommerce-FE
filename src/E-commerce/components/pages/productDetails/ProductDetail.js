import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../../store/CartSlice'

const ProductDetail = () => {
  const [Data, setData] = useState("")
  const url = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`https://hrishabh-e-commerce.onrender.com/${url.category}/${url.id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [url.category, url.id])

  const addCart = () => {
    dispatch(addToCart(Data))

  }
  const render = () => {
    return (
      <div>
        <img src={Data.image} alt='not found' />
        <h1>{Data.title}</h1>
        <button onClick={addCart}>add to cart</button>
      </div>
    )
  }

  return (
    <>
      {Data ? (
        render()
      ) : (
        <h1>This is loading</h1>
      )}
    </>
  )
}

export default ProductDetail