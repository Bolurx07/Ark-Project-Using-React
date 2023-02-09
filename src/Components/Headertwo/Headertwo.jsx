import React from 'react'
import head2Style from "./Headertwo.module.css"
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { FaArrowCircleDown } from 'react-icons/fa';

const Headertwo = ({logo, color, style}) => {

    //UserAuth to handle logged in User
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    console.log(user)

    const handleLogout = async () => {
      try {
        await logOut();
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
    

    // Usestate for Hamburger display
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      return setToggle(prevToggle =>!prevToggle)
    }

    // Usestate for Logged-in User display
    const [loginToggle, setLoginToggle] = useState(false)

    const handleLoginToggle = () => {
      return setLoginToggle(prevToggle =>!prevToggle)
    }


  return (
    <div>
        <header className={head2Style.header}>
            <div className={head2Style.imglogo} >
                <img src={logo} alt="logo" />
            </div>
            <div className={toggle ? head2Style.active : head2Style.navbar}>
              <nav className={head2Style.mininav} id={color}>
                  <ul >
                      <li  id={head2Style.home} style={style}><Link to="/">Home</Link></li>
                      <li><Link to="/Aboutpage">About Us</Link></li>
                      <li><Link to="/Contactpage">Contact Us</Link></li>
                  </ul>
              </nav>
              <ul>
                  <li>
                    {
                        user?.email 
                        ?
                        <div>
                          <div onClick={handleLoginToggle} className={head2Style.account}>
                            <p>Account</p> 
                            <FaArrowCircleDown />
                          </div>
                          <div className={loginToggle ? head2Style.showUser : head2Style.hideUser}>
                            <p>Profile</p>
                            <p>Settings</p>
                            <p onClick={handleLogout}>Log Out</p>
                          </div>
                        </div>
                        :
                        <button  className={head2Style.navbutton}><Link to="/Signup">Register</Link></button>
                    }




                    
                  </li>
              </ul>
            </div>
        
            <div id={head2Style.hamburger} onClick={handleToggle}>
            {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
        </div>
        </header>
    </div>
  )
}

export default Headertwo