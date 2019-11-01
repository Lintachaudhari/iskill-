import React from "react"
import Img from "gatsby-image"
import SkillsImg from "../../images/skills.jpg"

export default props => {
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
              //marginLeft: "150px",
              font: "Bold 45px/53px",
              marginTop:'2vw',
              flex: '0 0 40%'
            }}
          >
           <div>
              5 Reasons To
            </div>
            <strong>choose ISkyll</strong>
          </h3>
          <img src={SkillsImg} className="img-fluid mx-auto" />
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
