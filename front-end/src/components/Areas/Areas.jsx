import ReactPlayer from 'react-player';
import React from 'react'
import { conocimientos as video, desarrollo,automatizacion, formaciones,consultoria } from '../../assets/index';
import { useState, useEffect } from 'react';


function MiComponenteVisible() {
    return (
      <div className='containerArea'>
      {/* <h1 className='areasConocimiento'>Nuestras áreas de conocimiento</h1> */}
      {/* <video src ={video}  autoplay="autoplay" loop className='header-video'/> */}
      <video autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="miVideo" className='video-areas' height= "850px" width="100%">
      <source src={video}/>
      </video>
      {/* <ReactPlayer url = {video} controls  playing={true} className ='video-container' width="100%" height= "400px" ></ReactPlayer>  */}
      </div>
    );
  }
const Areas = () => {
    const [mostrarComponente, setMostrarComponente] = useState(false);
    const handleScroll = () => {
        const scrollY = window.scrollY; // Posición actual de desplazamiento vertical
    
        // Define una posición de desplazamiento a partir de la cual mostrar el componente
        const mostrarEnPosicion = 0; // Ajusta esto según tus necesidades
    
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
        <section className='container-video'>
        
        
        {/* Renderiza el componente cuando mostrarComponente es true */}
        <MiComponenteVisible />
      </section>
        
        
    )
  }
  
  export default Areas


  