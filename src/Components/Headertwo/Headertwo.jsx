import React from 'react'
import head2Style from "./Headerone.module.css"
import { useState } from "react";
import {Link} from 'react-router-dom'

const Headertwo = () => {

    // Usestate for Hamburger display
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      return setToggle(prevToggle =>!prevToggle)
    }

  return (
    <div>
        <header className={head2Style.header}>
            <div>
                <img src={logoblack} alt="logo" />
            </div>
            <nav className={toggle ? head2Style.active : head2Style.navbar}>
                <ul >
                   <li id={head2Style.home}><Link to="/">Home</Link></li>
                    <li><Link to="/Aboutpage">About Us</Link></li>
                    <li><Link to="/Contactpage">Contact Us</Link></li>
                </ul>
            </nav>
            <ul>
                <li><button  className={head2Style.navbutton}><a href="#">Register</a></button></li>
            </ul>
        
            <div id={head2Style.hamburger} onClick={handleToggle}>
            {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
        </div>
        </header>
    </div>
  )
}

export default Headertwo