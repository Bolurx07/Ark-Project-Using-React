import React from 'react'
import serviceCardStyle from "./Servicecard.module.css"


const Servicecard = ({heading}) => {
   
  return (
    
    <div className={serviceCardStyle.servicediv}>
        <p className={serviceCardStyle.serviceheading}>{heading}</p>
        <p className={serviceCardStyle.servicecontent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            vitae mus est vel ligula. Tempus eu adipiscing eget porttitor
            sapien.
        </p>
        <button className={serviceCardStyle.servicebutton}>
          <a href="#">Learn More</a>
        </button>
    </div>
    
   
  )
}

export default Servicecard