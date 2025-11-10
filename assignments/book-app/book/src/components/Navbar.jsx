import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">About</button>
        <button className="nav-btn">Contact</button>
      </div>
      <div className="nav-right">
        <button className="nav-btn">Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;
