import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
        team: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//about/team/"}}) {
            edges {
              node {
                id
                frontmatter {
                  title
                  designation
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
  `)

  return (
    <div className="container py-5">
    <h3 className="text-center py-5">Our Team</h3>
    <div className="row">
        {data.team.edges.map(({node},i) => (
         <div className="flip-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                      <div className="card">
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} />    
                          <div className="container" 
                                style={{ padding: "30px 15px 15px 15px"}}
                          >
                            <h6>{node.frontmatter.title}</h6> 
                            <p>{node.frontmatter.designation}</p> 
                          </div>
                      </div>
              </div>
              <div className="flip-card-back">
                      <div className="" dangerouslySetInnerHTML={{ __html: node.html}}></div>
              </div>
            </div>
       </div>
        ))}
  </div>
  </div>
  )
}

export default Team
