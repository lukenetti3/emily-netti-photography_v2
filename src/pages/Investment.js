import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Parallax } from "react-parallax"
import { FaLongArrowAltRight } from "react-icons/fa"
import GalleryCard from "../components/GalleryCard"
import Brides from "../images/parallaxBrides.jpg"
import BarbAndrew from "../images/barbAndrew.jpg"
import BrideInvestment from "../images/brideInvestment.jpg"
import LifestyleInvestment from "../images/lifestyleInvestment.jpg"

function Investment() {
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
            <GalleryCard
              img={BrideInvestment}
              section="Weddings"
              description="Info For Weddings"
            />
          </div>
          <div className="investment-col">
            <GalleryCard
              img={LifestyleInvestment}
              section="Lifestyle"
              description="Info For Lifestyle Sessions"
            />
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
              src={Brides}
              alt="group of bridesmaids"
              className="process-img"
            />
            <h2>My Process</h2>
            <p>
              From start to finish we believe every couple deserves the best
              experience on their wedding day. Genuine and timeless images stem
              from an incredible experience from the first contact to the photo
              delivery. You deserve a day where the stress is off you and
              memories are created for a lifetime. If you love timeless wedding
              photos that will be passed down for generations, we can help!
            </p>
            <Link className="btn btn-bg-green" style={{ textAlign: "center" }}>
              Portfolio
            </Link>
          </div>
          <div className="process-col-2 process-facts">
            <div className="facts-container">
              <h2>Investment</h2>
              <p>
                Wedding collections begin at <strong>$2,000.</strong> All
                collections include digital files and online gallery and
                complimentary engagement session.
              </p>
              <hr />
              <h2>Travel</h2>
              <p>
                We are willing to travel worldwide to capture your beautiful
                wedding day!We offer wedding day collections that capture 8-10
                hours of coverageAll wedding collections come with a
                complimentary engagement session.
              </p>
              <hr />
              <h2>Coverage</h2>
              <p>We customize each wedding day experience to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="t3-pad">
        <Parallax
          blur={0}
          bgImage={BarbAndrew}
          bgImageAlt="bridesmaids"
          strength={600}
          bgClassName="right-parallax"
        >
          <div style={{ height: "450px" }} />
        </Parallax>
      </section>

      <section className="container t3-pad">
        <h2 className="qa-sub-heading">You've Got Questions I Have Answers</h2>
        <div className="qa-flex">
          <div className="qa-col">
            <h2>How Many Pictures Will I Get?</h2>
            <p>
              You will get 50-100 images per hour. For example, if you booked an
              eight hour day you can expect anywhere 400-800. I will let you in
              on a little secret I tend to over-deliver. ;)
            </p>
            <h2>What Are Next Steps?</h2>
            <p>
              I am flattered and overjoyed you want me to capture this special
              time in your life. First things first, let's learn more about each
              other by grabbing coffee or hopping on a call. From there, I will
              walk you through the entire wedding experience, dots some i's and
              crosses the t's, and then you could say we are Facebook official.
            </p>
          </div>
          <div className="qa-col">
            <h2>Do You Offer Payment Plans?</h2>
            <p>Absolutely! I customize every package to my couple.</p>
            <h2>Is This Worth It? Uncle Joe Bob Just Got A New Camera.</h2>
            <p>
              Yes, 100% yes it's worth it. Here's why, these are pictures you
              will have forever. If I had a penny for every bridesmaid that told
              me she wished she would have spent more on a photographer - I'd
              have several dollars. ;) I want your wedding day to be an
              incredible experience from start to finish. I will be your dress
              holding, bobby-pin giving, find the coordinator, locate great
              grandma, tell you that you look gorgeous, all-the-things
              photographer on your day.
            </p>
          </div>
        </div>
      </section>

      <section className="banner banner-green" style={{ marginTop: "50px" }}>
        <div>
          <h2 style={{ color: "white", padding: "0 20px" }}>
            Ready To Work Together?
          </h2>
          <Link className="btn btn-bg-white">
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
              src={Brides}
              alt="group of bridesmaids"
              className="process-img"
            />
            <h2>My Process</h2>
            <p>
              We love being with our clients through all the seasons of life.
              The privilege of capturing the most momentous moments in your life
              is a gift that we don’t take lightly. The lifestyle session is a
              chance to see your family grow over time and capture lasting
              memories. If you are someone who values capturing memories of all
              the growth, change, and beauty in life, we would love to chat with
              you.
            </p>
            <Link className="btn btn-bg-green" style={{ textAlign: "center" }}>
              Portfolio
            </Link>
          </div>
          <div className="process-col-2 process-facts">
            <div className="facts-container">
              <h2>Investment</h2>
              <p>
                Lifestyle sessions begin at <strong>$250.</strong> All
                collections include digital files and online gallery.
              </p>
              <hr />
              <h2>Travel</h2>
              <p>
                Lifestyle sessions can take place in the comfort of your home or
                a beautiful location. I love to travel!
              </p>
              <hr />
              <h2>Coverage</h2>
              <p>
                These sessions typically last anywhere from 30-60 minutes.You
                will receive an online gallery of all your images.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Investment
