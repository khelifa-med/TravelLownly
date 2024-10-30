import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">Soul<span>Travel</span>.</a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <span>
            <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </span>
        </div>
      </div>
      <ul className={`nav__links ${isMenuOpen ? 'open' : ''}`} id="nav-links">
        <li><a href="#">Destination</a></li>
        <li><a href="#">Package</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="nav__btns">
        <button className="btn sign__up">Sign Up</button>
        <button className="btn sign__in">Sign In</button>
      </div>
    </nav>
  );
}
