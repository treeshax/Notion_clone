import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../../scribo_logo.png'

function Navbar() {
    return (
        <nav className='header-nav'>
            <div className='brand-section'>
                <img src={Logo} alt="Scribo Logo" className="logo-img" />
            </div>
            
            <div className='navbar-container'>
                <ul className='navbar'>
                    <Link to="/" className='nav-item'>Home</Link>
                    <Link to="/dashboard" className='nav-item'>Workspace</Link>
                    <li className='nav-item'>Contact</li>
                    <Link to="/scriboai" className='nav-item'>ScriboAI</Link>
                </ul>
            </div>

            <div className="nav-actions">
                <a href="https://github.com/treeshax/Notion_clone" target="_blank" rel="noopener noreferrer" className='nav-item github-star-btn'>
                    <span className="star-icon">⭐</span> Star on GitHub
                </a>
            </div>
        </nav>
    )
}

export default Navbar