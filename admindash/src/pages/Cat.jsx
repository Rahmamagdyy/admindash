import React from 'react';
import Sidebar from '../components/Sidebar';
import './Cat.css'

const Cat = () => {
  return (
    <>
      <div className="ambient-glow orange"></div>
      <div className="ambient-glow red"></div>

      <section className="mandy">
        <section className="sedo">
          <Sidebar />
        </section>

        <div className="skilo">
          <main className="main-content">
            <header className="page-header">
              <h1 className="page-title">Categories</h1>
              <button className="add-btn">Add Category</button>
            </header>

            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon gradient-teal">W</div>
                <h3 className="category-name">Web Design</h3>
                <p className="category-slug">/web-design</p>
                <div className="category-footer">
                  <div className="project-count">
                    Projects <span className="count-badge">12</span>
                  </div>
                  <div className="card-actions">
                    <button className="action-btn">✎ Edit</button>
                    <button className="action-btn delete">🗑</button>
                  </div>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon gradient-purple">M</div>
                <h3 className="category-name">Mobile Apps</h3>
                <p className="category-slug">/mobile-apps</p>
                <div className="category-footer">
                  <div className="project-count">
                    Projects <span className="count-badge">8</span>
                  </div>
                  <div className="card-actions">
                    <button className="action-btn">✎ Edit</button>
                    <button className="action-btn delete">🗑</button>
                  </div>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon gradient-orange">B</div>
                <h3 className="category-name">Branding</h3>
                <p className="category-slug">/branding</p>
                <div className="category-footer">
                  <div className="project-count">
                    Projects <span className="count-badge">6</span>
                  </div>
                  <div className="card-actions">
                    <button className="action-btn">✎ Edit</button>
                    <button className="action-btn delete">🗑</button>
                  </div>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon gradient-green">U</div>
                <h3 className="category-name">UI/UX Design</h3>
                <p className="category-slug">/ui-ux-design</p>
                <div className="category-footer">
                  <div className="project-count">
                    Projects <span className="count-badge">15</span>
                  </div>
                  <div className="card-actions">
                    <button className="action-btn">✎ Edit</button>
                    <button className="action-btn delete">🗑</button>
                  </div>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon gradient-pink">F</div>
                <h3 className="category-name">Full Stack Development</h3>
                <p className="category-slug">/full-stack</p>
                <div className="category-footer">
                  <div className="project-count">
                    Projects <span className="count-badge">10</span>
                  </div>
                  <div className="card-actions">
                    <button className="action-btn">✎ Edit</button>
                    <button className="action-btn delete">🗑</button>
                  </div>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon gradient-yellow">E</div>
                <h3 className="category-name">E-Commerce</h3>
                <p className="category-slug">/ecommerce</p>
                <div className="category-footer">
                  <div className="project-count">
                    Projects <span className="count-badge">5</span>
                  </div>
                  <div className="card-actions">
                    <button className="action-btn">✎ Edit</button>
                    <button className="action-btn delete">🗑</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-header">
              <h2 className="section-title">Tags</h2>
              <button className="add-tag-btn">Add Tag +</button>
            </div>

            <div className="tags-grid">
              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot blue"></span>
                  <span className="tag-name">React</span>
                </div>
                <span className="tag-count">
                  <span>24</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot blue"></span>
                  <span className="tag-name">TypeScript</span>
                </div>
                <span className="tag-count">
                  <span>18</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot white"></span>
                  <span className="tag-name">Next.js</span>
                </div>
                <span className="tag-count">
                  <span>15</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot teal"></span>
                  <span className="tag-name">Tailwind CSS</span>
                </div>
                <span className="tag-count">
                  <span>32</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot green"></span>
                  <span className="tag-name">Node.js</span>
                </div>
                <span className="tag-count">
                  <span>12</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot green"></span>
                  <span className="tag-name">MongoDB</span>
                </div>
                <span className="tag-count">
                  <span>8</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot orange"></span>
                  <span className="tag-name">Figma</span>
                </div>
                <span className="tag-count">
                  <span>21</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot purple"></span>
                  <span className="tag-name">Adobe XD</span>
                </div>
                <span className="tag-count">
                  <span>9</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot yellow"></span>
                  <span className="tag-name">Sketch</span>
                </div>
                <span className="tag-count">
                  <span>6</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot blue"></span>
                  <span className="tag-name">Python</span>
                </div>
                <span className="tag-count">
                  <span>11</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot green"></span>
                  <span className="tag-name">Django</span>
                </div>
                <span className="tag-count">
                  <span>7</span> items
                </span>
              </div>

              <div className="tag-item">
                <div className="tag-left">
                  <span className="tag-dot green"></span>
                  <span className="tag-name">Vue.js</span>
                </div>
                <span className="tag-count">
                  <span>13</span> items
                </span>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">Total Categories</div>
                <div className="stat-value">6</div>
                <div className="stat-sub positive">+2 this month</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Total Tags</div>
                <div className="stat-value">12</div>
                <div className="stat-sub positive">+5 this month</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Total Projects</div>
                <div className="stat-value">56</div>
                <div className="stat-sub muted">Across all categories</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Most Used</div>
                <div className="stat-value text">Tailwind CSS</div>
                <div className="stat-sub muted">32 items tagged</div>
              </div>
            </div>

            <div className="activity-list">
              <div className="activity-header">
                <h3 className="activity-title">Recent Activity</h3>
              </div>
              <div className="activity-item">
                <div className="activity-left">
                  <div className="activity-icon purple">➕</div>
                  <div className="activity-info">
                    <span className="activity-text">
                      Created category • <span className="highlight">Full Stack Development</span>
                    </span>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <a href="#" className="activity-view">
                  View
                </a>
              </div>
              <div className="activity-item">
                <div className="activity-left">
                  <div className="activity-icon green">🏷</div>
                  <div className="activity-info">
                    <span className="activity-text">
                      Added tag • <span className="highlight">Vue.js</span>
                    </span>
                    <span className="activity-time">5 hours ago</span>
                  </div>
                </div>
                <a href="#" className="activity-view">
                  View
                </a>
              </div>
              <div className="activity-item">
                <div className="activity-left">
                  <div className="activity-icon blue">✏️</div>
                  <div className="activity-info">
                    <span className="activity-text">
                      Updated category • <span className="highlight">Web Design</span>
                    </span>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
                <a href="#" className="activity-view">
                  View
                </a>
              </div>
              <div className="activity-item">
                <div className="activity-left">
                  <div className="activity-icon teal">🏷</div>
                  <div className="activity-info">
                    <span className="activity-text">
                      Created tag • <span className="highlight">Django</span>
                    </span>
                    <span className="activity-time">2 days ago</span>
                  </div>
                </div>
                <a href="#" className="activity-view">
                  View
                </a>
              </div>
              <div className="activity-item">
                <div className="activity-left">
                  <div className="activity-icon orange">📁</div>
                  <div className="activity-info">
                    <span className="activity-text">
                      Added project to • <span className="highlight">Mobile Apps</span>
                    </span>
                    <span className="activity-time">3 days ago</span>
                  </div>
                </div>
                <a href="#" className="activity-view">
                  View
                </a>
              </div>
            </div>

            <div className="footer-actions">
              <button className="btn-reset">Reset To Default</button>
              <button className="btn-save">Save All Changes</button>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Cat;
