import React from "react"
import ProjCycle from "../../images/proj-cycle.png"
import NewIdeas from "../../images/new-ideas.png"
import Button from "../utils/Button"
import DesignIcon from "../../images/design.svg"
import TeamIcon from "../../images/team.svg"
import SelectionIcon from "../../images/selection.svg"

export default () => {
  return (
    <div style={{padding:'40px 0'}}>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "100px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "345px",
            color: "#1847A1",
            opacity: 1,
          }}
        >
          <p
            style={{
              color: "#1847A1",
              opacity: 1,
              font: "Bold 16px/24px Raleway",
            }}
          >
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "345px",
            color: "#1847A1",
            opacity: 1,
            flexBasis: "200px",
            padding: "20px",
          }}
        >
          <p
            style={{
              color: "#1847A1",
              opacity: 1,
            }}
          >
            Build Your Product
          </p>
          <img style={{ width: "67px", height: "65px" }} src={DesignIcon} />
          <p
            style={{
              color: "#5D5D5D",
              opacity: 1,
              font: "Regular 14px/20px Raleway",
            }}
          >
            iSkyll is a Smart Development Service combining top developers to
            build a successful product. iSkyll is a new standard in product
            development
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            color: "#1847A1",
            opacity: 1,
            padding: "20px",
            borderTopRightRadius: "50px",
            background: "transparent linear-gradient(180deg, #874A9C 0%, #30479B 100%) 0% 0% no-repeat padding-box"
          }}
        >
          <p
            style={{
              color: "#1847A1",
              opacity: 1,
              font: "Bold 16px/24px Raleway",
            }}
          >
            Build your Team
          </p>
          <img style={{ width: "116px", height: "118px" }} src={TeamIcon} />
          <p>
            Get the best developers on your team; iSkyll gives a choice to pick
            and choose your team of specialists for your work.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "345px",
            color: "#1847A1",
            opacity: 1,
            padding: "20px",
          }}
        >
          <p
            style={{
              color: "#1847A1",
              opacity: 1,
              font: "Bold 16px/24px Raleway",
            }}
          >
            Hire Your team
          </p>
          <img style={{ width: "67px", height: "65px" }} src={SelectionIcon} />
          <p>
            iSkyll is an exclusive network of the top highly skilled engineers
            available in India Top companies rely on iSkyll for their projects.
          </p>
        </div>
      </div>
    </div>
  )
}
