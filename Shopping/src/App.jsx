import React from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
    </div>
  );
}

export default App

