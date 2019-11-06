import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"


export default props => {
  console.log(props)
  const { data } = props
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="banner-set">
        <div className="banner-title container">Contact Us</div>
        <Img fluid={props.data.services.childImageSharp.fluid} />
      </div>
      <div style={{ margin: "25px 150px", fontSize:'23px', lineHeight:'42px' }}>
      Q2, A2, 7th Floor<br/>
      Cyber Towers<br/>
      Hi-tech City, Hyderabad 500081
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
