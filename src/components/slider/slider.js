import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"
import "./slider.scss"

const slidePages = {
  0: "program",
  1: "services",
  2: "reskyll",
}

const Slider_Component = () => (
  <StaticQuery
    query={graphql`
      query SliderQuery {
        banner: allMarkdownRemark(
          filter: { frontmatter: { posttype: { eq: "slider" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                posttype
                path
                image {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              excerpt
              html
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Carousel interval={3500} controls={false}>
          {data.banner.edges.map(({ node }, i) => (
            <Carousel.Item key={i}>
              <Link to={`/${slidePages[i]}`}>
                <Img
                  className="slider-img"
                  sizes={node.frontmatter.image.childImageSharp.fluid}
                />
                <Carousel.Caption>
                  <div
                    className="slider-content"
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <div>
                    {data.banner.edges.map(({node}) => (
                    <div key={node.id}>
                        {node.frontmatter.title}{" "}
                        <Img sizes={node.frontmatter.image.childImageSharp.fluid} />
                    </div>
                    ))}
                </div> */}
      </div>
    )}
  />
)
export default Slider_Component
