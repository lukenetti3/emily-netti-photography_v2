import React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaFacebookSquare } from "react-icons/fa"

const Footer = () => (
  <div className="footer-flex">
    <div className="col-3">
      <ul className="footer-list">
        <li className="footer-items">
          <Link to="/">Home</Link>
        </li>
        <li className="footer-items">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="footer-items">
          <Link to="/about">About</Link>
        </li>
        <li className="footer-items">
          <Link to="/investment">Investment</Link>
        </li>
        <li className="footer-items">
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
    </div>
    <div className="col-3">
      <p className="footer-text">wedding & lifestyle photographer</p>
      <p className="footer-text">Syracuse, NY</p>
      <hr style={{ width: "30%" }} />
      <a href="https://www.instagram.com/emilynetti/" target="_blank" rel="noopener noreferrer">
        <FaInstagram
          style={{ fontSize: "2rem", padding: ".5rem 1rem", color: "#585858" }}
        />
      </a>
      <a href="https://www.facebook.com/emilynetti/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare
          style={{ fontSize: "2rem", padding: ".5rem 1rem", color: "#585858" }}
        />
      </a>
    </div>
    <div className="col-3">
      <p className="footer-text">Now Booking</p>
      <p className="footer-text">{new Date().getFullYear()}</p>
      <p className="footer-text">Wedding & Lifestyle Sessions</p>
    </div>
  </div>
)

export default Footer
