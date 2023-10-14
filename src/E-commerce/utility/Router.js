import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Pages from '../components/pages/allproducts/Pages'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Login from '../components/login/Login'
import styled from '@emotion/styled'
import ProductDetail from '../components/pages/productDetails/ProductDetail'

const Wrapper = styled.section`
  min-height:90vh;
  background: transparent;
`


const Router = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mobiles' element={<Pages category="mobiles" />} />
          <Route path='/fashion' element={<Pages category="fashion" />} />
          <Route path='/electronics' element={<Pages category="electronics" />} />
          <Route path='/appliances' element={<Pages category="appliances" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:category/:id' element={<ProductDetail />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Router