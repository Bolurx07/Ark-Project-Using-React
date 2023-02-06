import loginStyle from '../Login/Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import logoblack from '../../Assets/logoblack.svg';
import loginimg from '../../Assets/bizdevbackground.svg';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          await signUp(email, password);
            navigate('/Aboutpage')
        } catch (error) {
            console.log(error);
        }
    };

    // console.log(signUp)
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
            <form onSubmit={handleFormSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder='Email' id={loginStyle.email} />
                <input onChange={(e) => setPassword(e.target.value)} type="password"  placeholder='Password' id={loginStyle.password} />
                <span className={loginStyle.forgotpassword}>Forgot Password?</span>
                <button> Sign Up </button>
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