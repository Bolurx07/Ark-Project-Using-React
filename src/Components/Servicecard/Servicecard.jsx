import React from 'react'
import "./Servicecard.css"


const Servicecard = ({heading}) => {
   
  return (
    
    <div className="servicediv">
        <p className="serviceheading">{heading}</p>
        <p className="servicecontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            vitae mus est vel ligula. Tempus eu adipiscing eget porttitor
            sapien.
        </p>
        <button className="servicebutton">
          <a href="#">Learn More</a>
        </button>
    </div>
    
   
  )
}

export default Servicecard