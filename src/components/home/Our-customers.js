import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../../scss/main.scss"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query customers {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//home/customer-review//" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
                image {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              html
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div className=" text-center" style={{backgroundColor:'#F8F8F8', padding:'3vw 0'}}>
        <div className="container">
        <h5 style={{ color: "#BD528E" }} className="heading mb-2">
          Our
        </h5>
        <h5 style={{ color: "#1847A1" }} className="heading mb-2">
          RECRUITERS
        </h5>
        <div className="customers-image">
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <a className="references__item" key={i}>
              <Img
                className="customer-logo"
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            </a>
          ))}
        </div>
        </div>
      </div>
    )}
  />
)

export default IndexPage
