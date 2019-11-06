import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Contact from "../components/contact/contact"

export default props => {
  return (
    <Layout>
            <Contact />
    </Layout>
  )
}

// export const query = graphql`
// `
