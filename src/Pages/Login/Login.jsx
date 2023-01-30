import loginStyle from './Login.module.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import logoblack from '../../Assets/logoblack.svg';
import loginimg from '../../Assets/bizdevbackground.svg';


const Login = () => {


  return (
    <div className={loginStyle.loginContainer}>

        <section className={loginStyle.loginsect1}>
            <img src={logoblack} alt="logo" />
            <div>
                <img className={loginStyle.bckgrndimg} src={loginimg} alt="loginimg" />
            </div>
        </section>

        <section className={loginStyle.loginsect2}>
            <h2>Login!</h2>
            <p>Enter details to login.</p>
            <form action="">
                <input type="email" name="email" placeholder='Email' id={loginStyle.email} />
                <input type="password" name="password" placeholder='Password' id={loginStyle.password} />
                <span className={loginStyle.forgotpassword}>Forgot Password?</span>
                <Link to="/">
                    <button type="submit">Log in</button>
                </Link>
            </form>
            <div className={loginStyle.acctdiv}>
                <p>Don't have an account?</p>
                <Link to="/Signup">
                    Sign up
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Login