import React from "react"
import Layout from "../components/Layout"
import ContactImg from "../images/ContactImg.jpg"
import FormImg from "../images/formImg.jpg"

function Contact() {
  return (
    <Layout>
      <section className="container t3-pad">
        <div className="contact-heading">
          <h1>Hi friend!</h1>
          <p className="contact-sub-heading">
            Let's get the party started. Fill out the form below or email me
            directly - emilynettiphotography@gmail.com.
          </p>
        </div>
      </section>

      <section className="container">
        <img className="contact-img" src={ContactImg} alt="bridal party" />
      </section>

      <section className="values-section">
        <div className="values-grid container">
          <div>
            <h2>My Core Values</h2>
          </div>
          <div>
            <h2>Customer Care</h2>
            <p>
              I have walked into past wedding clients homes to photograph their
              first born while I see wedding pictures hanging on the wall. I
              love my clients and I believe you deserve the best care.
            </p>
          </div>
          <div>
            <h2>Amazing Quality</h2>
            <p>
              My heart behind every image is that you love them as much as I do.
              My gear cleaned and ready to go for every session. I want you to
              have keepsakes that last generations to come.
            </p>
          </div>
          <div>
            <h2>Fun</h2>
            <p>
              I want everyone from a session to walk away feeling like they had
              fun! And for the gents, I love when I hear "this was way better
              than I thought it was going to be". That is my goal every session.
            </p>
          </div>
        </div>
      </section>

      <section className="container t3-pad">
        <div className="form-flex">
          <div className="form-col">
            <h2>Send A Note</h2>
            <p>
              I'd love to hear from you. Please send a note about your big day
              or lifestyle session. More details the better. Let's get this
              party started!!!
            </p>
            <form action="">
              <input type="text" placeholder="Enter full name" />
              <br />
              <input type="text" placeholder="Enter your email" />
              <br />
              <input type="text" placeholder="How did you hear about us?" />
              <br />
              <input type="text" placeholder="Wedding Date" />
              <br />
              <input type="text" placeholder="Wedding Venue" />
              <br />
              <input type="radio" name="style" />
              <label>Lifestyle</label>
              <br />
              <input type="radio" name="style" />
              <label>Wedding</label>
              <br />
              <textarea
                type="textarea"
                placeholder="Your Message"
                rows="6"
              ></textarea>
            </form>
          </div>
          <div className="form-col">
            <img className="form-img" src={FormImg} alt="couple kissing" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
