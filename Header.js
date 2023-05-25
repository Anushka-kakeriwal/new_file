import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`header-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li className="logo">
          <img src={logo} alt="Logo" />
        </li>
        <li><a href="/infrarot" className="active">Infrarot</a></li>
        <li><a href="/podcast">Podcast</a></li>
        <li><a href="/narrative-sleep">Narrative Sleep</a></li>
        <li><a href="/infrarot-special">Infrarot Spezial</a></li>
        <li><a href="/kommentar">Kommentar</a></li>
        <li><a href="/infrarot-im-gespraech">Infrarot im Gespräch</a></li>
        <li className="search-icon-container">
          <i className="fas fa-search"></i>
          {isMobileMenuOpen && (
            <div className="search-popup">
              <button><i className="fas fa-search"></i></button>
              <input type="text" placeholder="Search" />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
