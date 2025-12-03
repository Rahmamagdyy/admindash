import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Maindash from './pages/Maindash';
import Projects from './pages/Projects';
const Routing = () => {
    return ( <>

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} /> 
    <Route path="/Maindash" element={<Maindash />} /> 
    <Route path="/Projects" element={<Projects />} /> 

    </Routes>
    </BrowserRouter>
    
    
    </> );
}
 
export default Routing;