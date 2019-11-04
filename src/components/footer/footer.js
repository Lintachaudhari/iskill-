import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <section style={{backgroundColor:'#F7F7F7', padding:'20px 0', fontSize:'12px'}}>
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <div className="mr-auto"><Link to="/terms_conditions">Terms & Conditions</Link> | <Link to="/privacy_policy">Privacy Policy</Link></div>
        <div>© 2019 Organization. All rights reserved</div>
      </div>
    </section>
  )
}

export default Footer
