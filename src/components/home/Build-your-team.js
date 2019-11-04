import React from "react"
import ProjCycle from "../../images/proj-cycle.png"
import NewIdeas from "../../images/new-ideas.png"
import Button from "../utils/Button"
import DesignIcon from "../../images/design.svg"
import TeamIcon from "../../images/team.svg"
import SelectionIcon from "../../images/selection.svg"

export default () => {
  return (
    <div className="container" style={{padding:'40px 0'}}>
      <div className="d-flex flex-column" style={{ padding:'0 0 2vw 0'}}>
          <p style={{color: "#1847A1", textAlign:'center', fontSize:'32px', fontWeight:'bold'}}>
            invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <p style={{textAlign:'center'}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </p>
        </div>
      <div style={{ display: "flex"}}>
        <div className="d-flex flex-column byt-gray" >
          <p style={{color: "#1847A1", fontSize: "18px", fontWeight:'bold'}}>
            Build Your Product
          </p>
          <img className="img-fluid" src={DesignIcon} width="160" style={{margin:'20px auto'}} />
          <p style={{color: "#5D5D5D", font: "Regular 14px/20px"}}>
            iSkyll is a Smart Development Service combining top developers to
            build a successful product. iSkyll is a new standard in product
            development
          </p>
        </div>
        <div className="d-flex flex-column byt-grad" style={{padding: "3vw 30px", textAlign:'center', margin:'0 20px', borderTopRightRadius: "50px", background: "transparent linear-gradient(180deg, #874A9C 0%, #30479B 100%) 0% 0% no-repeat padding-box"}}>
          <p style={{color: "#ffff", fontSize: "18px", fontWeight:'bold'}}>
            Build your Team
          </p>
          <img className="img-fluid" src={TeamIcon} style={{margin:'20px auto', width:'200px'}} />
          <p style={{color: "#ffff"}}>
            Get the best developers on your team; iSkyll gives a choice to pick
            and choose your team of specialists for your work.
          </p>
        </div>
        <div className="d-flex flex-column byt-gray" >
          <p style={{color: "#1847A1", fontSize: "18px", fontWeight:'bold'}}>
            Hire Your team
          </p>
          <img className="img-fluid" src={SelectionIcon} style={{margin:'20px auto', width:'160px'}} />
          <p>
            iSkyll is an exclusive network of the top highly skilled engineers
            available in India Top companies rely on iSkyll for their projects.
          </p>
        </div>
      </div>
    </div>
  )
}
