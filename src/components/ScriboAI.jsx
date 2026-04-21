import Spline from '@splinetool/react-spline';
import Navbar from './ui/Navbar';
import './ScriboAI.css';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// We used Spline here for this 3D AI animation
export default function ScriboAI() {
  const navigate = useNavigate();
  return (
    <div className="scribo-ai-page">
      <Navbar />
      <button onClick={() => navigate('/')} className='home_btn'>
        <ArrowLeft size={16} /> 
        Back to home
      </button>
      <Spline
        scene="https://prod.spline.design/dZrvOwxtx7a-OGKE/scene.splinecode" 
      />
      
      
      <div className="ai-content">
        <button className="get-started-btn" onClick={() => navigate('/ai')}>
          Get Started
        </button>
      </div>
    </div>
  );
}
