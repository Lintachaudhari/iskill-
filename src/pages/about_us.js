import React from "react"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default props => {
  console.log(props)
  const { data } = props
  return (
    <Layout>
      <SEO title="About Us" />
      <div className="banner-set">
        <div className="banner-title container">About Us</div>
        <Img fluid={props.data.services.childImageSharp.fluid} />
      </div>
      <div className="container">
        <div>
          {data.about.edges.map(({ node }) => (
            <div key={node.id}>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          ))}
        </div>

        <div>
          <h3 style={{ color: "#1847A1" }}>Platform</h3>
          {data.about_sub_section.edges.map(({ node }, i) => (
            <div className="container" key={i}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ color: "#1847A1" }}>Platform</h3>
          {data.about_sub_section.edges.map(({ node }, i) => (
            <div className="container" key={i}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                </div>
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
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//about/who-we-are[.]md/" } }
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
    about_sub_section: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//about/a-bit-about-us[.]md/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`
