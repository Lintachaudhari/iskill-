import React from "react"
import { graphql } from "gatsby"
import ProjCycle from "../images/proj-cycle.png"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default props => {
  const { data } = props
  return (
    <Layout>
      <SEO title="Re Skyll" />
      <div className="banner-set">
        <div className="banner-title container">ReSkyll</div>
        <Img fluid={props.data.services.childImageSharp.fluid} />
      </div>
      <div>
        <div className="container">
          {data.reskill.edges.map(({ node }, i) => (
            <div key={i}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
              </div>
            </div>
          ))}
        </div>

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

    reskill: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//reskill/reskill[.]md/" } }
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
