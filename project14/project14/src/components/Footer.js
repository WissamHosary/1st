import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = ({ text }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (target) => {
    if (target === 'projects') {
      // Clear any existing scroll position
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Navigate to projects page
      navigate('/projects');
      // Force scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 50);
    } else if (location.pathname === '/') {
      // If on home page, scroll to section
      scrollToSection(target);
    } else {
      // If on other pages, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="footer advanced-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>1st Luxury Logistics Services</h3>
              <p>Your trusted logistics partner for reliable shipping and freight services worldwide. Delivering excellence across Saudi Arabia and beyond.</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => handleNavigation('hero')}>Home</button></li>
              <li><button onClick={() => handleNavigation('about')}>About</button></li>
              <li><button onClick={() => handleNavigation('services')}>Services</button></li>
              <li><button onClick={() => handleNavigation('projects')}>Our Projects</button></li>
              <li><button onClick={() => handleNavigation('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>Air Freight Services (Import & Export)</li>
              <li>Sea Freight Services (FCL / LCL)</li>
              <li>Custom Clearance (Seaport / Airport)</li>
              <li>Local Transportation Services</li>
              <li>Cargo Insurance</li>
              <li>Order Management</li>
              <li>Saber Certificates</li>
              <li>SFDA Certificates</li>
              <li>ATA Carnet</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="footer-contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Saudi Arabia - Jeddah<br/>Prince Sultan Street, Business District</p>
              <p><i className="fas fa-envelope"></i> info@1st-luxury.com</p>
              <p><i className="fas fa-phone"></i> +966 54 077 7775</p>
              <p><i className="fas fa-clock"></i> 24/7 Customer Support</p>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <span className="footer-copyright">© 2024 1st Luxury Logistics Services. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
              <a href="/terms" aria-label="Terms of Service">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 