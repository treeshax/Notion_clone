import React from 'react'
import LineWaves from './components/Hero'
import Navbar from './components/ui/Navbar'
import SpotlightCard from './components/ui/CardProps'
import './index.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Login from './components/pages/login' 
import Dashboard from './components/Dashboard'

function Home() {
  return (
    <>
      <div className="hero-section">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <LineWaves
            speed={0.3}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={1}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.2}
            color1="#ffffff"
            color2="#ffffff"
            color3="#ffffff"
            enableMouseInteraction
            mouseInfluence={2}
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-heading">Build your second brain.</h1>
          <p className="hero-subheading">
            Write, plan, and organize without distractions.
          </p>
          <div className="hero-cta">
            <Link to="/login" className="btn-primary">
              Get started for free
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="features-header">
        <span>Why Scribo?</span>
        <h2>Everything you need.<br />Nothing you don't.</h2>
        <p>A workspace that adapts to how you think.</p>
      </div>

      <section className="features-section">
        <SpotlightCard className="feature-card">
          <div>✍️</div>
          <h3>Write Anything</h3>
        </SpotlightCard>

        <SpotlightCard className="feature-card">
          <div>🗂️</div>
          <h3>Organize</h3>
        </SpotlightCard>

        <SpotlightCard className="feature-card">
          <div>⚡</div>
          <h3>Fast</h3>
        </SpotlightCard>
      </section>
    </>
  )
}

function App() {
  const location = useLocation()
  return (
    <>
      {/* {location.pathname !== "/login" && <Navbar />} */}
      {location.pathname === "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App