import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Maindash from './pages/Maindash';
import Projects from './pages/Projects';
import Skils from './pages/Skils';
const Routing = () => {
    return ( <>

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} /> 
    <Route path="/Maindash" element={<Maindash />} /> 
    <Route path="/Projects" element={<Projects />} /> 
    <Route path="/Skils" element={<Skils />} /> 

    </Routes>
    </BrowserRouter>
    
    
    </> );
}
 
export default Routing;