import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import Team from "../components/team"
export default ({data}) => {
  return(
    <Layout>
      <section>
          <div className="container py-5">
            {data.about.edges.map(({node}) => (
              <div key={node.id}>
                    <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            ))}
          </div>

          <div className="plans-sec py-5">
            {data.about_sub_section.edges.map(({node},i) => (
              <div className="container" key={i}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                          <Img
                              fluid={node.frontmatter.image.childImageSharp.fluid} />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div dangerouslySetInnerHTML={{ __html: node.html}}/>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <Team/>
        

      </section>
    </Layout>
  )
}

  

export const query = graphql`
  query MyQuery {
    about: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//about/who-we-are[.]md/"}}
    ){
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
      filter: {fileAbsolutePath: {regex: "//about/a-bit-about-us[.]md/"}}
    ){
      edges {
        node {
          id
          frontmatter {
            title
            date
            image{
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
