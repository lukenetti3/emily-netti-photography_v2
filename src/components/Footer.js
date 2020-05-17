import React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaFacebookSquare } from "react-icons/fa"

const Footer = () => (
  <div className="footer-flex">
    <div className="col-3">
      <ul className="footer-list">
        <li className="footer-items"><Link >Home</Link></li>
        <li className="footer-items"><Link>Portfolio</Link></li>
        <li className="footer-items"><Link>Contact</Link></li>
        <li className="footer-items"><Link>Investment</Link></li>
        <li className="footer-items"><Link>About</Link></li>
      </ul>
    </div>
    <div className="col-3">
      <p className="footer-text">wedding & lifestyle photographer</p>
      <p className="footer-text">Syracuse, NY</p>
      <hr style={{width: "30%"}}/>
      <FaInstagram style={{fontSize: "2rem", padding: ".5rem 1rem", color: "#585858"}}/>
      <FaFacebookSquare style={{fontSize: "2rem", padding: ".5rem 1rem", color: "#585858"}}/>
    </div>
    <div className="col-3">
      <p className="footer-text">Now Booking</p>
      <p className="footer-text">20201</p>
      <p className="footer-text">Wedding & Lifestyle Sessions</p>
    </div>
  </div>
)

export default Footer
