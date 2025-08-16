import React from 'react'
import logo from '../assets/logo.png'
import { Link, replace } from 'react-router-dom'
import { NavLink,useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='navbar'>
      <img src={logo} alt='' width='100px'/>
      <ul>
       <NavLink to='/'><li>Home</li></NavLink> 
       <NavLink to='/products'><li>products</li></NavLink> 
       <NavLink to='/contact'><li>contact</li></NavLink> 
       <NavLink to='/about'><li>about</li></NavLink> 
       <NavLink to='/jobs'><li>Jobs</li></NavLink>
      </ul>
      <button onClick={()=>navigate('/contact',{replace:true})}>Get started</button>
    </div>
  )
}

export default Navbar
