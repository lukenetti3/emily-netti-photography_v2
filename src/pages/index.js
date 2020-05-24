import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import GalleryCard from "../components/GalleryCard"
import { FaLongArrowAltRight } from "react-icons/fa"
import { Parallax } from "react-parallax"
import Fade from "react-reveal/Fade"

function Index({ data }) {
  const homeData = data.prismic.allHome_pages.edges[0].node
  // homeData.friend_paragraph[0].text
  // homeData.hero_paragraph[0].text
  // homeData.hero_image.url
  return (
    <Layout>
      <main>
        <section className="container first-section">
          <div className="flex-1">
            <div className="col flex-2">
              <div className="t2-pad r2-pad hero">
                <h1>Emily Netti Photography</h1>
                <p>{homeData.hero_paragraph[0].text}</p>
              </div>
              <div className="flex-3">
                <div className="flex-1" style={{ padding: "2rem 1.5rem" }}>
                  <div className="col">
                    <img
                      className="thumbnail"
                      src={homeData.personal_thumbnail.url}
                      alt="emily headshot"
                    />
                  </div>
                  <div className="col">
                    <h1>Hi Friend!</h1>
                    <p>{homeData.friend_paragraph[0].text}</p>
                  </div>
                </div>
                <Link to="/about" className="row-special">
                  <Link to="/about" className="white-link">
                    Get to know me
                  </Link>
                  <FaLongArrowAltRight style={{ color: "white" }} />
                </Link>
              </div>
            </div>
            <div className="col">
              <img
                className="Img"
                src={homeData.hero_image.url}
                alt="bride and groom"
              />
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
              <Fade>
                <GalleryCard
                  img={homeData.top_left_image.url}
                  section="Weddings"
                  description="explore weddings"
                  link="/portfolio/weddings"
                />
              </Fade>
            </div>
            <div className="gallery-card">
              <Fade>
                <GalleryCard
                  img={homeData.top_right_image.url}
                  section="Engagement"
                  description="explore engagement sessions"
                  link="/portfolio/engagement"
                />
              </Fade>
            </div>
          </div>

          <div className="gallery-flex">
            <div className="gallery-card">
              <Fade bottom>
                <GalleryCard
                  img={homeData.bottom_left_image.url}
                  section="Lifestyle"
                  description="explore lifestyle sessions"
                  link="/portfolio/lifestyle"
                />
              </Fade>
            </div>
            <div className="gallery-card">
              <Fade bottom delay={300}>
                <GalleryCard
                  img={homeData.bottom_right_image.url}
                  section="About Emily"
                  description="learn more about your photographer"
                  link="/about"
                />
              </Fade>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "50px" }}>
            <Link to="/portfolio" className="btn btn-bg-green">
              view portfolio
              <FaLongArrowAltRight className="arrow" />
            </Link>
          </div>
        </section>

        <section style={{ margin: "50px 0" }}>
          <Parallax
            blur={0}
            bgImage={homeData.parallax.url}
            bgImageAlt="bridesmaids"
            strength={600}
            style={{ backgroundSize: "center" }}
          >
            <div style={{ height: "500px" }} />
          </Parallax>
        </section>

        <section className="container">
          <div className="row">
            <Fade left>
              <img
                className="testimonial-col testimonial-img"
                src={homeData.testimonial_image.url}
                alt="couple at the alter"
              />
            </Fade>
            <Fade right>
              <div className="testimonial-block testimonial-col">
                <div className="x3-pad">
                  <h1>Testimonials</h1>
                  <p>{homeData.testimonial[0].text}</p>
                  <p>-Stephanie</p>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        <section className="banner banner-green">
          <div>
            <h2 style={{ color: "white", paddingBottom: "20px" }}>
              Ready To Work Together?
            </h2>
            <Link to="/contact/" className="btn btn-bg-white">
              Contact Me <FaLongArrowAltRight className="arrow-dark" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allHome_pages {
        edges {
          node {
            friend_paragraph
            hero_paragraph
            top_right_image
            top_left_image
            bottom_right_image
            bottom_left_image
            hero_image
            personal_thumbnail
            parallax
            testimonial_image
            testimonial
          }
        }
      }
    }
  }
`

export default Index
