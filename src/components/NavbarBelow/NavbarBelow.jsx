import React from 'react';
import './NavbarBelow.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const NavbarBelow = () => {
  return (
    <nav className="navbar_below">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className="nav-links">
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Services</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarBelow;
