import React from 'react'
import "./Header.css"
import Navbar from '../../Navbar/navbar'
import { Link, NavLink  } from "react-router-dom";


const Header = () => {
  return (
    
    <header className='header-home'>
      <Navbar/>
      <div className="wrapper">
        
          <h2 className="header-title-header">Somos la llave de su</h2>
          <h1 className="header1-title-header"> transformación tecnológica</h1>
          <Link to= "servicios" className='btn-cotizacion-header'> Solicitar cotización</Link>
      </div>
    </header>
  )
}

export default Header

