import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { Parallax } from "react-parallax"
import { FaLongArrowAltRight } from "react-icons/fa"
import { RichText } from "prismic-reactjs"
import Fade from "react-reveal/Fade"

function Investment({ data }) {
  const investmentData = data.prismic.allInvestments.edges[0].node

  return (
    <Layout>
      <section className="t3-pad container">
        <div className="investment-banner">
          <h1 className="investment-title">What Are You Looking For?</h1>
          <p className="investment-subheading">Click on the photo below</p>
        </div>
      </section>

      <section className="container t2-pad">
        <div className="investment-flex">
          <div className="investment-col">
            <Fade delay={300}>
              <div>
                <a href="#wedding-process">
                  <img
                    src={investmentData.weddings_image.url}
                    alt=""
                    className="gallery-img"
                  />
                </a>
                <div className="gallery-img-overlay">
                  <a href="#wedding-process">
                    <div>
                      <h1>Weddings</h1>
                      <p style={{ fontSize: ".8em" }}>
                        {"Info For Weddings".toUpperCase()}{" "}
                        <FaLongArrowAltRight className="arrow-dark" />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
          <div className="investment-col">
            <Fade delay={500}>
              <div>
                <a href="#lifestyle-process">
                  <img
                    src={investmentData.lifestyle_image.url}
                    alt=""
                    className="gallery-img"
                  />
                </a>
                <div className="gallery-img-overlay">
                  <a href="#lifestyle-process">
                    <div>
                      <h1>Lifestyle</h1>
                      <p style={{ fontSize: ".8em" }} id="wedding-process">
                        {"Info For Lifestyle Sessions".toUpperCase()}{" "}
                        <FaLongArrowAltRight className="arrow-dark" />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <h2 style={{ textAlign: "center", padding: "50px 0" }}>
        Wedding Experience
      </h2>

      <section className="container">
        <div className="process-grid">
          <div className="process-col">
            <img
              src={investmentData.wedding_process_image.url}
              alt="group of bridesmaids"
              className="process-img"
            />
            <h2>My Process</h2>
            <p>{RichText.render(investmentData.wedding_process_paragraph)}</p>
            <Link
              to="/portfolio"
              className="btn btn-bg-green"
              style={{ textAlign: "center" }}
            >
              Portfolio
            </Link>
          </div>
          <div className="process-col-2 process-facts">
            <div className="facts-container">
              <h2>Investment</h2>
              {RichText.render(investmentData.wedding_investment)}
              <hr />
              <h2>Travel</h2>
              {RichText.render(investmentData.wedding_travel)}
              <hr />
              <h2>Coverage</h2>
              {RichText.render(investmentData.wedding_coverage)}
            </div>
          </div>
        </div>
      </section>

      <section className="t3-pad">
        <Parallax
          blur={0}
          bgImage={investmentData.parallax.url}
          bgImageAlt="bridesmaids"
          strength={600}
          bgClassName="right-parallax"
        >
          <div style={{ height: "450px" }} />
        </Parallax>
      </section>

      <section className="container t3-pad">
        <h2 className="qa-sub-heading">You've Got Questions I Have Answers</h2>
        <div className="qa-grid">
          {console.log(investmentData.faq)}
          {investmentData.faq.map(item => {
            return (
              <div className="qa-col">
                <h2>{item.question[0].text}</h2>
                <p>{item.answer[0].text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="banner banner-green" style={{ marginTop: "50px" }}>
        <div>
          <h2 style={{ color: "white", padding: "0 20px" }}>
            Ready To Work Together?
          </h2>
          <Link
            to="/contact"
            className="btn btn-bg-white"
            id="lifestyle-process"
          >
            Contact Me <FaLongArrowAltRight className="arrow-dark" />
          </Link>
        </div>
      </section>

      <h2 style={{ textAlign: "center", padding: "50px 0" }}>
        Lifestyle Session
      </h2>

      <section className="container">
        <div className="process-grid">
          <div className="process-col">
            <img
              src={investmentData.lifestyle_process_image.url}
              alt="group of bridesmaids"
              className="process-img"
            />
            <h2>My Process</h2>
            {RichText.render(investmentData.lifestyle_process_paragraph)}
            <Link
              to="/portfolio"
              className="btn btn-bg-green"
              style={{ textAlign: "center" }}
            >
              Portfolio
            </Link>
          </div>
          <div className="process-col-2 process-facts">
            <div className="facts-container">
              <h2>Investment</h2>
              {RichText.render(investmentData.lifestyle_investment_paragraph)}
              <hr />
              <h2>Travel</h2>
              {RichText.render(investmentData.lifestyle_travel_paragraph)}
              <hr />
              <h2>Coverage</h2>
              {RichText.render(investmentData.lifestyle_coverage_paragraph)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allInvestments {
        edges {
          node {
            weddings_image
            lifestyle_image
            wedding_process_image
            wedding_process_paragraph
            wedding_investment
            wedding_travel
            wedding_coverage
            parallax
            faq {
              question
              answer
            }
            lifestyle_process_image
            lifestyle_process_paragraph
            lifestyle_investment_paragraph
            lifestyle_travel_paragraph
            lifestyle_coverage_paragraph
          }
        }
      }
    }
  }
`

export default Investment
