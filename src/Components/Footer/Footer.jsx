import React from 'react'
import footerStyle from"./Footer.module.css"
import logoblack from "../../Assets/logoblack.svg";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import instagram from "../../Assets/instagram.svg";
import {Link} from 'react-router-dom'




const Footer = () => {
   
  return (
    <footer>
    <div className={footerStyle.footercontainer1}>
        <img src={logoblack} alt="logo"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className={footerStyle.flexcover}>
        <div className={footerStyle.footercontainer2}>
            <div className={footerStyle.footersubcontainer1}>
                <p id={footerStyle.footerheading}>Explore</p>
                <a href="#">Business Development</a>
                <a href="#">Real Estate</a>
                <a href="#">Ark Foundation</a>
                <a href="#">Investment and Assest Management</a>
            </div>
            <div className={footerStyle.footersubcontainer2}>
                <p id={footerStyle.footerheading}>Contact</p>
                <p className={footerStyle.footersmallfont}>Plot 283A Akin Olugbade Street Victoria Island Lagos Nigeria.</p>
                <p className={footerStyle.footersmallfont}>+23452222120</p>
                <p className={footerStyle.footersmallfont}>support@arkfoundation.com</p>
            </div>
        </div>
        <div className={footerStyle.footercontainer3}>
            <div className={footerStyle.footersubcontainer3}>
                <p id={footerStyle.footerheading}>Quick Links</p>
                <Link to="/" >Home</Link>
                <a href="#">Register</a>
            </div>
            <div className={footerStyle.footersubcontainer4}>
                <p id={footerStyle.footerheading}>Follow</p>
                <a href="www.facebook.com"><img src={facebook} alt="facebook"/> Facebook</a>
                <a href="www.twitter.com"><img src={twitter} alt="twitter"/> Twitter</a>
                <a href="www.instagram.com"><img src={instagram} alt="instagram"/> Instagram</a>
            </div>
        </div>
    </div>
</footer> 
  )
}

export default Footer