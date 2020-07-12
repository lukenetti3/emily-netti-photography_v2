import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from "react-helmet"
import "../styles.scss"

const Layout = ({ pageTitle, pageDescription, children }) => (
  <>
    <Helmet>
      <title>{`${pageTitle} | Emily Netti Photography`}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Emily Netti" />
      <meta name="description" content={pageDescription} />
    </Helmet>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </>
)

export default Layout
