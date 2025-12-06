//rfce
import React from 'react'
import "./Contacts.css"

function Contacts() {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="overlay"></div>
        <h1 className="hero-title">CONTACT US</h1>
      </section>

      {/* MAIN CONTACT PANEL */}
      <section className="contact-panel">
        <div className="panel-overlay"></div>

        <div className="panel-content">
          <h2 className="panel-title">Let's Plan Your Next Event</h2>

          <div className="contact-grid">
            <div className="contact-item">
              <h3 className="item-title">Phone</h3>
              <p className="item-text">+918080104230</p>
            </div>

            <div className="contact-item">
              <h3 className="item-title">Address</h3>
              <p className="item-text">near Elpro company Chinchawad, Pune pin-code:411003</p>
            </div>

            <div className="contact-item">
              <h3 className="item-title">Mail</h3>
              <p className="item-text">mcaevent123@.com</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contacts
