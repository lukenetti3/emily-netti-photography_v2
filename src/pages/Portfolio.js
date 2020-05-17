import React from "react"
import Layout from "../components/Layout"
import EmilyGallery from "../images/emilyGallery.jpg"
import GalleryCard from "../components/GalleryCard"
import BarnBridal from "../images/BarnBridalParty.jpg"
import EngagementGallery from "../images/engagementGallery.jpg"

const Portfolio = () => (
  <Layout>
    <section style={{ marginTop: "5rem" }}>
      <div className="portfolio-row">
        <div className="p-col">
          <GalleryCard
            img={BarnBridal}
            section="Weddings"
            description="Explore Weddings"
            tall={true}
          />
        </div>
        <div className="p-col">
          <GalleryCard
            img={EngagementGallery}
            section="Engaged"
            description="Explore Engagement Sessions"
            tall={true}
          />
        </div>
        <div className="p-col">
          <GalleryCard
            img={EmilyGallery}
            section="About Emily"
            description="learn more about your photographer"
            tall={true}
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default Portfolio
