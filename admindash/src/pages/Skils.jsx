import React, { Component } from 'react';
import Skils from '../components/Skils.css'
import Sidebar from '../components/Sidebar';


const Skils = () => {
    return (

        <>
        
        <section className='mandy'>

            <section className='sedo'>

           <Sidebar/>
            
            </section>


            <section className='skilo'>

         
          <div class="page-header">
            <div>
              <h2 class="page-title">Skills</h2>
              <p class="page-subtitle">Your technical and creative skills</p>
            </div>
            <button class="btn-primary">Add Skill</button>
          </div>

          <div class="card glass-strong">
            <h3 class="card-title">Design</h3>
            <div class="grid grid-2">
              <div class="skill-row">
                <div class="skill-info">
                  <div class="skill-name">UI/UX Design</div>
                  <div class="skill-meta">Design</div>
                </div>
                <div class="skill-bar-wrapper">
                  <div class="stat-bar">
                    <span style="width: 95%;"></span>
                  </div>
                  <div class="skill-percent">95%</div>
                </div>
              </div>

              <div class="skill-row">
                <div class="skill-info">
                  <div class="skill-name">Responsive Design</div>
                  <div class="skill-meta">Design</div>
                </div>
                <div class="skill-bar-wrapper">
                  <div class="stat-bar">
                    <span style="width: 96%;"></span>
                  </div>
                  <div class="skill-percent">96%</div>
                </div>
              </div>
            </div>
          </div>
    


            </section>



        </section>
        
        </>
      );
}
 
export default Skils;