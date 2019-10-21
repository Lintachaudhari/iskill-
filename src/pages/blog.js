import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Blog = () => (
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
      <Layout>
        <SEO title="All posts" />
        <div>
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <div>
              <h3>
                <Link to={`/blog/${node.fields.slug}`} >
                  {node.frontmatter.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
)

export default Blog