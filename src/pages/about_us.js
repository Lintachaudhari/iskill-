import React from "react"
import { Link } from "gatsby"
import TechImage from "../images/services-1.png"
import Header from "../components/header/header"
import BuildYourTeam from "../components/home/Build-your-team"
import Button from "../components/utils/Button"
import ProjCycle from "../images/proj-cycle.png"
import Footer from "../components/footer/footer"

export default ({ data }) => {
  return (
    <div>
      <Header></Header>
      <img src={TechImage} style={{ width: "100%" }} />
      <div style={{ margin: "25px 150px" }}>
        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </div>

        <div>
          <div>Platform</div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img style={{ flexBasis: "10%" }} src={ProjCycle} />
            <div style={{ flexBasis: "25%" }}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter. Lorem ipsum, or lipsum as it
              is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown
              typesetter.
            </div>
          </div>
        </div>
        <div>
          <div>Platform</div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flexBasis: "25%" }}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter. Lorem ipsum, or lipsum as it
              is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown
              typesetter.
            </div>
            <img style={{ flexBasis: "10%" }} src={ProjCycle} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//about/who-we-are[.]md/" } }
    ) {
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
      filter: { fileAbsolutePath: { regex: "//about/a-bit-about-us[.]md/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
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
`
