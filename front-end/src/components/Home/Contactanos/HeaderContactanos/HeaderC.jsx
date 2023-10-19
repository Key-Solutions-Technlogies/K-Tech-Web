import React from 'react'
import "./HeaderC.css"
import Navbar from "../../../Navbar/Navbar";
import { Link, NavLink  } from "react-router-dom";


const HeaderC = () => {
  return (
    
    <header className='header-contacto'>
      <Navbar/>
      <div className="wrapper-Servicios">
        
          <h1 className="header-title-service">Contactenos </h1>
          <p className='p-servicios'> Obtenga la atencion que usted y su empresa se merecen</p>
          
          <Link to= "servicios" className='btn-cotizacion-servicios'> Solicitar cotización</Link>
      </div>
    </header>
  )
}

export default HeaderC
