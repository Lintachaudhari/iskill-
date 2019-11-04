import React from "react"
import Img from "gatsby-image"
import SkillsImg from "../../images/chooseSkylls.png"

export default props => {
  return (
    <div>
      <div
        style={{
          padding: "45px 0",
          background:"#f6f7fb",
          borderBottom:'1px solid #eaecf3'
        }}
      >
        <div className="container d-flex">
          <h3
            style={{
              color: "#383651",
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
