import React, { Component } from 'react';
import './Sidebar.css'
import { Link } from "react-router-dom";


const Sidebar = () => {
    return ( <>

<aside className="sidebar">

      <div className="sidebar-header">
        <h1 className="logo-text">Portfolio Admin</h1>
      </div>

      <nav className="sidebar-nav">

      <Link to="/Maindash" className="nav-item">
          <span className="nav-icon">📊</span>
          <span className="nav-label">Dashboard</span>
          </Link>

   

        <Link to="/Projects" className="nav-item">
             
        <span className="nav-icon">🧩</span>
        <span className="nav-label">Projects</span>

              </Link>

        <a href="#skills" className="nav-item">
          <span className="nav-icon">🎨</span>
          <span className="nav-label">Skills</span>
        </a>

      

        <a href="#categories" className="nav-item">
          <span className="nav-icon">🏷️</span>
          <span className="nav-label">Categories</span>
        </a>

        <a href="#pages" className="nav-item">
          <span className="nav-icon">📄</span>
          <span className="nav-label">Pages</span>
        </a>

        <a href="#messages" className="nav-item">
          <span className="nav-icon">✉️</span>
          <span className="nav-label">Messages</span>
          <span className="badge">8</span>
        </a>

        <a href="#profile" className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </a>

        <a href="#settings" className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Settings</span>
        </a>

        <a href="#insights" className="nav-item">
          <span className="nav-icon">📈</span>
          <span className="nav-label">Insights</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <span className="nav-icon">⏻</span>
          <span className="nav-label">Log Out</span>
        </button>
      </div>
      
    </aside>
    
    </> );
}
 
export default Sidebar;