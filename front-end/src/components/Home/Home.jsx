import React from 'react'
import { logo } from '../../assets/index'
import { Link } from "react-router-dom";
import {  Header, Navbar, ServicesH, Solutions,Blog, Footer, Capacitaciones,Herramientas, Informacion, Contactanos } from '../index';


const Home = () => {
  return <>
    
    <Header />
    <ServicesH/>
    <Herramientas />
    {/* <Blog /> */}
    <Informacion/>


  <Footer />
  </>
  
}

export default Home