import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ lang, setLang, text }) => {
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
        <ul className="nav-links">
          <li><Link to="/">{text.navHome}</Link></li>
          <li><Link to="/about">{text.navAbout}</Link></li>
          <li className="services-dropdown">
            <span className="dropdown-toggle">
              {text.navServices} <i className="fas fa-chevron-down"></i>
            </span>
            <div className="dropdown-content">
              <button>{text.serviceSea}</button>
              <button>{text.serviceLand}</button>
              <button>{text.serviceAir}</button>
              <Link to="/custom-service">{text.serviceCustoms}</Link>
            </div>
          </li>
          <li><Link to="/projects">{text.navProjects}</Link></li>
          <li><a href="#order">{text.navOrder}</a></li>
        </ul>
        <button className="lang-selector" onClick={handleLangChange}>
          {lang === 'en' ? 'العربية' : 'English'}
        </button>
      </nav>
    </header>
  );
};

export default Header; 