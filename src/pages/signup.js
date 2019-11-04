import React from "react"
import BuildYourTeam from "../components/home/Build-your-team"
import Button from "../components/utils/Button"
import ProjCycle from "../images/proj-cycle.png"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"


export default props => {
  const { data } = props
  return (
    <Layout>
      <SEO title="Sign Up" />
      <div className="banner-set">
        <div className="banner-title container">Sign Up</div>
        <Img fluid={props.data.services.childImageSharp.fluid} />
      </div>
      <div style={{ margin: "25px 150px" }}>
        <div className="container">
          Sign Up
        </div>

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

