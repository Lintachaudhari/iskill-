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
      <div
        style={{
          display: "flex",
          background:
            "transparent linear-gradient(180deg, #D14D9B 0%, #2F479B 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div style={{ height: "150px" }}>
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
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "flex-wrap",
            alignItems: "center",
            color: "#FFFFFF",
            alignContent: "space-between",
          }}
        >
          <div style={{ color: "#FFFFFF" }}>Experience</div>
          <div style={{ color: "#FFFFFF" }}>Innovation</div>
          <div style={{ color: "#FFFFFF" }}>Speed</div>
          <div style={{ color: "#FFFFFF" }}>Service</div>
          <div style={{ color: "#FFFFFF" }}>Flexibility</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
      </div>
    </div>
  )
}
