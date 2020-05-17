import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Parallax } from "react-parallax"
import { FaLongArrowAltRight } from "react-icons/fa"
import LukeEmForeheads from "../images/lukeEmForeheads.jpg"
import LukeEmLaughing from "../images/lukeEmLaughing.jpg"
import LukeEmWalking from "../images/lukeEmWalking.jpg"
import BarbAndrew from "../images/barbAndrew.jpg"

function About() {
  return (
    <Layout>
      <section className="section-padding container">
        <div className="about-heading">
          <h2 style={{ textAlign: "center" }}>Hello Ya Beautiful Human!</h2>
          <p>
            Emily Netti here. I am a marketer by trade, designer by accident,
            and passionate about adding value to businesses. I am Enneagram 3
            and an ENFJ. I am self growth junkie with a desire to constantly be
            improving and growing in every area of my life.
          </p>
          <p>
            I married my high school sweetheart, and together we threw caution
            to the wind and chase after big dreams. Actually, in reality, we
            have been planning and working nights/weekends to make this dream
            come true. We are dreamers. We are doers. And we are here to create
            some beauty in this world.
          </p>
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Link className="btn btn-bg-green">
              View My Work
              <FaLongArrowAltRight className="arrow" />
            </Link>
          </div>
        </div>
        <div className="about-img-grid">
          <img
            className="about-grid-1"
            src={LukeEmForeheads}
            alt="couple touching foreheads"
          />
          <img
            className="about-grid-2"
            src={LukeEmLaughing}
            alt="couple smiling"
          />
          <img
            className="about-grid-3"
            src={LukeEmWalking}
            alt="couple walking"
          />
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
              <p>
                In the midst of teachers, medical professionals, and engineers,
                I thought about life a little different. I have been an
                entrepreneur from day one. I was mowing lawns for the older
                neighbor, and saved every single penny to buy a camera. I was
                photographing and absorbing every kind of information I could
                get my hands on. I fell in love with capturing genuine moments.
                I loved photographing emotion.
              </p>
              <p>
                Photography paid my bills in college, supported two broke young
                married college kids, and allowed us to have a life we dreamed
                of. This has been so much more than a job. It’s been a lifestyle
                and a gift I get to live out every day.
              </p>
            </div>
            <div className="my-story-col">
              <p>
                I’ve realized the best experience to running a business that is
                personally fulfilling is to be personally connect with my
                clients. I allow people to join my story, because they are
                welcoming me into theirs. Getting to know you is the best part
                of my business.
              </p>
              <p>
                I care about serving people on one of the most special days of
                your life. My secret sauce to running a successful business?
                Care about people! It’s that simple. So, let’s keep getting to
                know each other. Continue learning more about my business by
                checking out the{" "}
                <Link to="/investment/" style={{ color: " #9ca7a1" }}>
                  investment section.{" "}
                </Link>{" "}
                If you're coffee is still warm and you aren't sure yet - keep
                viewing{" "}
                <Link to="/portfolio/" style={{ color: " #9ca7a1" }}>
                  our work.
                </Link>
              </p>
            </div>
          </div>
          <Link className="btn btn-bg-green" style={{ marginTop: "20px" }}>
            View My Work <FaLongArrowAltRight className="arrow" />
          </Link>
        </div>
      </section>

      {/* Parallax */}
      <section style={{ margin: "100px 0" }}>
        <Parallax
          blur={0}
          bgImage={BarbAndrew}
          bgImageAlt="bridesmaids"
          strength={600}
          bgClassName="right-parallax"
        >
          <div style={{ height: "450px"}} />
        </Parallax>
    
      </section>
    </Layout>
  )
}

export default About
