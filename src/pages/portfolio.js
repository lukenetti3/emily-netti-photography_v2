import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import GalleryCard from "../components/GalleryCard"
import Fade from "react-reveal/Fade"

const Portfolio = ({data}) => {
  const portfolioData = data.prismic.allPortfolio_pages.edges[0].node
  // portfolioData.weddings_image.url
  return (
    <Layout pageTitle="Portfolio" pageDescription="Weddings, engagements, or lifestyle. I do it all. Explore either of these sections to learn more.">
      <section style={{ marginTop: "5rem" }}>
        <div className="portfolio-row">
          <div className="p-col">
            <Fade delay={200} duration={2300}>
            <GalleryCard
              img={portfolioData.weddings_image.url}
              section="Weddings"
              description="Explore Weddings"
              tall={true}
              link="/portfolio/weddings"
            />
            </Fade>
          </div>
          <div className="p-col">
            <Fade delay={700} duration={2300}>
            <GalleryCard
              img={portfolioData.engaged_image.url}
              section="Engaged"
              description="Explore Engagement Sessions"
              tall={true}
              link="/portfolio/engagement"
            />
            </Fade>
          </div>
          <div className="p-col">
            <Fade delay={1200} duration={2300}>
            <GalleryCard
              img={portfolioData.lifestyle_image.url}
              section="Lifestyle"
              description="Explore Lifestyle"
              tall={true}
              link="/portfolio/lifestyle"
            />
            </Fade>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allPortfolio_pages {
        edges {
          node {
            weddings_image
            engaged_image
            lifestyle_image
          }
        }
      }
    }
  }
`

export default Portfolio
