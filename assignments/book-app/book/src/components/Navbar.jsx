import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/signup" className="nav-btn">SignUp</Link>
      </div>
    </nav>
  );
}

export default Navbar;
