import loginStyle from '../Login/Login.module.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import logoblack from '../../Assets/logoblack.svg';
import loginimg from '../../Assets/bizdevbackground.svg';

const Signup = () => {
  return (
    <div className={loginStyle.loginContainer}>

        <section className={loginStyle.loginsect1}>
            <img src={logoblack} alt="logo" />
            <div>
                <img className={loginStyle.bckgrndimg} src={loginimg} alt="loginimg" />
            </div>
        </section>

        <section className={loginStyle.loginsect2}>
            <h2>SignUp!</h2>
            <p>Enter details to register.</p>
            <form action="">
                <input type="email" name="email" placeholder='Email' id={loginStyle.email} />
                <input type="password" name="password" placeholder='Password' id={loginStyle.password} />
                <span className={loginStyle.forgotpassword}>Forgot Password?</span>
                <Link to="/">
                    <button type="submit">Sign Up</button>
                </Link>
            </form>
            <div className={loginStyle.acctdiv}>
                <p>Already have an account?</p>
                <Link to="/Login">
                    Login
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Signup