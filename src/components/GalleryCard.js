import React from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "gatsby"


function GalleryCard(props) {

    const imgStyles = props.tall ? "gallery-tall" : "gallery-img"
    const bannerStyles = props.tall ? "gallery-tall-overlay" : "gallery-img-overlay"

    return(
        <div>
            <img src={props.img} alt="" className={imgStyles}/>
            <div className={bannerStyles}>
                <Link to={props.link}>
                    <div>
                        <h1>{props.section}</h1>
                        <p style={{fontSize: '.8em'}}>{ props.description.toUpperCase() } <FaLongArrowAltRight className="arrow-dark" /></p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default GalleryCard