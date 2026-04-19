import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='navbar-container'>
                <ul className='navbar'>
                    <Link to="/" className='nav-item'>Home</Link>
                    <Link to="/dashboard" className='nav-item'>Workspace</Link>
                    <li className='nav-item'>Contact</li>
                    <li className='nav-item'>ScriboAI</li>
                    <a href="https://github.com/treeshax/Notion_clone" target="_blank" rel="noopener noreferrer" className='nav-item github-star-btn'>
                        <span className="star-icon">⭐</span> Star on GitHub
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Navbar