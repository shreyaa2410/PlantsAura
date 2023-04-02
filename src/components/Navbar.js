import React from 'react'
import {  Link } from 'react-router-dom'
import logo from '../images/cartimage.jpg';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import {auth} from '../config/Config'
import {CartContext} from '../global/CartContext'
import { useContext } from 'react';

export const Navbar = ({ user }) => {

  const history = useNavigate();
  const { totalQty } = useContext(CartContext);

 
  const handleLogout = () => {
      auth.signOut().then(() => {
          history('/login');
      })
  }

  return (
      <div className='navbox'>
          <div className='leftside'>
          <img src={logo} alt={'../images/cartimage.jpg'} />
          </div>
          {!user && <div className='rightside'>
              <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
              <span><Link to="login" className='navlink'>LOGIN</Link></span>
          </div>}
          {user && <div className='rightside'>
              <span><Link to="/" className='navlink'>{user}</Link></span>
              <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
              <span className='no-of-products'>{totalQty}</span>
              <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
          </div>}
      </div>
  )
}