import React from "react"
import ProjCycle from "../../images/proj-cycle.png"
import NewIdeas from "../../images/new-ideas.png"
import Button from "../utils/Button"
import DesignIcon from "../../images/design.svg"
import TeamIcon from "../../images/team.svg"
import SelectionIcon from "../../images/selection.svg"

export default () => {
  return (
    <div>
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
            flexBasis: "239px",
          }}
        >
          <p
            style={{
              color: "#1847A1",
              opacity: 1,
              font: "Bold 16px/24px Raleway",
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

      <div>
        <img
          style={{ height: "220px", opacity: 0.13, width: "100%" }}
          src={NewIdeas}
        />
        <div>
          <div
            style={{
              position: "absolute",
              top: "83%",
              left: "50%",
              transform: " translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Are you looking for…</h1>A partner to execute your idea? Help
            rescuing a project? A project estimate?
            <Button
              width={110}
              title="Know more"
              border="1px solid #333333"
              alignSelf="center"
              backgroundColor="#FFFFFF"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "50px" }}>
        <div
          style={{
            width: "722px",
            height: "170px",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            boxShadow: "0px 0px 10px #00000019",
            opacity: 1,
          }}
        >
          <div
            style={{
              width: "28px",
              height: "73px",
              textAlign: "center",
              font: "Bold 60px/73px Proxima Nova",
              letterSpacing: 0,
              color: "#1847A1",
              opacity: 1,
              alignSelf: "center",
            }}
          >
            "
          </div>
          <div
            style={{
              textAlign: "center",
              font: "Regular 25px/30px Raleway",
              color: "#333333",
              opacity: 1,
            }}
          >
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print,
          </div>
        </div>
      </div>
    </div>
  )
}
