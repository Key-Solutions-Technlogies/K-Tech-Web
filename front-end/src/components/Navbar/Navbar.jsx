import React from 'react'
import "./Navbar.css"
import { logo } from '../../assets/index'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='#' className='logo'>
        <img src= {logo} className='logo-img'  />
      </a>
      <ul className='menu'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Quienes somos?</a></li>
        <li><a href='#'>Contactenos</a></li>
        <li><a href='#'>Servicios</a></li>
        <li><a href='#'>Blog</a></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
