import React from "react"
import ProjCycle from "../../images/proj-cycle.png"
import Img from "gatsby-image"

export default props => {
  return (
    <div>
      <div className="container">
        <div
          style={{
            padding: "30px 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "#1847A1" }}>Platform</h3>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flexBasis: "530px",
                color: "#333333",
                opacity: 1,
              }}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter.
            </div>

            <div>
              <img
                style={{ width: "580px" }}
                className="img-fluid"
                src={ProjCycle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    skills: file(relativePath: { eq: "skills.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
