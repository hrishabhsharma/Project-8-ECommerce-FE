import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../../store/CartSlice'
import styled from '@emotion/styled'

const ProductCard = styled.div`
  display : flex;
  flex-direction: column;
  gap: 2em;
`;

const ProductDetail = () => {
  const [Data, setData] = useState("")
  console.log(Data)
  const url = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`https://hrishabh-e-commerce.onrender.com/${url.category}/${url.id}`)
      .then((res) => setData(res.data.data[0]))
      .catch((err) => console.log(err))
  }, [url.category, url.id])

  const addCart = () => {
    dispatch(addToCart(Data))
  }
  const render = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <img src={Data.image} alt='not found' />
        <ProductCard>
          <h1>{Data.title}</h1>
          <h3>Cost Price : {Data.costPrice}</h3>
          <h3>Discount  : {Data.discount}</h3>
          <h3>Sale Price  : {Data.sellingPrice}</h3>
          <button onClick={addCart}>add to cart</button>
        </ProductCard>
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