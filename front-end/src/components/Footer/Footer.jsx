import React from 'react'
import "./Footer.css"
import {instagram, youtube,linkedin,facebook,logoBlanco} from "../../assets/index"

const Footer = () => {
  return (
    <footer>
      <div className='footer'>

      <div className='logo-container'>
        <a> <img src= {logoBlanco} className='logoBlanco' /></a>

      </div>
        <div className="redes-container">
          <a href = "#"> <img  href = "#" src ={instagram} /></a>
          
          <a href="#"className='facebook'><img   src ={facebook} /></a>
          
          <a href="#"className='youtube'><img   src ={youtube} /></a>
          <a href="#"></a>

        </div>

        
      </div>
    </footer>
  )
}

export default Footer
