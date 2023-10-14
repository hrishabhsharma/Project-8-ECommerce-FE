import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [Data, setData] = useState("")
  const url = useParams()
  useEffect(() => {
    axios.get(`http://localhost:4000/${url.category}/${url.id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  })

  const render = (Data) => {
    return (
      <h1>{Data.title}</h1>
    )
  }

  return (
    <>
      {Data ? (
        render(Data)
      ) : (
        <h1>This is loading</h1>
      )}
    </>
  )
}

export default ProductDetail