import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const cartItem = useSelector((state)=>(state.cart.items))
  return (
    <div className='navbar'>
      <h2>Shopping Cart</h2>
      <div className='link'>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart({cartItem.length})</Link>
      </div>
    </div>
  );
}
export default Navbar

