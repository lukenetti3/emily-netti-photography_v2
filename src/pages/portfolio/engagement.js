import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

function Lifestyle({ data }) {
  const engagementData = data.prismic.allEngagement_gallerys.edges[0].node

  return (
    <Layout>
      <section className="gallery-page t3-pad container">
        {engagementData.engagement_gallery.map(img => {
          const imgStyles =
            img.orientation === "Portrait"
              ? "gallery-portrait"
              : "gallery-landscape"

          return (
            <div className={imgStyles}>
              <img src={img.image.url} alt="" className="gallery-single"/>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allEngagement_gallerys {
        edges {
          node {
            engagement_gallery {
              image
              orientation
            }
          }
        }
      }
    }
  }
`

export default Lifestyle