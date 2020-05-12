import React, { useState } from "react"
import { Link } from "gatsby"
import { RiMenu5Line } from "react-icons/ri"

function Header() {
  const [mobile, setMobile] = useState(null)

  function dropDown() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          paddingLeft: "0",
          position: "absolute",
          backgroundColor: "white"
        }}
        className="dropdown"
      >
        <Link><li>Home</li></Link>
        <Link><li>Portfolio</li></Link>
        <Link><li>About Emily</li></Link>
        <Link><li>Investment & faq</li></Link>
        <Link><li>Contact</li></Link>
      </div>
    )
  }

  return (
    <div>
      <nav>
        <ul>
          <Link><li>Home</li></Link>
          <Link><li>Portfolio</li></Link>
          <Link><li>About Emily</li></Link>
          <Link><li>Investment & faq</li></Link>
          <Link><li>Contact</li></Link>
          <p className="hamburger" onClick={() => setMobile(prev => !prev)}>
            <RiMenu5Line style={{ fontSize: "25px" }} />
          </p>
        </ul>
        {mobile ? dropDown() : null}
      </nav>
      <hr/>
    </div>
  )
}

export default Header
