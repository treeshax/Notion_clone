import React from 'react'
import LightRays from './components/Hero'
import Navbar from './components/ui/Navbar'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-heading">Build your second brain.</h1>
          <p className="hero-subheading">
            Write, plan, and organize without distractions.
          </p>
          <div className="hero-cta">
            <a href="#get-started" className="btn-primary">Get started for free</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App