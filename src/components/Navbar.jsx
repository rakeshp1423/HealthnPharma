import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Name - clickable, refreshes page */}
        <Link to="/" className="navbar-logo" onClick={() => window.location.reload()}>
          <img src={logo} alt="Health and Pharma Logo" className="logo-icon" />
          <span className="logo-name">Health and Pharma</span>
        </Link>
        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}>About Us</Link>
          <Link to="/details" className={`nav-link${location.pathname === '/details' ? ' active' : ''}`}>Event Details</Link>
          <Link to="/rsvp" className={`nav-link${location.pathname === '/rsvp' ? ' active' : ''}`}>RSVP</Link>
          <Link to="/pricing" className={`nav-link pricing-btn${location.pathname === '/pricing' ? ' active' : ''}`}>Pricing</Link>
        </div>
      </div>
    </nav>
  );
}