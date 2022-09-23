import React from 'react'
import qualityStyle from "./Qualitycard.module.css"


const Qualitycard = ({image, heading, paragraph1, paragraph2, position}) => {
  return (
    <div className={position === "top" ? qualityStyle.top : qualityStyle.bottom}>
      <img src={image} alt="icon-1"/>
      <p className={qualityStyle.h2subcontent}>{heading}</p>
      <p>{paragraph1}</p> 
      <p>{paragraph2}</p>  
    </div>
  )
}

export default Qualitycard