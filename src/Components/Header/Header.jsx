import React from 'react'
import "./Header.css"
import logo from "../../Assets/logo.png";

const Header = () => {
   
  return (
    <header className='header'>
        <div>
            <img className='navpic' src={logo} alt="logo"/>
        </div>
        <nav className='navbar'>
            <a href="\index.html">Home</a>
            <a href="\About-us\aboutus.html">About Us</a>
            <a href="\Contact-us\contactus.html">Contact Us</a>
            <button className="navbutton"><a href="#" id="navvv">Register</a></button>
        </nav>
        {/* <div id="myLinks">
            <a href="\index.html">Home</a>
            <a href="\About-us\aboutus.html">About Us</a>
            <a href="\Contact-us\contactus.html">Contact Us</a>
            <a href="#">Register</a>
        </div> */}
    </header>
  )
}

export default Header