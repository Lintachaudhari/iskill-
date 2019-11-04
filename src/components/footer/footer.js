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
    <section style={{backgroundColor:'#14131c', padding:'20px 0', fontSize:'12px'}}>
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className="footer-div">
            <a href="/" className="footer-icon w-inline-block w--current">iSkyll</a>
            <div className="footer-list">
              <div className="footer-header">COMPANY</div>
              <a href="/about" className="footer-link w-inline-block"><div>About</div></a>
              <a href="/privacy-policy" className="footer-link w-inline-block"><div>Privacy Policy</div></a>
              <a href="/faq" className="footer-link w-inline-block"><div>FAQ</div></a>
              <a href="/contact" className="footer-link w-inline-block"><div>Contact Us</div></a>
            </div>
              
              <div className="footer-list">
                <div className="footer-header">FOLLOW US</div>
                <a href="#" target="_blank" className="footer-link w-inline-block"><div>Twitter</div></a>
                <a href="#" target="_blank" className="footer-link w-inline-block"><div>LinkedIn</div></a>
              </div>
            </div>
            <div class="body-copy footnote">Copyright © 2019 iSkyll - All rights reserved</div>
      </div>
    </section>
  )
}

export default Footer
