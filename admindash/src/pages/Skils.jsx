import React from 'react';
import './Skils.css';
import Sidebar from '../components/Sidebar';

const Skils = () => {
  return (
    <>
      <section className="mandy">
        <section className="sedo">
          <Sidebar />
        </section>

        <section className="skilo">
          <main className="main-content">
            <header className="page-header">
              <h1 className="page-title">Skills</h1>
              <button className="add-skill-btn">Add Skill</button>
            </header>

            {/* DESIGN */}
            <section className="section">
              <h2 className="section-title">Design</h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>UI/UX Design</h3>
                      <span className="skill-category">Design</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-95"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">95%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Responsive Design</h3>
                      <span className="skill-category">Design</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-96"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">96%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Prototyping</h3>
                      <span className="skill-category">Design</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-93"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">93%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Design Systems</h3>
                      <span className="skill-category">Design</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-91"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">91%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Animation</h3>
                      <span className="skill-category">Design</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-89"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">89%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Typography</h3>
                      <span className="skill-category">Design</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-92"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">92%</div>
                </div>
              </div>
            </section>

            {/* DEVELOPMENT */}
            <section className="section">
              <h2 className="section-title">Development</h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>React</h3>
                      <span className="skill-category">Development</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-98"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">98%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>TypeScript</h3>
                      <span className="skill-category">Development</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-94"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">94%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Node.js</h3>
                      <span className="skill-category">Development</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-90"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">90%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Next.js</h3>
                      <span className="skill-category">Development</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-92"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">92%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Tailwind CSS</h3>
                      <span className="skill-category">Development</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-97"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">97%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>GraphQL</h3>
                      <span className="skill-category">Development</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-85"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">85%</div>
                </div>
              </div>
            </section>

            {/* DATABASE */}
            <section className="section">
              <h2 className="section-title">Database</h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>MongoDB</h3>
                      <span className="skill-category">Database</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill teal w-88"></div>
                    </div>
                  </div>
                  <div className="skill-percentage teal">88%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>PostgreSQL</h3>
                      <span className="skill-category">Database</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-86"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">86%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Redis</h3>
                      <span className="skill-category">Database</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill teal w-82"></div>
                    </div>
                  </div>
                  <div className="skill-percentage teal">82%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Firebase</h3>
                      <span className="skill-category">Database</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-90"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">90%</div>
                </div>
              </div>
            </section>

     
            <section className="section">
              <h2 className="section-title">Tools</h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Figma</h3>
                      <span className="skill-category">Tools</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-96"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">96%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Adobe XD</h3>
                      <span className="skill-category">Tools</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-88"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">88%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Git</h3>
                      <span className="skill-category">Tools</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill orange w-95"></div>
                    </div>
                  </div>
                  <div className="skill-percentage orange">95%</div>
                </div>

                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <h3>Docker</h3>
                      <span className="skill-category">Tools</span>
                    </div>
                    <div className="skill-actions">
                      <button className="action-btn">✎ Edit</button>
                      <button className="action-btn">🗑</button>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div className="progress-fill green w-83"></div>
                    </div>
                  </div>
                  <div className="skill-percentage green">83%</div>
                </div>
              </div>
            </section>

     
            <div className="overview-card">
              <h3 className="overview-title">Skills Overview</h3>
              <div className="overview-stats">
                <div className="stat-item">
                  <div className="stat-label">Total Skills</div>
                  <div className="stat-value">20</div>
                  <div className="stat-sub positive">+3 this month</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Average Level</div>
                  <div className="stat-value">91%</div>
                  <div className="stat-sub positive">+2% from last month</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Top Skill</div>
                  <div className="stat-value">React</div>
                  <div className="stat-sub highlight">98%</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Categories</div>
                  <div className="stat-value">4</div>
                  <div className="stat-sub muted">
                    Design, Dev, DB, Tools
                  </div>
                </div>
              </div>

              <div className="distribution-title">Skill Level Distribution</div>

              <div className="distribution-bar">
                <span className="distribution-label">90-100%</span>
                <div className="distribution-track">
                  <div className="distribution-fill high w-60">
                    12 skills
                  </div>
                </div>
              </div>

              <div className="distribution-bar">
                <span className="distribution-label">80-89%</span>
                <div className="distribution-track">
                  <div className="distribution-fill mid w-35">
                    7 skills
                  </div>
                </div>
              </div>

              <div className="distribution-bar">
                <span className="distribution-label">70-79%</span>
                <div className="distribution-track">
                  <div className="distribution-fill low w-5">
                    1
                  </div>
                </div>
              </div>
            </div>

          
            <div className="updates-list">
              <div className="updates-header">
                <h3 className="updates-title">Recent Updates</h3>
              </div>

              <div className="update-item">
                <div className="update-left">
                  <div className="update-icon orange">📐</div>
                  <div className="update-info">
                    <h4>Tailwind CSS</h4>
                    <div className="update-detail">
                      Updated from <span>94%</span> to <span>97%</span>
                    </div>
                  </div>
                </div>
                <div className="update-right">
                  <div className="update-time">2 hours ago</div>
                  <div className="update-change positive">+3%</div>
                </div>
              </div>

              <div className="update-item">
                <div className="update-left">
                  <div className="update-icon blue">⚛️</div>
                  <div className="update-info">
                    <h4>React</h4>
                    <div className="update-detail">
                      Updated from <span>96%</span> to <span>98%</span>
                    </div>
                  </div>
                </div>
                <div className="update-right">
                  <div className="update-time">1 day ago</div>
                  <div className="update-change positive">+2%</div>
                </div>
              </div>

              <div className="update-item">
                <div className="update-left">
                  <div className="update-icon teal">📱</div>
                  <div className="update-info">
                    <h4>Responsive Design</h4>
                    <div className="update-detail">
                      Updated from <span>94%</span> to <span>96%</span>
                    </div>
                  </div>
                </div>
                <div className="update-right">
                  <div className="update-time">2 days ago</div>
                  <div className="update-change positive">+2%</div>
                </div>
              </div>

              <div className="update-item">
                <div className="update-left">
                  <div className="update-icon green">🐳</div>
                  <div className="update-info">
                    <h4>Docker</h4>
                    <div className="update-detail">
                      Updated from <span>80%</span> to <span>83%</span>
                    </div>
                  </div>
                </div>
                <div className="update-right">
                  <div className="update-time">4 days ago</div>
                  <div className="update-change positive">+3%</div>
                </div>
              </div>

              <div className="update-item">
                <div className="update-left">
                  <div className="update-icon orange">✨</div>
                  <div className="update-info">
                    <h4>Animation</h4>
                    <div className="update-detail">
                      Updated from <span>86%</span> to <span>89%</span>
                    </div>
                  </div>
                </div>
                <div className="update-right">
                  <div className="update-time">5 days ago</div>
                  <div className="update-change positive">+3%</div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </section>
    </>
  );
};

export default Skils;
