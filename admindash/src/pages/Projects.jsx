import React, { Component } from 'react';
import './Projects.css'
import Sidebar from '../components/Sidebar';

const Projects = () => {
    return ( <>

    <Sidebar />
    
    <main class="main-content">


  <header class="page-header">
    <div>
      <h1 class="page-title">Projects</h1>
      <p class="page-subtitle">Manage your portfolio projects</p>
    </div>
    <button class="btn-add">
      <span>➕</span>
      Add New Project
    </button>
  </header>

  <div class="projects-grid">


    <div class="project-card">
      <div class="project-image bg-grad-orange">
        <span class="project-emoji">🛍️</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">E-Commerce Platform</h3>
        <span class="project-category">Web - Development</span>
        <p class="project-description">
          A full-stack e-commerce platform with modern UI, payment integration, and admin dashboard
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>


    <div class="project-card">
      <div class="project-image bg-grad-red">
        <span class="project-emoji">💳</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">Mobile Banking App</h3>
        <span class="project-category">UX - UI</span>
        <p class="project-description">
          Intuitive mobile banking interface with seamless user experience and modern design principles
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image bg-grad-purple-orange">
        <span class="project-emoji">📊</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">Saaz Dashboard</h3>
        <span class="project-category">Full Stack</span>
        <p class="project-description">
          Analytics dashboard with real-time data visualization and comprehensive reporting features
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image bg-grad-cyan">
        <span class="project-emoji">🖥️</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">Portfolio Website</h3>
        <span class="project-category">Web Design</span>
        <p class="project-description">
          Personal portfolio showcasing creative work with smooth animations and responsive design
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

  
    <div class="project-card">
      <div class="project-image bg-grad-green">
        <span class="project-emoji">📁</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">CMS Platform</h3>
        <span class="project-category">Web Development</span>
        <p class="project-description">
          Content management system with intuitive interface and powerful features
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>


    <div class="project-card">
      <div class="project-image bg-grad-violet">
        <span class="project-emoji">🚀</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">Startup Landing</h3>
        <span class="project-category">Web Design</span>
        <p class="project-description">
          Modern landing page for tech startups with conversion-focused design
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>


    <div class="project-card">
      <div class="project-image bg-grad-blue">
        <span class="project-emoji">📱</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">Real Estate Platform</h3>
        <span class="project-category">Full Stack</span>
        <p class="project-description">
          Property listing platform with advanced search, virtual tours, and agent management
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image bg-grad-pink">
        <span class="project-emoji">💻</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">Healthcare App Redesign</h3>
        <span class="project-category">UX - UI</span>
        <p class="project-description">
          Complete redesign of healthcare management app focusing on accessibility and user flow
        </p>
        <div class="project-actions">
          <button class="btn-edit">Edit ✏️</button>
          <button class="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>
  </div>
</main>


    </>  );
}
 
export default Projects;