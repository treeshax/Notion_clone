import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GridScan } from '../ui/GridScan'
import { ArrowLeft } from 'lucide-react'
import './login.css'
import Logo from '../../../scribo_logo.png'

function Login() {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignup = () => {
    if (!email || !password) {
      setError('Please fill all fields')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
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
      navigate('/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <>
    <div className="login-page">
      <div className="login-background">
        <GridScan 
          scanColor="#FF6B6B" 
          linesColor="#1A1A1A" 
          gridScale={0.15}
          scanDuration={3.0}
          scanOpacity={0.3}
        />
        <button onClick={() => navigate('/')} className='home-button'>
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <img src={Logo} alt="Scribo Logo" className="login-logo" />
            <h1>{isSignup ? 'Create Account' : 'Welcome Back'}</h1>
            <p className="login-subtext">
              {isSignup ? 'Start your journey with Scribo' : 'Login to your workspace'}
            </p>
          </div>

          {error && <div className="error-banner">{error}</div>}

          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>

          <button
            className="login-btn"
            onClick={isSignup ? handleSignup : handleLogin}
          >
            {isSignup ? 'Sign Up' : 'Continue'}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>

          <p className="login-footer">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button onClick={() => setIsSignup(!isSignup)} className="switch-btn">
              {isSignup ? 'Login' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login