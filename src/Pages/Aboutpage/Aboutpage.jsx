import React from 'react'
import "./Aboutpage.css";
import storypic from "../../Assets/storypic.svg";
import dots1 from "../../Assets/dots1.svg";
import dots2 from "../../Assets/dots2.svg";
import teampic1 from "../../Assets/teampic1.svg";
import teampic2 from "../../Assets/teampic2.svg";
import teampic3 from "../../Assets/teampic3.svg";
import teampic4 from "../../Assets/teampic4.svg";
import teampic5 from "../../Assets/teampic5.svg";
import teampic6 from "../../Assets/teampic6.svg";
import linkedin from "../../Assets/linkedin.svg";
import twitter from "../../Assets/twitter.svg";
import instagram from "../../Assets/instagram.svg";



const Aboutpage = () => {
  return (
    <div>

        <section className="firstpage">
            <div className="headercontainer">
                <h1>We Put Our Customer first</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet v</p>
            </div>
        </section>
        
        <section className="storycontainer">
            <div className="storysubcontainer1">
                <h2>Our Story.</h2>
                <p className="storypara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan.</p>
            </div>
            <div className="storysubcontainer2">
                <img className="storypic" src={storypic} alt="storypic"/>
                <img className="dot1" src={dots1} alt="Dotgroup"/>
            </div>
        </section>
        <section className="believecontainer">
            <div>
            <img className="dot2" src={dots2} alt="Dotgroup"/>
                <div className="believediv1">
                    <p className="divcontent1">--- We believe in</p>
                    <p className="divcontent2">insert company's tagline here”.</p>
                </div>
            </div>
            <div className="believediv2" >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tortor elit erat ac urna, purus vel, suspendisse. Interdum mollis diam amet lectus. Sed nunc, accumsan porta turpis elementum at.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tortor elit erat ac urna, purus vel, suspendisse. Interdum mollis diam amet lectus. Sed nunc, accumsan porta turpis elementum at.</p>
            </div>
        </section>

        <section className="teamcontainer">
            <div className="teamheading">
                <h3>Our Team Members</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sit congue odio enim vitae ullamcorper eu quis amet.</p>
            </div>
            <div className="mainteamcontainer">
                <div className="teamcontainer1">
                    <div className="teamsubcontainer">
                        <img className="teampic" src={teampic1} alt="teampic"/>
                        <p>Kolawole Oluwatobi</p>
                        <div className="teamlogos">
                            <img src={linkedin} alt="linkedin"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <span>CEO</span>
                    </div>
                    <div className="teamsubcontainer">
                        <img className="teampic" src={teampic2} alt="teampic"/>
                        <p>Kolawole Oluwatobi</p>
                        <div className="teamlogos">
                            <img src={linkedin} alt="linkedin"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <span>CEO</span>
                    </div>
                    <div className="teamsubcontainer">
                        <img className="teampic" src={teampic3} alt="teampic"/>
                        <p>Kolawole Oluwatobi</p>
                        <div className="teamlogos">
                            <img src={linkedin} alt="linkedin"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <span>CEO</span>
                    </div>
                </div>
                <div className="teamcontainer2">
                    <div className="teamsubcontainer">
                        <img className="teampic" src={teampic4} alt="teampic"/>
                        <p>Kolawole Oluwatobi</p>
                        <div className="teamlogos">
                            <img src={linkedin} alt="linkedin"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <span>CEO</span>
                    </div>
                    <div className="teamsubcontainer" >
                        <img className="teampic" src={teampic5} alt="teampic"/>
                        <p>Kolawole Oluwatobi</p>
                        <div className="teamlogos">
                            <img src={linkedin} alt="linkedin"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <span>CEO</span>
                    </div>
                    <div className="teamsubcontainer">
                    <img className="teampic" src={teampic6} alt="teampic"/>
                        <p>Kolawole Oluwatobi</p>
                        <div className="teamlogos">
                            <img src={linkedin} alt="linkedin"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <span>CEO</span>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Aboutpage