import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>Shopping Cart</h2>
      <div className='link'>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
export default Navbar

