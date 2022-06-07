import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="main-box">
      <div className="hero-gradient-bg" role="region">
        <div className="gradient gradient-1" ></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
        <div className="gradient gradient-4"></div>
      </div>
      <div className="logo-wrapper">
        <img src="/logo.svg" className="logo" />
        <img src="/studio.svg" className="studio" />
        <div className="link">
          <a href="http://twitter.com/realvjy" target="_blank">Contact Us</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
