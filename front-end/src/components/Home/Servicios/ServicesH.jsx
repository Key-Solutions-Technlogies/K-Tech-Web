import React from 'react'
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import { useState,useEffect} from 'react';
import axios from 'axios';
import "./ServicesH.css";
import Fade from 'react-reveal/Fade';



const ServicesH = () => {


  return (

    
    <section className='servicios-section'>
      <div className='servicios-container'>
        <h1 className='servicios-h1'>Servicios</h1>
      </div>
      
      <Fade left cascade>
      <div className='contenedor-servicios-servicios'>
      
        <div className='tarjeta-contenedor'>
        <img src="https://ubjonline.b-cdn.net/wp-content/uploads/2021/08/0002-2.jpg" className='imagen-tarjeta'/>
          <div className='contenedor-tarjeta-servicio'>
          
          <h1>Inteligencia Artificial</h1>
          <p className='servicios-detalles'> Detalles</p>
          <a href='#'> Más informacion </a>
          </div>

        </div>
        

        
        <div className='tarjeta-contenedor'>
        <img src="https://ubjonline.b-cdn.net/wp-content/uploads/2021/08/0002-2.jpg" className='imagen-tarjeta'/>
          <div className='contenedor-tarjeta-servicio'>
          
          <h1>Inteligencia Artificial</h1>
          <p className='servicios-detalles'> Detalles</p>
          <a href='#'> Más informacion </a>
          </div>

        </div>
        

        
        <div className='tarjeta-contenedor'>
        <img src="https://ubjonline.b-cdn.net/wp-content/uploads/2021/08/0002-2.jpg" className='imagen-tarjeta'/>
          <div className='contenedor-tarjeta-servicio'>
          
          <h1>Inteligencia Artificial</h1>
          <p className='servicios-detalles'> Detalles</p>
          <a href='#'> Más informacion </a>
          </div>

        </div>
        

        
        <div className='tarjeta-contenedor'>
        <img src="https://ubjonline.b-cdn.net/wp-content/uploads/2021/08/0002-2.jpg" className='imagen-tarjeta'/>
          <div className='contenedor-tarjeta-servicio'>
          
          <h1>Inteligencia Artificial</h1>
          <p className='servicios-detalles'> Detalles</p>
          <a href='#'> Más informacion </a>
          </div>

        </div>
        

        
        <div className='tarjeta-contenedor'>
        <img src="https://ubjonline.b-cdn.net/wp-content/uploads/2021/08/0002-2.jpg" className='imagen-tarjeta'/>
          <div className='contenedor-tarjeta-servicio'>
          
          <h1>Inteligencia Artificial</h1>
          <p className='servicios-detalles'> Detalles</p>
          <a href='#'> Más informacion </a>
          </div>

        </div>
        


        
        <div className='tarjeta-contenedor'>
        <img src="https://ubjonline.b-cdn.net/wp-content/uploads/2021/08/0002-2.jpg" className='imagen-tarjeta'/>
          <div className='contenedor-tarjeta-servicio'>
          
          <h1>Inteligencia Artificial</h1>
          <p className='servicios-detalles'> Detalles</p>
          <a href='#'> Más informacion </a>
          </div>

        </div>
       


        
      </div>
      </Fade>

      


    </section>


  
  )
  
}

export default ServicesH
