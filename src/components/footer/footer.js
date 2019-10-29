import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Contact from "../contact/contact"
import "./footer.scss"

const Footer = () => {
  /* const data = useStaticQuery(graphql`
    query footer {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//footer/" } }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
          }
        }
      }
    }
  `) */
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>© 2019 Organization. All rights reserved | Design by Omniwyse</p>
      </div>
    </section>
  )
}

export default Footer
