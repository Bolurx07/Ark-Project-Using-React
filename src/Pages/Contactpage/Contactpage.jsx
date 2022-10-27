import React from 'react'
import phoneicon from "../../Assets/phoneicon.svg";
import messageicon from "../../Assets/messageicon.svg";
import visiticon from "../../Assets/visiticon.svg";
import logoblack from "../../Assets/logoblack.svg";
import {Link} from 'react-router-dom'
import contactPageStyle from "./Contactpage.module.css"
import { useState, useEffect } from 'react';


const Contactpage = () => {


    // Usestate for Hamburger display
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      return setToggle(prevToggle =>!prevToggle)
    }

    

       

        // Form Validation
        const initialValues = {name: "", email: "", message: ""};
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);

        // const submitError = document.getElementById('removeerror')

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormValues({...formValues, [name]: value});
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true)
            setFormValues('')
        };

        useEffect(() => {
            console.log(formErrors);
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                console.log(formValues);
            }
        }, [formErrors]);

        const validate = (values) => {
            const errors = {}
            const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if(!values.name){
                errors.name = "Name is required";
            }
            if(!values.email){
                errors.email = "Email is required";
            } else if (!regexMail.test(values.email)) {
                errors.email = "Email is not valid";
            }
            if(!values.message){
                errors.message = "Message is required";
            } else if (values.message.length < 20) {
                errors.message = "Message must be longer than 20";
            }
            return errors;
        };

        // submitError.style.display = 'none';

  return (
    <div>
        <header className={contactPageStyle.myHeader}>
            <div>
                <img src={logoblack} alt="logo" />
            </div>
            <nav className={toggle ? contactPageStyle.active : contactPageStyle.navbar}>
                <ul >
                   <li id={contactPageStyle.home}><Link to="/">Home</Link></li>
                    <li><Link to="/Aboutpage">About Us</Link></li>
                    <li><Link to="/Contactpage">Contact Us</Link></li>
                </ul>
            </nav>
            <ul>
                <li><button  className={contactPageStyle.navbutton}><a href="#">Register</a></button></li>
            </ul>
        
            <div id={contactPageStyle.hamburger} onClick={handleToggle}>
            {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
        </div>
        </header>

        <section className={contactPageStyle.maincontactcontainer1}>
        <div className={contactPageStyle.contactcontainer1}>
            <div className={contactPageStyle.contactmaindiv1}>
                <h1 className={contactPageStyle.h1}>Contact Us</h1>
            </div>
            <div className={contactPageStyle.contactmaindiv2}>
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                <p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
            </div>
        </div>

        <div className={contactPageStyle.contactcontainer2}>
            <div className={contactPageStyle.phonediv}>
                <div className={contactPageStyle.contactcontent}>
                    <img src={phoneicon} alt="phoneicon"/>
                    <p>Call us</p>
                </div>
                <p className={contactPageStyle.contactpara}>+234 816 995 4691</p>
            </div>
            <div className={contactPageStyle.messagediv}>
                <div className={contactPageStyle.contactcontent}>
                    <img src={messageicon} alt="messageicon"/>
                    <p>Message us</p>
                </div>
                <p className={contactPageStyle.contactpara}>info@arkprojectsng.com</p>
            </div>
            <div className={contactPageStyle.phonediv}>
                <div className={contactPageStyle.contactcontent}>
                    <img src={visiticon} alt="visiticon"/>
                    <p>Visit us</p>
                </div>
                <p className={contactPageStyle.contactpara}>5678 Extra Rd. #123 San Francisco, CA 96120</p>
            </div>
        </div>
    </section>

    <section className={contactPageStyle.maincontactcontainer2}>
        <h2 className={contactPageStyle.h2}>Get In Touch</h2>
        <p className={contactPageStyle.formheading}>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className={contactPageStyle.formcontainer}>
            {/* Contact Form */}
            <form  onSubmit={handleSubmit} >
                <div>
                    <input type="text" id={contactPageStyle.name} name="name" placeholder="Name" value={formValues.name} onChange={handleChange}/>
                    <span>{formErrors.name}</span>

                </div>
                <br/><br/>
                <div>
                    <input type="email" id={contactPageStyle.email} name="email" placeholder="Email address" value={formValues.email} onChange={handleChange} />
                    <span> {formErrors.email}</span>
                </div>
                <br/><br/>
                <div>
                    <textarea resize='none'  name="message" id={contactPageStyle.message} placeholder="message" rows="20" cols="30" minLength={10} value={formValues.message} onChange={handleChange}></textarea>
                    <span>{formErrors.message}</span>

                </div>
                <br/><br/>
                <div className={contactPageStyle.buttonholder}>
                    <button id={contactPageStyle.button} type="submit" value="submit" >Submit</button>
                </div>
                {/* Form submission Error Display */}
                <div className={contactPageStyle.submiterror}>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div>Form Submitted</div>) : (<div id={contactPageStyle.removeerror}>Fill in the required details above</div>)}
                </div>
            </form>
        </div>
    </section>
    </div>
  )
}

export default Contactpage