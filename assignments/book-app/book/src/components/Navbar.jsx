import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="nav-btn">Home</button>
      </div>
      <div className="nav-right">
        <button className="nav-btn">Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;
