import React from 'react'
import teamCardStyle from "./Teamcard.module.css"
import linkedin from "../../Assets/linkedin.svg";
import twitter from "../../Assets/twitter.svg";
import instagram from "../../Assets/instagram.svg";

const Teamcard = ({img}) => {
  return (
    <div>
        <div className={teamCardStyle.teamsubcontainer} >
            <img className={teamCardStyle.teampic} src={img} alt="teampic"/>
            <p>Kolawole Oluwatobi</p>
            <div className={teamCardStyle.teamlogos}>
                <img src={linkedin} alt="linkedin"/>
                <img src={twitter} alt="twitter"/>
                <img src={instagram} alt="instagram"/>
            </div>
            <span className={teamCardStyle.span}>CEO</span>
        </div>
    </div>
  )
}

export default Teamcard