import React from 'react'
import { Routes, Route } from "react-router-dom"
import {  Header, Navbar, Services, Solutions,Blog, Footer, Capacitaciones,Home } from './components'

const App = () => {
  return <>
  <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="sobre-nosotros" element={ <Capacitaciones /> } />
        <Route path="contacto" element={ <Blog /> } />
  </Routes>
  
  </>;
  1
};

export default App

