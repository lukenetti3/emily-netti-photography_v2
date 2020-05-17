import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { FaLongArrowAltRight } from "react-icons/fa"
import LukeEmForeheads from "../images/lukeEmForeheads.jpg"
import LukeEmLaughing from "../images/lukeEmLaughing.jpg"
import LukeEmWalking from "../images/lukeEmWalking.jpg"
import BarbAndrew from "../images/barbAndrew.jpg"

function About() {
  return (
    <Layout>
      <section className="section-padding container">
        <div className="about-heading">
          <h2 style={{ textAlign: "center" }}>Hello Ya Beautiful Human!</h2>
          <p>
            Emily Netti here. I am a marketer by trade, designer by accident,
            and passionate about adding value to businesses. I am Enneagram 3
            and an ENFJ. I am self growth junkie with a desire to constantly be
            improving and growing in every area of my life.
          </p>
          <p>
            I married my high school sweetheart, and together we threw caution
            to the wind and chase after big dreams. Actually, in reality, we
            have been planning and working nights/weekends to make this dream
            come true. We are dreamers. We are doers. And we are here to create
            some beauty in this world.
          </p>
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Link className="btn btn-bg-green">
              View My Work
              <FaLongArrowAltRight className="arrow" />
            </Link>
          </div>
        </div>
        <div className="about-img-grid">
            <img className="about-grid-1" src={LukeEmForeheads} alt="couple touching foreheads"/>
            <img className="about-grid-2" src={LukeEmLaughing} alt="couple smiling"/>
            <img className="about-grid-3" src={LukeEmWalking} alt="couple walking"/>
        </div>
      </section>
    </Layout>
  )
}

export default About
