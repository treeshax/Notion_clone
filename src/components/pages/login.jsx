import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignup = () => {
  if (!email || !password) {
    alert('Please fill all fields')
    return
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters')
    return
  }
  if (!email || !password) {
  setError('Please fill all fields')
  return
}

  const user = { email, password }
  localStorage.setItem('user', JSON.stringify(user))
  alert('Signup successful!')
  setIsSignup(false)
}

  const handleLogin = () => {
  if (!email || !password) {
    setError('Please enter email and password')
    return
  }

  const storedUser = JSON.parse(localStorage.getItem('user'))

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    setError('')
    alert('Login successful!')

    // Redirect after login
    navigate('/dashboard')
  } else {
    setError('Invalid credentials')
  }
}

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>{isSignup ? 'Create Account' : 'Welcome Back'}</h1>
        <p className="login-subtext">
          {isSignup ? 'Sign up to get started' : 'Login to your workspace'}
        </p>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={isSignup ? handleSignup : handleLogin}
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <div className="divider">OR</div>

        <button className="google-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Continue with Google
        </button>

        <p className="login-footer">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Sign up'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login