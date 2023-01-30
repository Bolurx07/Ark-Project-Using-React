import './Login.module.css'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <h1>Login</h1>
        <p>Fill the information below to signin</p>

        <form action="">
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="login-email"
                className="login-email-input"
                placeholder="Enter email address..."
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="login-password"
                className="login-password-input"
                placeholder="Enter Password..."
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className="login-checkbox-flex">
                <div className="checkbox-label-container">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="login-checkbox"
                        className="login-checkbox"
                    />
                    <label htmlFor="login-checkbox" className="checkbox-label">
                    Remember Me
                    </label>
                </div>
                <p className="login-forgot-password">Forgot Password?</p>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login