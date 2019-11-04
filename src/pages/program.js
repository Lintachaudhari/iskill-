import React from "react"
import BuildYourTeam from "../components/home/Build-your-team"
import Button from "../components/utils/Button"
import ProjCycle from "../images/proj-cycle.png"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(JSON.stringify(data))
  return (
    <Layout>
      <SEO title="Services" />
      <div className="banner-set">
        <div className="banner-title container">Program</div>
        <Img fluid={data.services.childImageSharp.fluid} />
      </div>
      <div className="container">
        {data.program.edges.map(({ node }, i) => (
          <div key={i}>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <BuildYourTeam id="buildTeam"></BuildYourTeam>

      <div className="container" id="platform">
        <div>Platform</div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <img src={ProjCycle} className="img-fluid" alt="Project life cycle" />
          <div>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter. Lorem ipsum, or lipsum as it is
            sometimes known, is dummy text used in laying out print, graphic or
            web designs. The passage is attributed to an unknown typesetter.
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
    program: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//program/program[.]md/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
