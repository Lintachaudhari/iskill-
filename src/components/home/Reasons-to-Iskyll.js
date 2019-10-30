import React from "react"
import ProjCycle from "../../images/proj-cycle.png"
import Img from "gatsby-image"
import SkillsImg from "../../images/skills.jpg"

export default props => {
  console.log(JSON.stringify(props))
  return (
    <div>
      <div
        style={{
          padding: "45px 0",
          background:
            "transparent linear-gradient(180deg, #D14D9B 0%, #2F479B 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div className="container d-flex">
          <h3
            style={{
              color: "#FFFFFF",
              marginLeft: "150px",
              font: "Bold 45px/53px",
              width: "315px",
              height: "53px",
            }}
          >
            5 Reasons To choose ISkyll
          </h3>
          <img src={SkillsImg} />
        </div>
        {/* <div style={{ width: "100%" }}>
          <div className="container">
            <h3
              style={{
                color: "#FFFFFF",
                marginLeft: "150px",
                font: "Bold 45px/53px Raleway",
                width: "315px",
                height: "53px",
              }}
            >
              5 Reasons To choose ISkyll
            </h3>
            <img src={SkillsImg} />
          </div>
        </div> */}
      </div>

      {/*  <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginLeft: "220px" }}>
          <h3 style={{ color: "#1847A1" }}>Platform</h3>

          <div style={{ display: "flex" }}>
            <div
              style={{
                flexBasis: "530px",
                //font: "Regular 37px/44px Raleway",
                color: "#333333",
                opacity: 1,
              }}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter.
            </div>

            <div>
              <img style={{ width: "580px" }} src={ProjCycle} />
            </div>
          </div>
        </div>
      </div> */}
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
