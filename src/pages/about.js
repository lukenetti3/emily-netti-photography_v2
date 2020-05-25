import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { Parallax } from "react-parallax"
import { FaLongArrowAltRight } from "react-icons/fa"
import { RichText } from "prismic-reactjs"
import Fade from "react-reveal/Fade"

function About({ data }) {
  const aboutData = data.prismic.allAbout_emilys.edges[0].node
  // aboutData.intro_paragraph[0].text
  return (
    <Layout>
      <section className="container t3-pad">
        <div className="about-heading">
          <Fade duration={2000}>
            <h2 className="about-title">
              {aboutData.intro_title[0].text}
            </h2>
            {RichText.render(aboutData.intro_paragraph)}
          </Fade>
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Link className="btn btn-bg-green" to="/portfolio">
              View My Work
              <FaLongArrowAltRight className="arrow" />
            </Link>
          </div>
        </div>
        <div className="about-img-grid">
          <Fade bottom>
            <img
              className="about-grid-1"
              src={aboutData.about_image_1.url}
              alt="couple touching foreheads"
            />
          </Fade>
          <img
            className="about-grid-2"
            src={aboutData.about_image_2.url}
            alt="couple smiling"
          />
          <Fade right delay={700}>
            <img
              className="about-grid-3"
              src={aboutData.about_image_3.url}
              alt="couple walking"
            />
          </Fade>
        </div>
      </section>

      {/* My Story Section */}
      <section className="container t2-pad">
        <div className="about-p">
          <div className="my-story-header">
            <h3>My Story</h3>
            <h2>
              My secret sauce to running a successful business?{" "}
              <span style={{ color: "#9ca7a1" }}>Care about people!</span>
            </h2>
          </div>
          <div className="my-story-p">
            <div className="my-story-col">
              {RichText.render(aboutData.story_paragraph_1)}
            </div>
            <div className="my-story-col">
              {RichText.render(aboutData.story_paragraph_2)}
            </div>
          </div>
          <Link
            className="btn btn-bg-green"
            style={{ marginTop: "20px" }}
            to="/portfolio"
          >
            View My Work <FaLongArrowAltRight className="arrow" />
          </Link>
        </div>
      </section>

      {/* Parallax */}
      <section style={{ margin: "100px 0" }}>
        <Parallax
          blur={0}
          bgImage={aboutData.parallax.url}
          bgImageAlt="bridesmaids"
          strength={600}
          bgClassName="right-parallax"
        >
          <div style={{ height: "450px" }} />
        </Parallax>
      </section>

      <section className="values-section">
        <div className="values-grid container">
          <div>
            <h2 style={{ marginBottom: "10px" }}>My Core Values</h2>
            <hr className="special-hr" />
          </div>
          <div>
            <h2>Customer Care</h2>
            <p>{aboutData.customer_care_paragraph[0].text}</p>
          </div>
          <div>
            <h2>Amazing Quality</h2>
            <p>{aboutData.amazing_quality_paragraph[0].text}</p>
          </div>
          <div>
            <h2>Fun</h2>
            <p>{aboutData.fun_paragraph[0].text}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allAbout_emilys {
        edges {
          node {
            intro_title
            intro_paragraph
            about_image_1
            about_image_2
            about_image_3
            story_paragraph_1
            story_paragraph_2
            parallax
            customer_care_paragraph
            amazing_quality_paragraph
            fun_paragraph
          }
        }
      }
    }
  }
`

export default About
