import React from 'react'
import { logo } from '../../assets/index'
import { Link } from "react-router-dom";
import {  Header, Navbar, Services, Solutions,Blog, Footer, Capacitaciones } from '../index';

const Home = () => {
  return <>
    <Services/>
    <Header />
  <Capacitaciones/>
  <Services />
  <Blog />
    <Solutions />

  <Footer />
  </>
  
}

export default Home