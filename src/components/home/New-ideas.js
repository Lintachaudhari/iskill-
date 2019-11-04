import React from "react"
import ProjCycle from "../../images/proj-cycle.png"
import NewIdeas from "../../images/new-ideas.png"
import Button from "../utils/Button"
import DesignIcon from "../../images/design.svg"
import TeamIcon from "../../images/team.svg"
import SelectionIcon from "../../images/selection.svg"

export default () => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <div>
        <div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "9",
            }}
          >
            <h1
              style={{
                color: "#1847A1",
                font: "700 60px/70px",
              }}
            >
              Are you looking for…
            </h1>

            <div
              style={{
                margin: "1vw 0 2vw 0",
                font: "Regular 33px/39px",
                color: "#333333",
              }}
            >
              A partner to execute your idea? Help rescuing a project? A project
              estimate?
            </div>

            <button
              title="Know more"
              style={{
                border:'1px solid #333',
                font: "Regular 22px/26px Raleway",
                background: "transparent",
                padding:'7px 30px'
              }}
              >Know More</button>
          </div>
        </div>
        <img
          style={{ opacity: 0.13, width: "100%" }}
          className="img-fluid"
          src={NewIdeas}
        />
      </div>
    </div>
  )
}
