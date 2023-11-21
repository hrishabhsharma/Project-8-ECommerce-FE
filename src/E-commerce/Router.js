import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Pages from './pages/allproducts/Pages'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import styled from '@emotion/styled'
import ProductDetail from './pages/productDetails/ProductDetail'
import Signup from './components/signup/Signup'
import Cart from './pages/cart/Cart'
import { fetchProduct } from './store/ProductSlice'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div`
  min-height:28vh;
  background: transparent;
`
const routingCategory = ['mobiles', 'fashion', 'electronics', 'appliances']

const Router = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          {routingCategory.map((cat, index) => (
            <Route key={index} path={`/${cat}`} element={<Pages category={cat} />} />
          ))}
          {routingCategory.map((cat, index) => (
            <Route key={index} path={`/${cat}/:brandName`} element={<Pages category={cat} />} />
          ))}
          <Route path='/:category/:brandName/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Router