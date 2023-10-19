import React from 'react'
import "./Header.css"
import Navbar from '../../Navbar/navbar'
import { Link, NavLink  } from "react-router-dom";


const Header = () => {
  return (
    
    <header className='header-services'>
      <Navbar/>
      <div className="wrapper-Servicios">
        
          <h1 className="header-title-service">Servicios </h1>
          <p className='p-servicios'> Servicios a la medida para tus necesidades especificas</p>
          
          <Link to= "servicios" className='btn-cotizacion-servicios'> Solicitar cotización</Link>
      </div>
    </header>
  )
}

export default Header

