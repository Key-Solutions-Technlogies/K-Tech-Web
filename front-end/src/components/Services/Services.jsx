import React from 'react'
import { logo } from '../../assets/index'
import { Link } from "react-router-dom";
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import Header from './Header/Header';
import Capacitaciones from './Capacitaciones/Capacitaciones';
import "./Services.css";
import ServicesH from '../Home/Servicios/ServicesH';


const Services = () => {
  return <>
    <Header/>
    
    <ServicesH/>

    <Footer />
  </>
  
}

export default Services