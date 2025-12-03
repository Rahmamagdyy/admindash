import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Maindash from './pages/Maindash';
const Routing = () => {
    return ( <>

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} /> 
    <Route path="/main" element={<Maindash />} /> 

    </Routes>
    </BrowserRouter>
    
    
    </> );
}
 
export default Routing;