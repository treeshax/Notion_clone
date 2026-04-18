import React from 'react'
import LineWaves from './components/Hero'
import Navbar from './components/ui/Navbar'
import SpotlightCard from './components/ui/CardProps'
import GlareHover from './components/ui/GlareHover'
import Comparison from './components/ui/Comparison'
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

      {/* Features Section */}
      <div className="features-header">
        <span className="features-eyebrow">Why Scribo?</span>
        <h2 className="features-heading">Everything you need.<br />Nothing you don't.</h2>
        <p className="features-subtext">A workspace that adapts to how you think — not the other way around.</p>
      </div>

      <section className="features-section">
        <GlareHover glareOpacity={0.15}>
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="feature-card">
            <div className="feature-icon">✍️</div>
            <h3 className="feature-title">Write Anything</h3>
            <p className="feature-desc">From quick notes to full docs — a flexible editor that gets out of your way.</p>
          </SpotlightCard>
        </GlareHover>

        <GlareHover glareOpacity={0.15}>
          <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.25)" className="feature-card">
            <div className="feature-icon">🗂️</div>
            <h3 className="feature-title">Organize Effortlessly</h3>
            <p className="feature-desc">Nested pages, databases, and tags keep every idea exactly where you expect it.</p>
          </SpotlightCard>
        </GlareHover>

        <GlareHover glareOpacity={0.15}>
          <SpotlightCard spotlightColor="rgba(255, 100, 150, 0.2)" className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Move at the Speed of Thought</h3>
            <p className="feature-desc">Slash commands, keyboard shortcuts, and instant search keep you in flow.</p>
          </SpotlightCard>
        </GlareHover>
      </section>

      {/* Comparison Section */}
      <Comparison />
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