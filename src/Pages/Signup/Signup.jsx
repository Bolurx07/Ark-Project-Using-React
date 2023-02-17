import loginStyle from '../Login/Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { UserAuth } from '../../context/AuthContext';
import logoblack from '../../Assets/logoblack.svg';
import loginimg from '../../Assets/bizdevbackground.svg';
import { signUpSchema } from '../../Schemas/Index';


const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
    

    console.log(values)

    // useState for UserAuth
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()
    
    // const firebaseMailChange = (e) => {
    //     setEmail(e.target.value)
    // }

    // const firebasePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    // const myHandleChange = () => {
    //     handleChange;
    //     firebaseMailChange();
    //     firebasePasswordChange();
    // }

    // console.log(email)
    const handleFirebaseSubmit = async (e) => {
        e.preventDefault();
        try {
          await signUp(values.email, values.password);
            navigate('/Aboutpage')
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormSubmit = () => {
        handleFirebaseSubmit();
        handleSubmit;
    }


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
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                <input 
                    onChange={handleChange} 
                    type="password"  
                    name='password'
                    placeholder='Password' 
                    id={loginStyle.password}
                    value={values.password} 
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && <p className='error'>{errors.password}</p>}

                <span className={loginStyle.forgotpassword}>Forgot Password?</span>
                <button disabled={!isValid}> Sign Up </button>
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