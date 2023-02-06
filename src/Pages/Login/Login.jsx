import loginStyle from './Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import logoblack from '../../Assets/logoblack.svg';
import loginimg from '../../Assets/bizdevbackground.svg';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await logIn(email, password)
          navigate('Aboutpage')
        } catch (error) {
          console.log(error);
          setError(error.message)
        }
      };

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
            {error ? <p className=''>{error}</p> : null}
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Email' id={loginStyle.email} />
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder='Password' id={loginStyle.password} />
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