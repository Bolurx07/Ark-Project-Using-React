import React from 'react'
import head1Style from "./Headerone.module.css"
import { useState } from "react";
import {Link} from 'react-router-dom'

const Headerone = ({mainlogo, autoride}) => {

     // Usestate for Hamburger display
     const [toggle, setToggle] = useState(false)

     const handleToggle = () => {
       return setToggle(prevToggle =>!prevToggle)
     }

  return (
    <div>
        <header id={autoride} className={head1Style.header}>
          <div>
            <img src={mainlogo} alt="logo" />
          </div>
          <nav  className={toggle ? head1Style.active : head1Style.navbar }>
              <ul>
                  <li id={head1Style.home}><Link to="/" >Home</Link></li>
                  <li><Link to="Aboutpage">About Us</Link></li>
                  <li><Link to="Contactpage">Contact Us</Link></li>
                  <li><button className={head1Style.navbutton}><Link to="#">Register</Link></button></li>
              </ul>
          </nav>
          <div id={head1Style.hamburger} onClick={handleToggle}>
              {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
          </div>
        </header>

    </div>
  )
}

export default Headerone