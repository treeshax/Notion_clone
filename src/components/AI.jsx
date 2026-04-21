import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spline from '@splinetool/react-spline'
import { 
  Send, 
  Sparkles, 
  ArrowLeft,
  Loader2,
  Zap,
  Globe,
  FileText,
  Search
} from 'lucide-react'
import './AI.css'

function AI() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const queryHF = async (prompt) => {
    if (!import.meta.env.VITE_HF_TOKEN) {
      return "ScriboAI Token not found. Please ensure VITE_HF_TOKEN is set in your .env file and restart the server.";
    }

    // Trying a very reliable model on the free tier (Mistral 7B)
    const model = "mistralai/Mistral-7B-Instruct-v0.2";
    
    // We try the standard inference API first as it often gives better error messages
    const endpoints = [
      `https://api-inference.huggingface.co/models/${model}`,
      "https://router.huggingface.co/v1/chat/completions"
    ];

    for (const url of endpoints) {
      try {
        const isStandard = url.includes("api-inference");
        const body = isStandard 
          ? JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 500 } })
          : JSON.stringify({
              model: model,
              messages: [{ role: "user", content: prompt }],
              max_tokens: 500
            });

        const res = await fetch(url, {
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: body,
        });

        const result = await res.json();
        
        // Handle Standard API response (which returns an array or object directly)
        if (isStandard && Array.isArray(result) && result[0].generated_text) {
          return result[0].generated_text;
        }

        // Handle Chat Completions API response
        if (result.choices && result.choices[0]) {
          return result.choices[0].message.content;
        } 
        
        if (result.error) {
          // If it's a loading error, tell the user to wait
          if (result.error.toLowerCase().includes("loading")) {
            return "ScriboAI is currently waking up (loading the model). Please wait 30 seconds and try again.";
          }
          console.error(`Error from ${url}:`, result.error);
        }
      } catch (error) {
        console.error(`Fetch error from ${url}:`, error);
      }
    }

    return "Still can't reach ScriboAI. This can happen if Hugging Face is over capacity or the token is newly created. Please try once more in a few minutes.";
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    
    const botResponse = await queryHF(input);
    setResponse(botResponse);
    setIsLoading(false);
  };

  return (
    <div className="minimal-ai-container">
      {/* Dynamic 3D Background */}
      <div className="spline-bg-wrapper">
        <Spline scene="https://prod.spline.design/JTqDcX9m7cKDnaMe/scene.splinecode" />
      </div>
      
      <div className="grid-overlay"></div>

      <nav className="minimal-nav">
        <button onClick={() => navigate('/')} className="back-link">
          <ArrowLeft size={20} />
          <span>Exit ScriboAI</span>
        </button>
      </nav>

      <main className="ai-center-stage">
        <div className="ai-branding">
          <div className="logo-spark">
            <Sparkles size={32} />
          </div>
          <h1>What can I help you build?</h1>
        </div>

        <div className="glass-card">
          <form className="minimal-input-wrapper" onSubmit={handleSearch}>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Ask anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />
              <div className="search-actions">
                <button 
                  type="submit" 
                  className={`search-submit ${input.trim() ? 'active' : ''}`}
                  disabled={!input.trim() || isLoading}
                >
                  {isLoading ? <Loader2 className="spinning" size={20} /> : <ArrowLeft className="rotate-icon" size={20} />}
                </button>
              </div>
            </div>
            
            <div className="quick-suggestions">
              <button type="button" onClick={() => setInput('Summarize my recent notes')} className="suggest-tag">
                <FileText size={14} /> Summarize notes
              </button>
              <button type="button" onClick={() => setInput('Plan a weekly schedule')} className="suggest-tag">
                <Zap size={14} /> Plan schedule
              </button>
              <button type="button" onClick={() => setInput('Find research on AI agents')} className="suggest-tag">
                <Search size={14} /> AI Research
              </button>
            </div>
          </form>
        </div>

        {response && (
          <div className="ai-result-panel">
            <div className="result-header">
              <div className="spark-badge">
                <Sparkles size={14} /> ScriboAI Response
              </div>
            </div>
            <div className="result-text">
              {response}
            </div>
          </div>
        )}

        {isLoading && !response && (
          <div className="processing-indicator">
            <div className="skeleton-line"></div>
            <div className="skeleton-line mid"></div>
            <div className="skeleton-line short"></div>
          </div>
        )}
      </main>
    </div>
  )
}

export default AI