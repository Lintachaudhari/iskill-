import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from "gatsby"

const Blog =() =>(
    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "//blog/"}}
            sort: { fields: [frontmatter___date], order: DESC }
            
            ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
      
      `}

    render={data => (
      <div>
              {data.allMarkdownRemark.edges.map(({node},i) => (
              <div>
                    <h3>{node.frontmatter.title}</h3>
                    <button className="button-save large">
                        <Link to={`/blog/${node.fields.slug}`} >
                        Learn More
                        </Link>
                    </button>
              </div>
                ))}
      </div>
    )}
/>
)

export default Blog