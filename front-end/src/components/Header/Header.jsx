import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"


const Header = () => {
  return (
    
    <header>
      <Navbar />
      <div className="wrapper">
        
          <h2 className="header-title">Somos la llave de su</h2>
          <h1 className="header1-title"> transformación tecnológica</h1>
          <a href = "#" className='btn-cotizacion'> Solicitar cotización</a>
      </div>
    </header>
  )
}

export default Header

