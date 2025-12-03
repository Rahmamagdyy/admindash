import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import './Maindash.css';
const Maindash = () => {
    return ( <>
    <section classNNameName='MainDash'>

    <Sidebar />

    
   <main classNName="main-content">

     <h1 className="page-title">Dashboard</h1>
    <p className="page-subtitle">Welcome back! Here's your portfolio overview</p>

    <div className="stats-grid">
        <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-value">1,247</div>
            <div className="stat-label">Visitors Today</div>
        </div>

        <div className="stat-card">
            <div className="stat-icon">👁️</div>
            <div className="stat-value">45,645</div>
            <div className="stat-label">Total Project Views</div>
        </div>

        <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-value">3,421</div>
            <div className="stat-label">Most Viewed<br />E-Commerce Platform</div>
        </div>

        <div className="stat-card new-messages">
            <div className="stat-icon">💬</div>
            <div className="stat-value">28</div>
            <div className="stat-label">
                Total Messages<br />
                <span className="new-badge">New Messages</span>
            </div>
        </div>
    </div>

    <div className="charts-row">
        <div className="chart-card">
            <h3 className="chart-title">Reports</h3>
            <div className="line-chart">
                <svg viewBox="0 0 400 200" className="chart-svg">
                    <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <polyline fill="none" stroke="#FF6B00" strokeWidth="3" points="0,140 50,120 100,100 150,130 200,80 250,110 300,90 350,120 400,70"/>
                    <circle cx="200" cy="80" r="5" fill="#FF6B00"/>
                </svg>
                <div className="chart-tooltip">2,678</div>
            </div>

            <div className="chart-labels">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
        </div>

        <div className="chart-card">
            <h3 className="chart-title">Analytics</h3>
            <div className="donut-chart">
                <svg viewBox="0 0 200 200" className="donut-svg">
                    <circle cx="100" cy="100" r="70" className="donut-bg"/>
                    <circle cx="100" cy="100" r="70" className="donut-blue" transform="rotate(-90 100 100)"/>
                    <circle cx="100" cy="100" r="70" className="donut-orange" transform="rotate(-90 100 100)"/>
                    <circle cx="100" cy="100" r="70" className="donut-gold" transform="rotate(-90 100 100)"/>

                    <text x="100" y="95" textAnchor="middle" className="donut-percentage">80%</text>
                    <text x="100" y="115" textAnchor="middle" className="donut-label">Conversion</text>
                </svg>
            </div>

            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color referrals"></span>
                    <span>Referrals</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color social"></span>
                    <span>Social Media</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color search"></span>
                    <span>Search</span>
                </div>
            </div>
        </div>
    </div>

    <div className="info-row">
        <div className="info-card">
            <h3 className="card-title">Recent Activity</h3>

            <div className="activity-item">
                <div>
                    <div className="activity-title">Project published</div>
                    <div className="activity-subtitle">E-Commerce Platform</div>
                </div>
                <div className="activity-time">2 hours ago</div>
            </div>

            <div className="activity-item">
                <div>
                    <div className="activity-title">New message received</div>
                    <div className="activity-subtitle">Sarah Johnson</div>
                </div>
                <div className="activity-time">5 hours ago</div>
            </div>

            <div className="activity-item">
                <div>
                    <div className="activity-title">Skill updated</div>
                    <div className="activity-subtitle">React Development</div>
                </div>
                <div className="activity-time">1 day ago</div>
            </div>

            <div className="activity-item">
                <div>
                    <div className="activity-title">Category created</div>
                    <div className="activity-subtitle">Branding</div>
                </div>
                <div className="activity-time">2 days ago</div>
            </div>
        </div>

        <div className="info-card">
            <h3 className="card-title">Top Projects This Week</h3>

            <div className="project-item">
                <div>
                    <div className="project-name">E-Commerce Platform</div>
                    <div className="project-views">3,421 views</div>
                </div>
                <div className="project-change positive">+9%</div>
            </div>

            <div className="project-item">
                <div>
                    <div className="project-name">Mobile Banking App</div>
                    <div className="project-views">2,847 views</div>
                </div>
                <div className="project-change positive">+5%</div>
            </div>

            <div className="project-item">
                <div>
                    <div className="project-name">Dashboard Design System</div>
                    <div className="project-views">2,103 views</div>
                </div>
                <div className="project-change negative">-3%</div>
            </div>
        </div>
    </div>

    <div className="mini-charts-row">
        <div className="mini-chart-card">
            <div className="mini-chart-header">
                <span className="mini-chart-icon">👥</span>
                <div>
                    <div className="mini-chart-label">Total Clients</div>
                    <div className="mini-chart-change">+1400 New Added</div>
                </div>
            </div>

            <div className="mini-chart-value">500</div>

            <svg viewBox="0 0 300 80" className="mini-line-chart"></svg>
        </div>

        <div className="mini-chart-card">
            <div className="mini-chart-header">
                <span className="mini-chart-icon">🛍️</span>
                <div>
                    <div className="mini-chart-label">Total Projects</div>
                    <div className="mini-chart-change">+1000 This Month</div>
                </div>
            </div>

            <div className="mini-chart-value">2,344</div>

            <svg viewBox="0 0 300 80" className="mini-line-chart"></svg>
        </div>
    </div>

    <div className="bar-charts-row">
        <div className="bar-chart-card">
            <h3 className="card-title">Total Clients</h3>

            <div className="bar-item">
                <span className="bar-label">Jan</span>
                <div className="bar-container"><div className="bar bar-orange bar-jan"></div></div>
                <span className="bar-value">23,400</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Feb</span>
                <div className="bar-container"><div className="bar bar-blue bar-feb"></div></div>
                <span className="bar-value">14,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Mar</span>
                <div className="bar-container"><div className="bar bar-orange bar-mar"></div></div>
                <span className="bar-value">18,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Apr</span>
                <div className="bar-container"><div className="bar bar-blue bar-apr"></div></div>
                <span className="bar-value">22,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">May</span>
                <div className="bar-container"><div className="bar bar-blue bar-may"></div></div>
                <span className="bar-value">10,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Jun</span>
                <div className="bar-container"><div className="bar bar-orange bar-jun"></div></div>
                <span className="bar-value">23,800</span>
            </div>
        </div>

        <div className="bar-chart-card">
            <h3 className="card-title">Total Projects</h3>

            <div className="bar-item">
                <span className="bar-label">Jan</span>
                <div className="bar-container"><div className="bar bar-orange proj-jan"></div></div>
                <span className="bar-value">23,400</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Feb</span>
                <div className="bar-container"><div className="bar bar-blue proj-feb"></div></div>
                <span className="bar-value">15,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Mar</span>
                <div className="bar-container"><div className="bar bar-orange proj-mar"></div></div>
                <span className="bar-value">20,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Apr</span>
                <div className="bar-container"><div className="bar bar-blue proj-apr"></div></div>
                <span className="bar-value">22,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">May</span>
                <div className="bar-container"><div className="bar bar-blue proj-may"></div></div>
                <span className="bar-value">10,000</span>
            </div>

            <div className="bar-item">
                <span className="bar-label">Jun</span>
                <div className="bar-container"><div className="bar bar-orange proj-jun"></div></div>
                <span className="bar-value">23,400</span>
            </div>
        </div>
    </div>

    <div className="monthly-views-card">
        <h3 className="card-title">Monthly Views</h3>

        <div className="monthly-item">
            <span className="month-label">Jan</span>
            <div className="month-bar-container"><div className="month-bar jan"></div></div>
            <span className="month-value">3,200</span>
        </div>

        <div className="monthly-item">
            <span className="month-label">Feb</span>
            <div className="month-bar-container"><div className="month-bar feb"></div></div>
            <span className="month-value">3,800</span>
        </div>

        <div className="monthly-item">
            <span className="month-label">Mar</span>
            <div className="month-bar-container"><div className="month-bar mar"></div></div>
            <span className="month-value">4,200</span>
        </div>

        <div className="monthly-item">
            <span className="month-label">Apr</span>
            <div className="month-bar-container"><div className="month-bar apr"></div></div>
            <span className="month-value">3,900</span>
        </div>

        <div className="monthly-item">
            <span className="month-label">May</span>
            <div className="month-bar-container"><div className="month-bar may"></div></div>
            <span className="month-value">4,500</span>
        </div>
    </div>

    <div className="action-buttons">
        <button className="btn btn-secondary">Cancele</button>
        <button className="btn btn-secondary">Save Changes</button>
        <button className="btn btn-primary">Generate</button>
    </div>
    </main>


    </section>
    </> );
}
 
export default Maindash;