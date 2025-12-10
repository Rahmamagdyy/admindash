import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import './Pagelist.css'

const Pagelist = () => {
    return (<>
    
    <div className="ambient-glow orange"></div>
    <div className="ambient-glow red"></div>

    <section className="mandop">
        
    <section className="sedo">
          <Sidebar />
        </section>


        <section className="skilop">

        <header className="page-header">
              <h1 className="page-title">Pagelist</h1>
              <button className="add-btn">Add Page</button>
            </header> 
        
        <div className="table-container">
  <table className="pages-table">
 



    <thead>
      <tr>
        <th>Page</th>
        <th>Slug</th>
        <th>Status</th>
        <th>Last Modified</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span className="page-name">About Me</span></td>
        <td><span className="page-slug">/about</span></td>
        <td><span className="status-badge published">Published</span></td>
        <td><span className="page-date">2025-11-20</span></td>
        <td>
          <div className="actions-cell">
            <button className="action-btn view" title="View">👁</button>
            <button className="action-btn edit" title="Edit">✏️</button>
            <button className="action-btn delete" title="Delete">🗑</button>
          </div>
        </td>
      </tr>

      <tr>
        <td><span className="page-name">Services</span></td>
        <td><span className="page-slug">/services</span></td>
        <td><span className="status-badge published">Published</span></td>
        <td><span className="page-date">2025-11-18</span></td>
        <td>
          <div className="actions-cell">
            <button className="action-btn view" title="View">👁</button>
            <button className="action-btn edit" title="Edit">✏️</button>
            <button className="action-btn delete" title="Delete">🗑</button>
          </div>
        </td>
      </tr>

      <tr>
        <td><span className="page-name">Contact</span></td>
        <td><span className="page-slug">/contact</span></td>
        <td><span className="status-badge published">Published</span></td>
        <td><span className="page-date">2025-11-15</span></td>
        <td>
          <div className="actions-cell">
            <button className="action-btn view" title="View">👁</button>
            <button className="action-btn edit" title="Edit">✏️</button>
            <button className="action-btn delete" title="Delete">🗑</button>
          </div>
        </td>
      </tr>

      <tr>
        <td><span className="page-name">Testimonials</span></td>
        <td><span className="page-slug">/testimonials</span></td>
        <td><span className="status-badge draft">Draft</span></td>
        <td><span className="page-date">2025-11-10</span></td>
        <td>
          <div className="actions-cell">
            <button className="action-btn view" title="View">👁</button>
            <button className="action-btn edit" title="">✏️</button>
            <button className="action-btn delete" title="Delete">🗑</button>
          </div>
        </td>
      </tr>

      <tr>
        <td><span className="page-name">Process</span></td>
        <td><span className="page-slug">/process</span></td>
        <td><span className="status-badge published">Published</span></td>
        <td><span className="page-date">2025-11-05</span></td>
        <td>
          <div className="actions-cell">
            <button className="action-btn view" title="View">👁</button>
            <button className="action-btn edit" title="">✏️</button>
            <button className="action-btn delete" title="Delete">🗑</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>



        </section>
        
        
        
        
        
        </section>
    
    
    </>  );
}
 
export default Pagelist;