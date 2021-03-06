import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default props => {
  const { data } = props
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="banner-set">
        <div className="banner-title container">FAQ</div>
        <Img fluid={props.data.services.childImageSharp.fluid} />
      </div>
      <div style={{ margin: "25px 150px" }}>
        <div className="container">FAQ</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    projCycle: file(relativePath: { eq: "proj-cycle.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    services: file(relativePath: { eq: "services-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
