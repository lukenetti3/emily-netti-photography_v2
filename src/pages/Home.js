import React from "react"
import { Link } from "gatsby"
import GalleryCard from "../components/GalleryCard"
import EmilyGallery from "../images/emilyGallery.jpg"
import EngagementGallery from "../images/engagementGallery.jpg"
import LifestyleGallery from "../images/lifestyleGallery.jpg"
import WeddingGallery from "../images/weddingGallery.jpg"
import { FaLongArrowAltRight } from "react-icons/fa"
import Brides from "../images/parallaxBrides.jpg"
import { Parallax } from "react-parallax"

const Home = () => (
  <main>
    <section className="hero-section main-margin">
      <div className="hero-text">
        <h1>Emily Netti Photography</h1>
        <p>
          I'm a wedding & lifestyle photographer based in beautiful Upstate NY.
          I love people and getting to capture a sweet moment in your life.
          Let's get to know each other.
        </p>
      </div>
      <div className="hero-bioBox">
        <div className="flex">
          <div className="col">
            <div className="emily-thumbnail"></div>
          </div>
          <div className="col bioBox-text">
            <h1 style={{ margin: "0" }}>Hi friend!</h1>
            <p>
              Emily Netti here! I am a marketer by trade, designer by accident,
              and passionate about adding value to businesses. I am Enneagram 3
              and an ENFJ. I am self growth junkie with a desire to constantly
              be improving and growing in every area of my life.
            </p>
          </div>
        </div>
        <div className="bioBox-link">
          <Link className="btn-text">get to know me</Link>
          <Link className="btn-text">
            <FaLongArrowAltRight className="arrow" />
          </Link>
        </div>
      </div>
      <div className="hero-img"></div>
    </section>

    <section className="gallery-section main-margin">
      <div className="banner">
        <div>
          <h1>I am Glad You Are Here!</h1>
          <h2 className="sub-heading">pick a gallery and start exploring</h2>
        </div>
      </div>
      <div className="gallery-grid">
        <GalleryCard
          img={WeddingGallery}
          section="Weddings"
          description="explore weddings"
        />
        <GalleryCard
          img={EngagementGallery}
          section="Engagement"
          description="explore engagement sessions"
        />
        <GalleryCard
          img={LifestyleGallery}
          section="Lifestyle"
          description="explore lifestyle sessions"
        />
        <GalleryCard
          img={EmilyGallery}
          section="About Emily"
          description="learn more about your photographer"
        />
      </div>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Link
          style={{ backgroundColor: "#9ca7a1", color: "white" }}
          className="primary-btn"
        >
          view portfolio
          <FaLongArrowAltRight className="arrow" />
        </Link>
      </div>
    </section>

    <section style={{ margin: "50px 0" }}>
      <Parallax
        bgImage={Brides}
        bgImageAlt="the cat"
        strength={600}
        style={{ backgroundSize: "center" }}
      >
        <div style={{ height: "500px" }} />
      </Parallax>
    </section>

    <section
      style={{ marginTop: "150px", marginBottom: "350px" }}
      className="main-margin"
    >
      <div className="testimonial-grid">
        <div className="testimonial-img"></div>
        <div className="testimonial-block">
          <h1>Testimonials</h1>
          <p>
            'Emily is a calm, talented professional who was just wonderful to
            have alongside us on our wedding day. When looking for a
            photographer, we considered personality just as much as talent (they
            are the only person you'll spend more time with than your fiance!)
            and Emily hit it out of the park in both categories. She is one of
            the BEST decisions you can make about your wedding.'
          </p>
          <p>-Stephanie</p>
        </div>
      </div>
    </section>
   
  </main>
)

export default Home
