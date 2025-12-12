import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import './Editp.css'


const Editp = () => {
    return ( <>

<div className="ambient-glow orange"></div>
<div className="ambient-glow red"></div>


<section className='mandz'>


<section className='sidz' >
<Sidebar />
</section>



<section  className='toolz' >

<main className="main-coontent">

<header className="page-header">
 
  <h1 className="page-title">Edit Project</h1>
  <button className="add-btn">
    Add New Project <span>+</span>
  </button>
</header>


<div className="form-card">

  <div className="project-preview">
    <div className="project-icon">🛒</div>
    <h2>E-Commerce Platform</h2>
    <span className="project-badge">Web - Development</span>
    <p>
      A full-stack e-commerce platform with modern UI, payment integration,
      and admin dashboard.
    </p>
  </div>


  <div className="form-group">
    <label className="form-label">Project Title</label>
    <input
      type="text"
      className="form-input"
      defaultValue="E-Commerce Platform"
      placeholder="Enter project title"
    />
  </div>

  <div className="form-group">
    <label className="form-label">Category</label>
    <input
      type="text"
      className="form-input"
      defaultValue="Web - Development"
      placeholder="Select category"
    />
  </div>

  <div className="form-group">
    <label className="form-label">Description</label>
    <div className="editor-container">
      <div className="editor-toolbar">
        <button className="toolbar-btn">↩</button>
        <button className="toolbar-btn">↪</button>
        <button className="toolbar-btn">🔗</button>
        <select className="toolbar-select">
          <option>HTML</option>
        </select>
        <div className="toolbar-divider"></div>
        <select className="toolbar-select">
          <option>— OO —</option>
        </select>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn">
          <b>B</b>
        </button>
        <button className="toolbar-btn">
          <i>I</i>
        </button>
        <button className="toolbar-btn">
          <u>U</u>
        </button>
        <button className="toolbar-btn">
          T<sup>x</sup>
        </button>
        <button className="toolbar-btn">
          T<sub>x</sub>
        </button>
        <button className="toolbar-btn">⌘</button>
        <button
          className="toolbar-btn"
       
        >
          A
        </button>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn">▽</button>
        <button className="toolbar-btn">⊙</button>
        <button className="toolbar-btn">▦</button>
        <button className="toolbar-btn">☰</button>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn">≡</button>
        <button className="toolbar-btn">⊞</button>
        <button className="toolbar-btn">⊟</button>
        <button className="toolbar-btn">⊠</button>
        <button className="toolbar-btn">≣</button>
        <button className="toolbar-btn">⋮</button>
        <button className="toolbar-btn">⋯</button>
        <button className="toolbar-btn">⌸</button>
        <button className="toolbar-btn">⌖</button>
      </div>
      <div
        className="editor-content"
        contentEditable
        suppressContentEditableWarning
        placeholder="Write your project description..."
      ></div>
    </div>
  </div>

  <div className="form-group">
    <label className="form-label">Technologies Used</label>
    <input
      type="text"
      className="form-input"
      defaultValue="React, Node.js, MongoDB, Stripe"
      placeholder="React, Node.js, MongoDB, Stripe"
    />
  </div>

  <div className="form-group">
    <label className="form-label">Project URL</label>
    <input
      type="url"
      className="form-input"
      placeholder="https://example.com"
    />
  </div>

  <div className="form-group">
    <label className="form-label">GitHub Repository</label>
    <input
      type="url"
      className="form-input"
      placeholder="https://github.com/username/repo"
    />
  </div>

  <div className="form-group">
    <label className="form-label">Project Images</label>
    <div
  
   
    >
      <div className="upload-icon">⬆️</div>
      <div className="upload-text">
        Click to upload or drag and drop
      </div>
      <div className="upload-hint">PNG, JPG, GIF up to 10MB</div>
      <input className="in"
        type="file"
        accept="image/*"
        multiple
       
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label className="form-label">Start Date</label>
      <input type="date" className="form-input" />
    </div>
    <div className="form-group">
      <label className="form-label">End Date</label>
      <input type="date" className="form-input" />
    </div>
  </div>

  <div className="form-group">
    <div className="checkbox-group">
      <label className="checkbox-item">
        <input
          type="checkbox"
          className="checkbox-input"
          defaultChecked
        />
        <span className="checkbox-custom"></span>
        <span className="checkbox-label">Featured Project</span>
      </label>
      <label className="checkbox-item">
        <input
          type="checkbox"
          className="checkbox-input"
          defaultChecked
        />
        <span className="checkbox-custom"></span>
        <span className="checkbox-label">Published</span>
      </label>
    </div>
  </div>
</div>


<div className="form-card seo-card">
  <h3 className="section-title">SEO</h3>

  <div className="form-group">
    <label className="seo-label">Page Title</label>
    <input
      type="text"
      className="form-input"
      defaultValue="Rahma Magdy - Product Designer & Developer"
      placeholder="Page title for SEO"
    />
  </div>

  <div className="form-group">
    <label className="seo-label">Meta Description</label>
    <textarea
      className="form-input form-textarea"
      placeholder="Meta description for search engines"
      defaultValue="Portfolio of Rahma Magdy, a senior product designer and full-stack developer specializing in UI/UX design, web development, and digital experiences."
    />
  </div>

  <div className="form-group">
    <label className="seo-label">URL Name ( Slug )</label>
    <input
      type="text"
      className="form-input"
      defaultValue="https://blog/"
      placeholder="https://yoursite.com/slug"
    />
  </div>
</div>


<div className="footer-actions">
  <button className="btn-reset">Reset To Default</button>
  <button className="btn-save">Save All Changes</button>
</div>
</main>
</section>
   





    
    



</section>
    
    </> );
}
 
export default Editp;