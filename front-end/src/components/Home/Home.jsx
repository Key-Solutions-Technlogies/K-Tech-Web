import React from 'react'
import { logo } from '../../assets/index'
import { Link } from "react-router-dom";
import {  Header, Navbar, Services, Solutions,Blog, Footer, Capacitaciones,Herramientas, Informacion } from '../index';


const Home = () => {
  return <>
    
    <Header />
    <Services/>
    <Herramientas />
    {/* <Blog /> */}
    <Informacion/>
  {/* <Capacitaciones/>
  <Services />
  <Blog />
    <Solutions /> */}

  <Footer />
  </>
  
}

export default Home