import React, { Component } from 'react';
import './Projects.css'
import Sidebar from '../components/Sidebar';

const Projects = () => {
    return ( <>


<section className='mando'>


<section className='sid'>

<Sidebar />

</section>



 
    

<section className='toola'>

<header className="page-header">
    <div>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">Manage your portfolio projects</p>
    </div>
    <button className="btn-add">
      <span>➕</span>
      Add New Project
    </button>
  </header>

  <div className="projects-grid">


    <div className="project-card">
      <div className="project-image bg-grad-orange">
        <span className="project-emoji">🛍️</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">E-Commerce Platform</h3>
        <span className="project-category">Web - Development</span>
        <p className="project-description">
          A full-stack e-commerce platform with modern UI, payment integration, and admin dashboard
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>


    <div className="project-card">
      <div className="project-image bg-grad-red">
        <span className="project-emoji">💳</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">Mobile Banking App</h3>
        <span className="project-category">UX - UI</span>
        <p className="project-description">
          Intuitive mobile banking interface with seamless user experience and modern design principles
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image bg-grad-purple-orange">
        <span className="project-emoji">📊</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">Saaz Dashboard</h3>
        <span className="project-category">Full Stack</span>
        <p className="project-description">
          Analytics dashboard with real-time data visualization and comprehensive reporting features
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image bg-grad-cyan">
        <span className="project-emoji">🖥️</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">Portfolio Website</h3>
        <span className="project-category">Web Design</span>
        <p className="project-description">
          Personal portfolio showcasing creative work with smooth animations and responsive design
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

  
    <div className="project-card">
      <div className="project-image bg-grad-green">
        <span className="project-emoji">📁</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">CMS Platform</h3>
        <span className="project-category">Web Development</span>
        <p className="project-description">
          Content management system with intuitive interface and powerful features
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>


    <div className="project-card">
      <div className="project-image bg-grad-violet">
        <span className="project-emoji">🚀</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">Startup Landing</h3>
        <span className="project-category">Web Design</span>
        <p className="project-description">
          Modern landing page for tech startups with conversion-focused design
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>


    <div className="project-card">
      <div className="project-image bg-grad-blue">
        <span className="project-emoji">📱</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">Real Estate Platform</h3>
        <span className="project-category">Full Stack</span>
        <p className="project-description">
          Property listing platform with advanced search, virtual tours, and agent management
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image bg-grad-pink">
        <span className="project-emoji">💻</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">Healthcare App Redesign</h3>
        <span className="project-category">UX - UI</span>
        <p className="project-description">
          Complete redesign of healthcare management app focusing on accessibility and user flow
        </p>
        <div className="project-actions">
          <button className="btn-edit">Edit ✏️</button>
          <button className="btn-delete">Delete 🗑️</button>
        </div>
      </div>
    </div>
  </div>
</section>


</section>




    </>  );
}
 
export default Projects;