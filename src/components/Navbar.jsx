import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Adjust the path if your Logo.png is elsewhere
import './Navbar.css'; // Make sure to create this CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Name */}
        <div className="navbar-logo">
          <img src={logo} alt="Health and Pharma Logo" className="logo-icon" />
          <span className="logo-name">Health and Pharma</span>
        </div>
        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/details" className="nav-link">Event Details</Link>
          <Link to="/rsvp" className="nav-link">RSVP</Link>
          <Link to="/pricing" className="nav-link pricing-btn">Pricing</Link>
        </div>
      </div>
    </nav>
  );
}