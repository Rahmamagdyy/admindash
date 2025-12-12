import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Maindash from './pages/Maindash';
import Projects from './pages/Projects';
import Skils from './pages/Skils';
import Cat from './pages/Cat';
import Pagelist from './pages/Pagelist';
import Messages from './pages/Messages';
import Editp from './pages/Editp';


const Routing = () => {
    return ( <>

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} /> 
    <Route path="/Maindash" element={<Maindash />} /> 
    <Route path="/Projects" element={<Projects />} /> 
    <Route path="/Skils" element={<Skils />} /> 
    <Route path="/Cat" element={<Cat />} /> 
    <Route path="/Pagelist" element={<Pagelist />} /> 
    <Route path="/Messages" element={<Messages />} /> 
    <Route path="/Editp" element={<Editp />} /> 

    </Routes>
    </BrowserRouter>
    
    
    </> );
}
 
export default Routing;