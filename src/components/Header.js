import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ lang, setLang, text }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLangChange = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
  };

  return (
    <header className="main-header">
      <div className="top-bar">
        <div className="top-bar-content">
          <span><i className="fas fa-map-marker-alt"></i> Saudi Arabia - Jeddah, Prince Sultan Street</span>
          <span><i className="fas fa-envelope"></i> info@1st-luxury.com</span>
          <span><i className="fas fa-phone"></i> +966540777775</span>
        </div>
      </div>
      <nav className="navbar advanced-navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="1st Luxury Logo" className="logo-img"/>
          <div className="logo-text">
            <h1>1st Luxury</h1>
            <span>LOGISTICS SERVICES</span>
          </div>
        </div>
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu}>{text.navHome}</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>{text.navAbout}</Link></li>
          <li className="services-dropdown">
            <span className="dropdown-toggle">
              {text.navServices} <i className="fas fa-chevron-down"></i>
            </span>
            <div className="dropdown-content">
              <button onClick={closeMobileMenu}>{text.serviceSea}</button>
              <button onClick={closeMobileMenu}>{text.serviceLand}</button>
              <button onClick={closeMobileMenu}>{text.serviceAir}</button>
              <Link to="/custom-service" onClick={closeMobileMenu}>{text.serviceCustoms}</Link>
            </div>
          </li>
          <li><Link to="/projects" onClick={closeMobileMenu}>{text.navProjects}</Link></li>
          <li><a href="#order" onClick={closeMobileMenu}>{text.navOrder}</a></li>
          <li>
            <button 
              className="lang-selector" 
              onClick={() => {
                handleLangChange();
                closeMobileMenu();
              }}
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </li>
        </ul>
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </nav>
    </header>
  );
};

export default Header; 