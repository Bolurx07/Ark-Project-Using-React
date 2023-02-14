import React from 'react'
import head1Style from "./Headerone.module.css"
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';
import { FaArrowCircleDown } from 'react-icons/fa';


const Headerone = ({mainlogo, autoride}) => {

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
        <header id={autoride} className={head1Style.header}>
          <div>
            <img src={mainlogo} alt="logo" />
          </div>
          <nav  className={toggle ? head1Style.active : head1Style.navbar }>
              <ul>
                  <li id={head1Style.home}><Link to="/" >Home</Link></li>
                  <li><Link to="/Aboutpage">About Us</Link></li>
                  <li><Link to="/Contactpage">Contact Us</Link></li>
                  <li>
                    {
                      user?.email 
                      ?
                      <div>
                        <div onClick={handleLoginToggle} className={head1Style.account}>
                          <p>Account</p> 
                          <FaArrowCircleDown />
                        </div>
                        <div className={loginToggle ? head1Style.showUser : head1Style.hideUser}>
                          <p>Profile</p>
                          <p>Settings</p>
                          <p onClick={handleLogout}>Log Out</p>
                        </div>
                      </div>
                      :
                      <button className={head1Style.navbutton}><Link to="/Signup">Register</Link></button>
                    }
                    
                  </li>
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