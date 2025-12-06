// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Events from './pages/EventsPage/Events';
import Contacts from './pages/ContactsPage/Contacts';
import Photos from './pages/GalleryPage/Photos';
import Login from './pages/loginPage/login';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function AppRoutes() {
  return (
    <Router>
      {/* Navbar must be inside the Router */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
        {<Route path="/gallery" element={<Photos />} /> }
      </Routes>
    </Router>
  );
}

export default AppRoutes;
