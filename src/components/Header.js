import React, { useState } from "react"
import { Link } from "gatsby"
import { RiMenu5Line } from "react-icons/ri"

function Header() {
  const [mobile, setMobile] = useState(null)

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  function dropDown() {
    return (
      <ul className="nav-list-mobile">
        <li className="nav-item-mobile">
          <Link to="/" className="nav-link link-mobile">
            Home
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link to="/portfolio/" className="nav-link link-mobile">
            Portfolio
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link to="/about/" className="nav-link link-mobile">
            About Emily
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link to="/investment/" className="nav-link link-mobile">
            Investment & FAQ
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link to="/contact/" className="nav-link link-mobile">
            Contact
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link
            to="/contact/"
            className="nav-link link-mobile btn btn-bg-green"
            style={{ color: "white" }}
          >
            Book Now
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio/" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about/" className="nav-link">
              About Emily
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/investment/" className="nav-link">
              Investment & FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact/"
              className="nav-link btn btn-bg-green"
              style={{
                color: "white",
                fontSize: "12px",
                margin: "0",
                padding: "0.8rem 1.7rem",
              }}
            >
              Book Now
            </Link>
          </li>
          <RiMenu5Line
            className="hamburger"
            style={{ fontSize: "25px" }}
            onClick={() => setMobile(prev => !prev)}
          />
        </ul>
        {mobile ? dropDown() : null}
      </nav>
    </div>
  )
}

export default Header
