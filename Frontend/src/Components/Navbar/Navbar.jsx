// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional separate CSS for navbar

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EventSphere</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button className="login-btn">Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
