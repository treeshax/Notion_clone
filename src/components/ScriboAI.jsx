import Spline from '@splinetool/react-spline';
import Navbar from './ui/Navbar';
import './ScriboAI.css';

// We used Spline here for this 3D AI animation
export default function ScriboAI() {
  return (
    <div className="scribo-ai-page">
      <Navbar />
      <Spline
        scene="https://prod.spline.design/dZrvOwxtx7a-OGKE/scene.splinecode" 
      />
      
      <div className="ai-content">
        <button className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}
