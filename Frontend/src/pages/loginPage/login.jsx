import React from 'react'
import "./login.css"

function login() {
  return (
   <div className="login-bg">
      <div className="login-container">
        <h2 className="title">Event Login Form</h2>

        <div className="form-box">
          <h3 className="subtitle">Login Form</h3>

          <div className="input-group">
            <label>User Name</label>
            <input type="text" placeholder="Enter Username" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me ?</label>
          </div>

          <button className="login-btn">Login</button>

          <p className="forgot">Forgot password?</p>
        </div>

        <p className="footer">
          © 2017 Event Login Form. All rights reserved | Design by W3layouts
        </p>
      </div>
    </div>
  )
}

export default login

