import React from 'react'
import "./Informacion.css"
import InstagramEmbed from 'react-instagram-embed';


const Informacion = () => {
  return (
    
    <section>
        <div  className='contenedor-seccion-informacion'>
            <h1 className='titulo-seccion'>Quienes Somos?</h1>
            <p className='parrafo-seccion'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aspernatur necessitatibus ut vel iure ab sint asperiores, tempore esse sapiente, nemo quasi provident ullam corrupti quis? Nulla similique facilis ipsum.</p>
            <a href='#'className='botonConocer'> Se parte de la comunidad KeyTech</a>
        </div>
        
        <div className='contenedor-equipo'>
            <div className='contenedor-header'>
                <h1 className='titulo2'>Conoce al equipo</h1>

            </div>
            

            <div className='contenedor-seccion-informacion2'>
            
                <div className='tarjeta'>
                        <img className= "retrato" src= "https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg?size=626&ext=jpg&ga=GA1.1.1104692704.1697505405&semt=ais" />
                        <h3 className='nombre-tarjeta'> Federico Torres Carballo</h3>
                        <h4 className='puesto'> Director</h4>
                        <a href='#' className='botonConocer'> Conoce más sobre mí</a>
                </div>

                <div className='tarjeta'>
                        <img className= "retrato" src= "https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg?size=626&ext=jpg&ga=GA1.1.1104692704.1697505405&semt=ais" />
                        <h3 className='nombre-tarjeta'> Néstor Morales Rodriguez</h3>
                        <h4 className='puesto'> Director</h4>
                        <a href='#' className='botonConocer'> Conoce más sobre mí</a>
                </div>

                <div className='tarjeta'>
                        <img className= "retrato" src= "https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg?size=626&ext=jpg&ga=GA1.1.1104692704.1697505405&semt=ais" />
                        <h3 className='nombre-tarjeta'> Dayana</h3>
                        <h4 className='puesto'> Director</h4>
                        <a href='#' className='botonConocer'> Conoce más sobre mí</a>
                </div>

                <div className='tarjeta'>
                        <img className= "retrato" src= "https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg?size=626&ext=jpg&ga=GA1.1.1104692704.1697505405&semt=ais" />
                        <h3 className='nombre-tarjeta'> Federico Torres Lobo</h3>
                        <h4 className='puesto'> Arquitecto de soluciones</h4>
                        <a href='#' className='botonConocer'> Conoce más sobre mí</a>
                </div>

                
            
            </div>

            

        
            




        </div>



        
                

            

        
        
        
    </section>
  )
}

export default Informacion