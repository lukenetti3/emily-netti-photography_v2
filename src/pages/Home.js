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
import HeroImg from "../images/heroCouple.jpg"
import EmilyThumbnail from "../images/emilyThumbnail.jpg"
import Ceremony from "../images/pastor.jpg"

const Home = () => (
  <main>
    <section className="container first-section">
      <div className="flex-1">
        <div className="col flex-2">
          <div className="t2-pad r2-pad hero">
            <h1>Emily Netti Photography</h1>
            <p>
              I'm a wedding & lifestyle photographer based in beautiful Upstate
              NY. I love people and getting to capture a sweet moment in your
              life. Let's get to know each other.
            </p>
          </div>
          <div className="flex-3">
            <div className="flex-1" style={{ padding: "2rem 1.5rem" }}>
              <div className="col">
                <img
                  className="thumbnail"
                  src={EmilyThumbnail}
                  alt="emily headshot"
                />
              </div>
              <div className="col">
                <h1>Hi Friend</h1>
                <p>
                  Emily Netti here! I am a marketer by trade, designer by
                  accident, and passionate about adding value to businesses. I
                  am Enneagram 3 and an ENFJ. I am self growth junkie with a
                  desire to constantly be improving and growing in every area of
                  my life.
                </p>
              </div>
            </div>
            <div className="row-special">
              <Link to="/portfolio/"className="white-link">Get to know me</Link>
              <FaLongArrowAltRight style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div className="col">
          <img className="Img" src={HeroImg} alt="bride and groom" />
        </div>
      </div>
    </section>

    <section className="container">
      <div className="banner">
        <div>
          <h2>I am Glad You Are Here!</h2>
          <p className="sub-heading">pick a gallery and start exploring</p>
        </div>
      </div>
      <div className="gallery-flex">
        <div className="gallery-card">
          <GalleryCard
            img={WeddingGallery}
            section="Weddings"
            description="explore weddings"
          />
        </div>
        <div className="gallery-card">
          <GalleryCard
            img={EngagementGallery}
            section="Engagement"
            description="explore engagement sessions"
          />
        </div>
      </div>

      <div className="gallery-flex">
        <div className="gallery-card">
          <GalleryCard
            img={LifestyleGallery}
            section="Lifestyle"
            description="explore lifestyle sessions"
          />
        </div>
        <div className="gallery-card">
          <GalleryCard
            img={EmilyGallery}
            section="About Emily"
            description="learn more about your photographer"
          />
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "50px" }}>
        <Link className="btn btn-bg-green">
          view portfolio
          <FaLongArrowAltRight className="arrow" />
        </Link>
      </div>
    </section>

    <section style={{ margin: "50px 0" }}>
      <Parallax
        blur={0}
        bgImage={Brides}
        bgImageAlt="bridesmaids"
        strength={600}
        style={{ backgroundSize: "center" }}
      >
        <div style={{ height: "500px" }} />
      </Parallax>
    </section>

    <section className="container">
      <div className="row">
        <img
          className="testimonial-col testimonial-img"
          src={Ceremony}
          alt="couple at the alter"
        />
        <div className="testimonial-block testimonial-col">
          <div className="x3-pad">
            <h1>Testimonials</h1>
            <p>
              'Emily is a calm, talented professional who was just wonderful to
              have alongside us on our wedding day. When looking for a
              photographer, we considered personality just as much as talent
              (they are the only person you'll spend more time with than your
              fiance!) and Emily hit it out of the park in both categories. She
              is one of the BEST decisions you can make about your wedding.'
            </p>
            <p>-Stephanie</p>
          </div>
        </div>
      </div>
    </section>

    <section className="banner banner-green">
        <div>
            <h2 style={{color: "white", paddingBottom: "20px"}}>Ready To Work Together?</h2>
            <Link className="btn btn-bg-white">Contact Me <FaLongArrowAltRight className="arrow-dark"/></Link>
        </div>
    </section>
  </main>
)

export default Home
