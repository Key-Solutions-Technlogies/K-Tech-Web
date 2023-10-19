import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import Home from './components/Home/Home';
import Services from './components/Services/Services';
import { Contactanos } from './components';



const App = () => {
  return <>
  <Routes>
    
    <Route path='/' element ={<Home/>}> </Route>
    
    <Route path='/servicios' element ={<Services/>}></Route>
    <Route path='/contacto' element ={<Contactanos/>}></Route>
    


    
  </Routes>
  
  
  </>;
  
};

export default App

