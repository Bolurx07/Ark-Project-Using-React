import React from 'react'
import "./Footer.css"
import logoblack from "../../Assets/logoblack.svg";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import instagram from "../../Assets/instagram.svg";
// import Asset from "../../Assets";
// import {logoblack,facebook,twitter,instagram} from Asset;



const Footer = () => {
   
  return (
    <footer>
    <div className="footercontainer1">
        <img src={logoblack} alt="logo"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="footercontainer2">
        <div className="footersubcontainer1">
            <p id="footerheading">Explore</p>
            <a href="#">Business Development</a>
            <a href="#">Real Estate</a>
            <a href="#">Ark Foundation</a>
            <a href="#">Investment and Assest Management</a>
        </div>
        <div className="footersubcontainer2">
            <p id="footerheading">Contact</p>
            <p className="footersmallfont">Plot 283A Akin Olugbade Street Victoria Island Lagos Nigeria.</p>
            <p className="footersmallfont">+23452222120</p>
            <p className="footersmallfont">support@arkfoundation.com</p>
        </div>
    </div>
    <div className="footercontainer3">
        <div className="footersubcontainer3">
            <p id="footerheading">Quick Links</p>
            <a href="\index.html">Home</a>
            <a href="#">Register</a>
        </div>
        <div className="footersubcontainer4">
            <p id="footerheading">Follow</p>
            <a href="www.facebook.com"><img src={facebook} alt="facebook"/> Facebook</a>
            <a href="www.twitter.com"><img src={twitter} alt="twitter"/> Twitter</a>
            <a href="www.instagram.com"><img src={instagram} alt="instagram"/> Instagram</a>
        </div>
    </div>
</footer> 
  )
}

export default Footer