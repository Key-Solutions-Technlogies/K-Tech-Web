import React from 'react'
import "./Navbar.css"
import { logoNormal } from '../../assets/index'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='#' className='logo'>
        <img className='logo-img' src= {logoNormal} />
        
      </a>
      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="sobre-nosotros">Servicios</Link></li>
        <li><a href='#'>Contactenos</a></li>
        <li><a href='#'>Servicios</a></li>
        <li><a href='#'>Blog</a></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
