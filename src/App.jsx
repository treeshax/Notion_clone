import React from 'react'
import LightRays from './components/Hero'
import './index.css'


function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
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
    </>
  )
}

export default App