import loginStyle from '../Login/Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { UserAuth } from '../../context/AuthContext';
import logoblack from '../../Assets/logoblack.svg';
import loginimg from '../../Assets/bizdevbackground.svg';
import { signUpSchema } from '../../Schemas/Index';


const onSubmit = async (values, actions) => {
    console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 70000));
    actions.resetForm()
    
}

const Signup = () => {
    
    // Formik & Yup for State management
    const { values, errors, touched, isValid, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: signUpSchema,
        onSubmit,
    });
    

    // user and navigate for UserAuth
    const { user, signUp } = UserAuth();
    const navigate = useNavigate();

    const handleFirebaseSubmit = async (e) => {
        e.preventDefault();
        try {
          await signUp(values.email, values.password);
            navigate('/Aboutpage')
        } catch (error) {
            console.log(error);
        }
    };

    // const handleMySubmit = (e) => {

    //     if (isValid === true) {
    //         handleSubmit();
    //     } else {
    //         handleFirebaseSubmit(e);
    //     }
    // }

    console.log(isValid)
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
            <form onSubmit={handleFirebaseSubmit}>
                <input 
                    onChange={handleChange} 
                    type="email"  
                    placeholder='Email' 
                    name='email'
                    id={loginStyle.email} 
                    value={values.email} 
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && <p className={loginStyle.error}>{errors.email}</p>}
                <input 
                    onChange={handleChange} 
                    type="password"  
                    name='password'
                    placeholder='Password' 
                    id={loginStyle.password}
                    value={values.password} 
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && <p className={loginStyle.error}>{errors.password}</p>}

                <span className={loginStyle.forgotpassword}>Forgot Password?</span>
                {isValid ? <button> Sign Up </button> : <button disabled id={loginStyle.mybutton}> Sign Up </button>}
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