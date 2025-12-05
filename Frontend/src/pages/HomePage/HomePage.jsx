import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className='Homepage'>


      {/* HERO SECTION */}
      <section className="hero">
        <h1>Plan. Manage. Execute.</h1>
        <p>
          A centralized platform for perfectly organized and beautifully 
          executed events. Manage participants, vendors, schedules, and 
          feedback—all in one place.
        </p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why Choose EventSphere?</h2>
        <div className="feature-boxes">
          <div className="box">
            <h3>User Dashboard</h3>
            <p>Register, enroll in events, download passes, and give reviews.</p>
          </div>

          <div className="box">
            <h3>Admin Panel</h3>
            <p>Create & manage events, check participants, and review feedback.</p>
          </div>

          <div className="box">
            <h3>Real-time Tracking</h3>
            <p>Monitor event progress and handle issues instantly.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 EventSphere. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
