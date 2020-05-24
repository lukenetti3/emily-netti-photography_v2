import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/Layout"
import { useForm } from "react-hook-form"

function Contact({data}) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  const contactData = data.prismic.allContact_pages.edges[0].node
  const aboutData = data.prismic.allAbout_emilys.edges[0].node

  return (
    <Layout>
      <section className="container t3-pad">
        <div className="contact-heading">
          <h1>Hi friend!</h1>
          <p className="contact-sub-heading">
            {contactData.contact_paragraph[0].text}
          </p>
        </div>
      </section>

      <section className="container">
        <img className="contact-img" src={contactData.contact_image.url} alt="bridal party" />
      </section>

      <section className="values-section">
        <div className="values-grid container">
          <div>
            <h2>My Core Values</h2>
          </div>
          <div>
            <h2>Customer Care</h2>
            {RichText.render(aboutData.customer_care_paragraph)}
          </div>
          <div>
            <h2>Amazing Quality</h2>
            {RichText.render(aboutData.amazing_quality_paragraph)}
          </div>
          <div>
            <h2>Fun</h2>
            {RichText.render(aboutData.fun_paragraph)}
          </div>
        </div>
      </section>

      <section className="container t3-pad">
        <div className="form-flex">
          <div className="form-col">
            <h2>Send A Note</h2>
            {RichText.render(contactData.form_text)}
            <form onSubmit={handleSubmit(onSubmit)} method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
              <input
                type="text"
                placeholder="Enter your full name"
                name="Name"
                ref={register({ required: true, maxLength: 80 })}
              />
              <input
                type="text"
                placeholder="Enter your email"
                name="Email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <input
                type="text"
                placeholder="How did you hear about us?"
                name="How did you hear"
                ref={register({ required: true })}
              />
              <input
                type="text"
                placeholder="Wedding Date"
                name="Date"
                ref={register}
              />
              <input
                type="text"
                placeholder="Wedding Venue"
                name="Venue"
                ref={register}
              />

              <input
                className="first-radio"
                name="Style"
                type="radio"
                value="Lifestyle"
                ref={register({ required: true })}
              />
              <label htmlFor="styleInput">Lifestyle</label>
              <br />
              <input
                name="Style"
                type="radio"
                value=" Wedding"
                ref={register({ required: true })}
              />
              <label htmlFor="styleInput">Wedding</label>
              <br />
              <textarea
                name="Message"
                ref={register}
                type="textarea"
                placeholder="Message"
                rows="6"
              />

              <input type="submit" />
            </form>
          </div>
          <div className="form-col">
            <img className="form-img" src={contactData.form_image.url} alt="couple kissing" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  prismic {
    allContact_pages {
      edges {
        node {
          contact_paragraph
          contact_image
          form_text
          form_image
        }
      }
    }
    allAbout_emilys {
      edges {
        node {
          customer_care_paragraph
          amazing_quality_paragraph
          fun_paragraph
        }
      }
    }
  }
}
`

export default Contact
