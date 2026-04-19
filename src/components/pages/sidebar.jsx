import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'
import Logo from '../../../scribo_logo.png'

function Sidebar({ pages, setPages, setCurrentPage, currentPage }) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleWorkspaceName = (e) => {
    e.preventDefault();
    const name = e.target.elements.workspaceName.value;
    if (name.trim()) {
      setWorkspaceName(name);
      setIsSubmitted(true);
    }
  }

  const addPage = () => {
    const newPage = {
      id: Date.now(),
      title: "Untitled",
      content: [""] 
    };

    const updatedPages = [...pages, newPage];
    setPages(updatedPages);
    setCurrentPage(newPage); 
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="home-link">← Home</Link>
        <div className="workspace-section">
          {isSubmitted ? (
            <div className="sidebar-brand">
              <img src={Logo} alt="Scribo" className="sidebar-logo" />
              <h2 className="workspace-title clickable" onClick={() => setIsSubmitted(false)}>
                {workspaceName}
              </h2>
            </div>
          ) : (
            <form onSubmit={handleWorkspaceName} className="workspace-form">
              <input 
                type="text" 
                placeholder='Name your workspace' 
                name='workspaceName' 
                autoFocus
                className="workspace-input"
                defaultValue={workspaceName}
              />
            </form>
          )}
        </div>
      </div>

      {isSubmitted && (
        <>
          <button className="new-page-btn" onClick={addPage}>
            + New Page
          </button>

          <div className="pages-list">
            {pages.map((page) => (
              <div 
                key={page.id}
                className={`page-item ${
                  currentPage?.id === page.id ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                <span className="page-icon">📄</span>
                {page.title || "Untitled"}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;