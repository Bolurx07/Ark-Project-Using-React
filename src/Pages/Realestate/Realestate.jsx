import React from 'react'
import realStyle from "./Realestate.module.css"
import Headertwo from '../../Components/Headertwo/Headertwo'
import blacklogo from "../../Assets/logoblack.svg";


const Realestate = () => {
  return (
    <div>
        <section className={realStyle.hero} id={realStyle.black}>
            <div >
                < Headertwo logo={blacklogo}  />
            </div>
            <h1 className={realStyle.h1}>Building a network of positive solutions in the agricultural sector</h1>
        </section>
    </div>
  )
}

export default Realestate