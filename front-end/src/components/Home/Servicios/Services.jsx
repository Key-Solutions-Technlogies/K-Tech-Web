import React from 'react'
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import { useState,useEffect} from 'react';
import axios from 'axios';
import "./Services.css";




const Services = () => {
  const [empleados,setEmpleados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tipoServicios")
      .then((response)=> response.json())
      .then((empleados)=> setEmpleados(empleados));
  },[]);


  const [mostrarComponente, setMostrarComponente] = useState(false);
    const handleScroll = () => {
        const scrollY = window.scrollY; // Posición actual de desplazamiento vertical
    
        // Define una posición de desplazamiento a partir de la cual mostrar el componente
        const mostrarEnPosicion = 400; // Ajusta esto según tus necesidades
    
        if (scrollY > mostrarEnPosicion) {
          setMostrarComponente(true);
        } else {
          setMostrarComponente(false);
        }
      };
    
      // Agrega un efecto de efecto secundario para escuchar el evento de desplazamiento
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // Limpia el evento de desplazamiento cuando el componente se desmonta
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  


  return (

    
    <section>
      {mostrarComponente && 
      

      <div className='services'>

        <div className='titulo-Servicio-Container'>
        <h2 className='titulo-Servicio-h2'>Nuestros servicios</h2>
        <h1 className='titulo-Servicio-h1'>Lo que hacemos.</h1>
        </div>
        
        <div className='tiposServicios' >
          {empleados.map((item)=>
            <div className='tiposServicios-mapeado' >
              <div className='titulos-tipoServicios-mapeado'>
                <div className='tituloPrincipal-mapeado'> 
                <img src="#" className='punto'></img>
                <h2 className='tituloServicios-mapeado'>{item.nombreServicio}</h2>
                </div>
                
                
                <p className='descripcionServicio'>{item.descripcion}</p>
                <a href='#' className='botonServicio'>Contactenos</a>

              </div>
              <div className='imagen-tipoServicio-mapeado'><img className='iconoCircular' src= {item.URL} ></img> </div>
                
                
                
                
                

            </div>
                )}
        

          

        



          </div>
        
        </div>
      }
      

    </section>


  
  )
  
}

export default Services
