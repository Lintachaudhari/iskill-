import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"
import Header from "../header/header"
import Footer from "../footer/footer"
import { relative } from "path";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-body">
      <Header siteTitle={data.site.siteMetadata.title} />
        <main id="content-wrap">{children}</main>
        <div id="footer">
        <Footer/>    
        </div>
    
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
