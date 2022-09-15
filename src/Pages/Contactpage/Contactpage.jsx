import React from 'react'
import "./Contactpage.css";
import phoneicon from "../../Assets/phoneicon.svg";
import messageicon from "../../Assets/messageicon.svg";
import visiticon from "../../Assets/visiticon.svg";



const Contactpage = () => {
  return (
    <div>
        <section className="maincontactcontainer1">
        <div className="contactcontainer1">
            <div className="contactmaindiv1">
                <h1>Contact Us</h1>
            </div>
            <div className="contactmaindiv2">
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
            </div>
        </div>

        <div className="contactcontainer2">
            <div className="phonediv">
                <div className="contactcontent">
                    <img src={phoneicon} alt="phoneicon"/>
                    <p>Call us</p>
                </div>
                <p className="contactpara">+234 816 995 4691</p>
            </div>
            <div className="messagediv">
                <div className="contactcontent">
                    <img src={messageicon} alt="messageicon"/>
                    <p>Message us</p>
                </div>
                <p className="contactpara">info@arkprojectsng.com</p>
            </div>
            <div className="phonediv">
                <div className="contactcontent">
                    <img src={visiticon} alt="visiticon"/>
                    <p>Visit us</p>
                </div>
                <p className="contactpara">5678 Extra Rd. #123 San Francisco, CA 96120</p>
            </div>
        </div>
    </section>

    <section className="maincontactcontainer2">
        <h2>Get In Touch</h2>
        <p className="formheading">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="formcontainer">
          <form action="action_page.php">
            <input type="text" id="name" name="name" placeholder="Name"/>
            <br/><br/>
            <input type="email" id="email" name="email" placeholder="Email address"/>
            <br/><br/>
            <textarea name="message" id="message" placeholder="message" rows="20" cols="30"></textarea>
            <br/><br/>
          </form>
        </div>
        <div className="buttonholder">
            <input id="button" type="submit" value="Submit"/>
        </div>
    </section>

    </div>
  )
}

export default Contactpage