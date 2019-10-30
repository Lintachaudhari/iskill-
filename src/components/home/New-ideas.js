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
