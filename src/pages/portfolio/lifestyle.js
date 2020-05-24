import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

function Lifestyle({ data }) {
  const lifestyleData = data.prismic.allLifestyle_gallerys.edges[0].node
  console.log(lifestyleData)
  return (
    <Layout>
      <section className="gallery-page t3-pad container">
        {lifestyleData.lifestyle_gallery.map(img => {
          const imgStyles =
            img.orientation === "Portrait"
              ? "gallery-portrait"
              : "gallery-landscape"

          return (
            // <div className={imgStyles}>
            //   <img src={img.image.url} alt="" className="gallery-single lazyload"/>
            // </div>
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
      allLifestyle_gallerys {
        edges {
          node {
            lifestyle_gallery {
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