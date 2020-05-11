import React from "react"
import { FaLongArrowAltRight } from "react-icons/fa"

const GalleryCard = (props) => (
    <div>
        <div style={{
            backgroundImage: `url(${props.img})`,
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: "600px",
            maxWidth: '45em'
        }}>
            <div className="img-overlay">
                <div>
                    <h1>{props.section}</h1>
                    <p style={{fontSize: '.8em'}}>{ props.description.toUpperCase() } <FaLongArrowAltRight className="arrow-dark" /></p>
                    
                </div>
            </div>
        </div>
    </div>
)

export default GalleryCard