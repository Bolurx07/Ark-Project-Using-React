import React from 'react'
import storypic from "../../Assets/storypic.svg";
import dots1 from "../../Assets/dots1.svg";
import dots2 from "../../Assets/dots2.svg";
import teampic1 from "../../Assets/teampic1.svg";
import teampic2 from "../../Assets/teampic2.svg";
import teampic3 from "../../Assets/teampic3.svg";
import teampic4 from "../../Assets/teampic4.svg";
import teampic5 from "../../Assets/teampic5.svg";
import teampic6 from "../../Assets/teampic6.svg";
import whitelogo from "../../Assets/whitelogo.svg";
import {Link} from 'react-router-dom'
import { useState } from "react";
import aboutPageStyle from "./Aboutpage.module.css"
import Teamcard from '../../Components/Teamcard/Teamcard';



const Aboutpage = () => {
    // Usestate for Teamcard component
    const [teamcad] = useState([
        {img: teampic1},
        {img: teampic2},
        {img: teampic3}
    ]
    )

    const [teamcar] = useState([
        {img: teampic4},
        {img: teampic5},
        {img: teampic6}
    ]
    )

  return (
    <div>

        <section className={aboutPageStyle.firstpage}>
            <header className={aboutPageStyle.topnav}>
                <div>
                    <img src={whitelogo} alt="logo" />
                </div>
                <nav className={aboutPageStyle.navbar}>
                    <ul>
                        
                        <li><Link to="/" className={aboutPageStyle.active}>Home</Link></li>
                        <li><Link to="/Aboutpage">About Us</Link></li>
                        <li><Link to="/Contactpage">Contact Us</Link></li>
                        <li><button className={aboutPageStyle.navbutton}><Link to="#">Register</Link></button></li>
                    </ul>
                </nav>
    
                <div id={aboutPageStyle.hamburger}>
                    <div className={aboutPageStyle.bar}></div>
                    <div className={aboutPageStyle.bar}></div>
                    <div className={aboutPageStyle.bar}></div>
                </div>
            </header>

            <div className={aboutPageStyle.headercontainer}>
                <h1 className={aboutPageStyle.h1}>We Put Our Customer first</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet v</p>
            </div>
        </section>
        
        <section className={aboutPageStyle.storycontainer}>
            <div className={aboutPageStyle.storysubcontainer1}>
                <h2 className={aboutPageStyle.h2}>Our Story.</h2>
                <p className={aboutPageStyle.storypara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan.</p>
            </div>
            <div className={aboutPageStyle.storysubcontainer2}>
                <img className={aboutPageStyle.storypic} src={storypic} alt="storypic"/>
                <img className={aboutPageStyle.dots1} src={dots1} alt="Dotgroup"/>
            </div>
        </section>
        <section className={aboutPageStyle.believecontainer}>
            <div>
            <img className={aboutPageStyle.dot2} src={dots2} alt="Dotgroup"/>
                <div className={aboutPageStyle.believediv1}>
                    <p className={aboutPageStyle.divcontent1}>--- We believe in</p>
                    <p className={aboutPageStyle.divcontent2}>insert company's tagline here”.</p>
                </div>
            </div>
            <div className={aboutPageStyle.believediv2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tortor elit erat ac urna, purus vel, suspendisse. Interdum mollis diam amet lectus. Sed nunc, accumsan porta turpis elementum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tortor elit erat ac urna, purus vel, suspendisse. Interdum mollis diam amet lectus. Sed nunc, accumsan porta turpis elementum at.</p>
            </div>
        </section>

        <section className={aboutPageStyle.teamcontainer}>
            <div className={aboutPageStyle.teamheading}>
                <h3 className={aboutPageStyle.h3}>Our Team Members</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sit congue odio enim vitae ullamcorper eu quis amet.</p>
            </div>
            <div className={aboutPageStyle.mainteamcontainer}>
                <div className={aboutPageStyle.teamcontainer1}>
                    {teamcad.map((item) =>( <Teamcard img={item.img} />))}   
                </div>
                <div className={aboutPageStyle.teamcontainer2}>
                    {teamcar.map((item) =>( <Teamcard img={item.img} />))}
                </div>
            </div>
        </section>


    </div>
  )
}

export default Aboutpage