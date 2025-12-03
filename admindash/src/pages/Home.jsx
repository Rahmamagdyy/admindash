import React, { Component } from 'react';
import './Home.css';
const Home = () => {
    return (

        <>
        
       

        <div className="screen-container active" id="login">
      <div className="login-screen">
        <div className="login-box">
          <div className="login-logo">
            <h1>Admin Dashboard</h1>
            <p>Sign in to manage your portfolio</p>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="form-options">
              <div className="checkbox-group">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  

        </>
      );
}
 
export default Home;