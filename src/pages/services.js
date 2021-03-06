import React from "react"
import { graphql } from "gatsby"
import BuildYourTeam from "../components/home/Build-your-team"
import Button from "../components/utils/Button"
import ProjCycle from "../images/proj-cycle.png"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default props => {
  return (
    <Layout>
      <SEO title="Services" />
      <div className="banner-set">
        <div className="banner-title container">Services</div>
        <Img fluid={props.data.services.childImageSharp.fluid} />
      </div>
      <div style={{ margin: "25px 150px" }}>
        <div className="container">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </div>
        <BuildYourTeam id="buildTeam"></BuildYourTeam>

        <div className="container" id="platform">
          <div>Platform</div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src={ProjCycle} className="img-fluid" />
            <div>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter. Lorem ipsum, or lipsum as it
              is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown
              typesetter.
            </div>
          </div>
        </div>
        <Button
          title="Sign Up"
          backGroundColor="#BC59A8"
          border="1px solid #BC59A8"
          height="36px"
          borderRadius="3px"
          color="#ffffff"
          opacity={1}
          title="Get Started"
          id="getStarted"
        />
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
