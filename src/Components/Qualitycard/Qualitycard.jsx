import React from 'react'
import qualityStyle from "./Qualitycard.module.css"


const Qualitycard = ({image, heading, paragraph1, paragraph2}) => {
  return (
    <div>
        <div>
                <img src={image} alt="icon-1"/>
                <p className={qualityStyle.h2subcontent}>{heading}</p>
                <p>{paragraph1}</p> 
                <p>{paragraph2}</p>
        </div>
    </div>
  )
}

export default Qualitycard