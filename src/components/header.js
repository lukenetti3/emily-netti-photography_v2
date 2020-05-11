import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { RiMenu5Line } from "react-icons/ri"

function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuDropped, setIsMenuDropped] = useState(false)

    const hamburger = () => (
        <RiMenu5Line style={{
            fontSize: '30px', 
            color: "#585858", 
            alignSelf: "center",
            padding: '0.6em',
            verticalAlign: "middle",
            marginLeft: 'auto'
        }} className="hamburger" onClick={() => setIsMenuDropped(prevState => !prevState)}/>
    )

    const navLinks = () => ( 
        <ul>
            <Link><li>Home</li></Link>
            <Link><li>Portfolio</li></Link>
            <Link><li>About Emily</li></Link>
            <Link><li>Investment & FAQ</li></Link>
            <Link><li>Contact</li></Link>
        </ul>
    )

    function checkMobile() {
        if(window.innerWidth < 740) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        function handleWidth() {
            checkMobile()
        }

        checkMobile()
        window.addEventListener('resize', handleWidth)
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    },[])

    const menu = isMobile ? hamburger() : navLinks()
    
    function dropdown() {
        if(isMenuDropped) {
            return (
                navLinks()
            )
        }
    }

    return (
        <div>
            <nav>
                {menu}
                {dropdown()}
            </nav>
        <hr/>
    </div>
    )
}

export default Header