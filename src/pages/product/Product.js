import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'

export default function Product() {
  return (
    <div>
      <Header />
        <Products />
        <div>
            <h1>Và 1 vài thông tin khác</h1>
        </div>
      <Footer />
    </div>
  )
}
