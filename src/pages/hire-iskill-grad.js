import React from "react"
import ProjCycle from "../images/proj-cycle.png"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default props => {
  const { data } = props
  return (
    <Layout>
      <SEO title="Hire a iSkyll Grad" />
      <div className="banner-set">
        <div className="banner-title container">Hire Iskill Grad</div>
        <Img fluid={props.data.services.childImageSharp.fluid} />
      </div>
      <div>
        <div className="container">
          {data.hireIskillGrad.edges.map(({ node }, i) => (
            <div key={i}>
              <div className="row">
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            </div>
          ))}
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

    hireIskillGrad: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//hire-iskill-grad/hire-iskill-grad[.]md/" }
      }
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
