import React from "react";
import homePageStyle from "./Homepage.module.css" 
import logo from "../../Assets/logo.png";
import backgroundpic from "../../Assets/background-pic.svg";
import star1 from "../../Assets/star-1.svg";
import star2 from "../../Assets/star-2.svg";
import star3 from "../../Assets/star-3.svg";
import ellipse1 from "../../Assets/ellipse-1.svg";
import ellipse2 from "../../Assets/ellipse-2.svg";
import ellipse3 from "../../Assets/ellipse-3.svg";
import homepagepic from "../../Assets/homepagepic.png";
import icon1 from "../../Assets/icon-1.svg";
import icon2 from "../../Assets/icon-2.svg";
import icon3 from "../../Assets/icon-3.svg";
import pic1 from "../../Assets/pic-1.png";
import pic2 from "../../Assets/pic-2.png";
import Servicecard from "../../Components/Servicecard/Servicecard";
import Qualitycard from "../../Components/Qualitycard/Qualitycard";
import Reviewcard from "../../Components/Reviewcard/Reviewcard";
import Headerone from "../../Components/Headerone/Headerone"
import { useState } from "react";
import {Link} from 'react-router-dom';



const Homepage = () => {
    // Usestate for Servicecard component
    const [changeHeader, setChangeHeader] = useState(
      { head1: "Business Development", 
        head2: "Ark Foundation", 
        head3: "Real Estate", 
        head4: "Investment and Assest Management"}
        )
       
      // Usestate for Hamburger display
      // const [toggle, setToggle] = useState(false)

      // const handleToggle = () => {
      //   return setToggle(prevToggle =>!prevToggle)
      // }

      // Usestate for Qualitycard component
      const [quality] = useState([
      {
        image: icon1,
        heading: "Quality Service",
        paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        position: "top"
      },
      {
        image: icon2,
        heading: "Quality Service",
        paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        position: "bottom"
      },
      {
        image: icon3,
        heading: "Quality Service",
        paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        position: "top"
      },
    ]
    )
    // Usestate for Reviewcard component(using const declaration instead of usestate)
      const review = [
        {
          img: pic1,
          subcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus pharetra tristique tristique elementum",
          name: "Tobiloba K."
        },
        {
          img: pic2,
          subcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus pharetra tristique tristique elementum",
          name: "Tobiloba K."
        },
        {
          img: pic1,
          subcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus pharetra tristique tristique elementum",
          name: "Tobiloba K."
        }
      ]
  
    return (
    <div>
      <Headerone mainlogo={logo} />
      {/* <header className={homePageStyle.header}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav  className={toggle ? homePageStyle.active : homePageStyle.navbar }>
            <ul>
                <li id={homePageStyle.home}><Link to="/" >Home</Link></li>
                <li><Link to="Aboutpage">About Us</Link></li>
                <li><Link to="Contactpage">Contact Us</Link></li>
                <li><button className={homePageStyle.navbutton}><Link to="#">Register</Link></button></li>
            </ul>
        </nav>
        <div id={homePageStyle.hamburger} onClick={handleToggle}>
            {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
        </div>
      </header> */}

      <img className={homePageStyle.backgroundpic} src={backgroundpic} alt="background-pic" />
      <section className={homePageStyle.chiefcontainer}>
        <div>
          <img className={homePageStyle.star1} src={star1} alt="star" />
        </div>
        <img className={homePageStyle.ellipse1} src={ellipse1} alt="ellipse-1" />
        <div className={homePageStyle.headercontainer}>
          <div className={homePageStyle.headercontent}>
            <h1 className={homePageStyle.h1}>
              <span className={homePageStyle.span}>Secure the</span> future with us.
            </h1>
            <div className={homePageStyle.subheader}>
              <div className={homePageStyle.mainstarcontainer}>
                <div className={homePageStyle.starcontainer}>
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                </div>
                <img src={star3} alt="star" />
              </div>
              <p>
                Lorem ipsum <span className={homePageStyle.span}>dolor sit</span> amet, consectetur
              </p>
            </div>
            <div className={homePageStyle.headerbutton}>
              <button className={homePageStyle.headerbutton1}>
                <a href="#">Sign Up</a>
              </button>
              <button className={homePageStyle.headerbutton2}>
                <a href="#">Explore</a>
              </button>
            </div>
          </div>
          <img className={homePageStyle.homepagepic} src={homepagepic} alt="homepagepic" />
        </div>
      </section>

      <img className={homePageStyle.ellipse2} src={ellipse2} alt="ellipse-2" />

      <section className={homePageStyle.servicecontainer}>
        <div className={homePageStyle.servicecontainer1}>
          <span className={homePageStyle.span} id={homePageStyle.service}>Services</span>
          <p className={homePageStyle.serviceheading}>Top Notch Business</p>
        </div>
        <div className={homePageStyle.servicecontainer2}>
          <Servicecard heading={changeHeader.head1}/> 
          <Servicecard heading={changeHeader.head2}/>
        </div>
        <div className={homePageStyle.servicecontainer3}>
          <Servicecard heading={changeHeader.head3}/> 
          <Servicecard heading={changeHeader.head4}/>
        </div>
      </section>

      <img className={homePageStyle.ellipse3} src={ellipse3} alt="ellipse-3"/>

    <section>

        <div className={homePageStyle.heading2}>
            <h2 className={homePageStyle.h2}>We Are Top Notch At What We Render.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sit congue odio enim vitae ullamcorper eu quis amet.</p>
        </div>

        <div className={homePageStyle.h2content} >
          {quality.map((item) =>(
          <Qualitycard image={item.image} heading={item.heading} paragraph1={item.paragraph1} paragraph2={item.paragraph2} position={item.position}/>))}   
        </div>

        <h3 className={homePageStyle.h3}>What People Say About Us.</h3>
        
        <div className={homePageStyle.aboutuscontainer}>
          {review.map((item) =>(
          <Reviewcard img={item.img} subcontent={item.subcontent} name={item.name} />))}
        </div>
    </section>
    
    <img className={homePageStyle.ellipse4} src={ellipse2}alt="ellipse-4"/>
    </div>
  );
};

export default Homepage;
