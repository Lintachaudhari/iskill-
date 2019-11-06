import React from "react"
import { graphql } from "gatsby"
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
      <div className="container container-padding">
        {data.program.edges.map(({ node }, i) => (
          <div key={i}>
            <div className="row">
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          </div>
        ))}
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
