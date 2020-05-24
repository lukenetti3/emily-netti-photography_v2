import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

function Weddings({ data }) {
  const galleryData = data.prismic.allWedding_gallerys.edges[0].node

  return (
    <Layout>
      <section className="gallery-page t3-pad container">
        {galleryData.wedding_gallery.map(img => {
          const imgStyles =
            img.position === "Portrait"
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
      allWedding_gallerys {
        edges {
          node {
            wedding_gallery {
              image
              position
            }
          }
        }
      }
    }
  }
  `

// export const query = graphql`
//   {
//     prismic {
//       allWedding_gallerys {
//         edges {
//           node {
//             wedding_gallery {
//               image
//               position
//             }
//           }
//         }
//       }
//     }
//   }


export default Weddings
