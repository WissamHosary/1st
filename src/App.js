import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import en from './locales/en.json';
import ar from './locales/ar.json';
import Projects from './pages/Projects';
import CustomService from './pages/CustomService';
import About from './pages/About';

const translations = { en, ar };

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState('en');
  const [text, setText] = useState(translations[lang]);


  useEffect(() => {
    setText(translations[lang]);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleLangChange = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Complete Home Page Component
  const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const services = [
      { title: "Air Freight Services", subtitle: "(Import & Export)", image: "/images/1.jpeg" },
      { title: "Sea Freight Services", subtitle: "(FCL / LCL) (Import & Export)", image: "/images/2.png" },
      { title: "Custom Clearance", subtitle: "(Seaport / Airport) Globally", image: "/images/3.jpg" },
      { title: "Local Transportation Services", subtitle: "", image: "/images/4.webp" },
      { title: "Cargo Insurance", subtitle: "", image: "/images/5.png" },
      { title: "Order Management", subtitle: "", image: "/images/6.jpeg" },
      { title: "Saber Certificates", subtitle: "", image: "/images/7.jpg" },
      { title: "SFDA Certificates", subtitle: "", image: "/images/8.jpeg" },
      { title: "ATA Carnet", subtitle: "", image: "/images/9.webp" }
    ];

    const servicesPerView = 5;
    const maxSlide = services.length - servicesPerView;

    const nextSlide = () => {
      if (currentSlide < maxSlide) {
        setCurrentSlide(prev => prev + 1);
      }
    };

    const prevSlide = () => {
      if (currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    return (
      <>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-background">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="hero-video"
            >
              <source src="/images/AdobeStock_359292250.mov" type="video/quicktime" />
              <source src="/images/AdobeStock_359292250.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Smart Logistics, Unlimited Services</h1>
            <p className="hero-description">
              At 1st Luxury, we combine cutting-edge technology with practical expertise to provide integrated logistics solutions tailored to your business needs. From air and sea freight to storage and real-time tracking, we ensure your shipment arrives safely and on time. Let us be your partner in success.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">About Us</Link>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact us</button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-section-home" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_242125799.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="about-content-home">
            <div className="about-image-home">
              <img src="/images/new5.png" alt="About Us" />
            </div>
            <div className="about-text-home">
              <h2>About Us</h2>
              <h3>Fast and reliable shipping services</h3>
              <p>Founded in 2016 and incorporated in 2022, 1st Luxury Logistics Services specializes in e-commerce, supply chain, and logistics. Based in KSA, our expert team drives growth while fostering long-term professional development.</p>
              <div className="about-features-home">
                <div className="feature-home">
                  <i className="fas fa-lightbulb"></i>
                  <span>Pioneering expertise in innovative logistics solutions.</span>
                </div>
                <div className="feature-home">
                  <i className="fas fa-shipping-fast"></i>
                  <span>Committed to providing fast and secure shipping services.</span>
                </div>
                <div className="feature-home">
                  <i className="fas fa-handshake"></i>
                  <span>Dedicated to building long-term partnerships with our clients.</span>
                </div>
                <div className="feature-home">
                  <i className="fas fa-cogs"></i>
                  <span>Advanced technologies ensuring efficiency and reliability.</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary explore-btn">Explore More</Link>
            </div>
          </div>
        </section>

        {/* Services Section - 9 Transport Services */}
        <section id="services" className="section services-section" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/new.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 2, background: 'none', padding: '0' }}>
            <div className="section-header">
              <h2>Our Services</h2>
              <h3>Transport and Logistics Services</h3>
              <p>We offer exceptional services in our company that meet the needs of your business. We combine professionalism and efficiency to provide a safe and reliable shipping experience</p>
            </div>
            <div className="services-carousel-container">
              <div className="services-carousel">
                <div 
                  className="services-grid" 
                  style={{ 
                    transform: `translateX(-${currentSlide * (100 / servicesPerView)}%)`
                  }}
                >
                  {services.map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-icon">
                        <img src={service.image} alt={service.title} className="service-image" />
                      </div>
                      <h4>{service.title}</h4>
                      {service.subtitle && <p>{service.subtitle}</p>}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                className="carousel-nav prev" 
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                &#8249;
              </button>
              <button 
                className="carousel-nav next" 
                onClick={nextSlide}
                disabled={currentSlide === maxSlide}
              >
                &#8250;
              </button>
            </div>
          </div>
        </section>

        {/* 1,2,3 Steps Section */}
        <section id="easy-steps" className="section easy-steps-section" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_366453040.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
          <div className="steps-overlay">
            <div className="container">
              <div className="section-header">
                <h2>Easy 1,2,3 Step To Task</h2>
                <p>We ensure a seamless logistics experience, offering reliable shipping services and fast execution to guarantee your satisfaction</p>
              </div>
              <div className="advanced-steps">
                <div className="advanced-step">
                  <div className="step-number">1</div>
                  <div className="step-image">
                    <img src="/images/communcation.jpg" alt="Communication with Client" />
                  </div>
                  <div className="step-content">
                    <h3>Communication with Client</h3>
                    <p>We carefully plan every step of the process, from preparing the shipment to securing operations using the appropriate tools</p>
                  </div>
                </div>
                <div className="advanced-step">
                  <div className="step-number">2</div>
                  <div className="step-image">
                    <img src="/images/planning.jpeg" alt="Planning and Execution" />
                  </div>
                  <div className="step-content">
                    <h3>Planning and Execution</h3>
                    <p>We carefully plan every step of the process, from preparing the shipment to securing operations using the appropriate tools</p>
                  </div>
                </div>
                <div className="advanced-step">
                  <div className="step-number">3</div>
                  <div className="step-image">
                    <img src="/images/delivery.jpg" alt="Delivery and Follow-up" />
                  </div>
                  <div className="step-content">
                    <h3>Delivery and Follow-up</h3>
                    <p>We ensure timely delivery of the service or shipment, followed by thorough follow-up to guarantee client satisfaction and success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <section id="partners" className="partners-section" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_443956767.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
          <div className="partners-overlay">
            <div className="container">
              <div className="section-header">
                <h2 style={{
                  color: 'white', 
                  fontSize: '3rem',
                  fontWeight: '900',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8), 2px 2px 0 rgba(255,107,53,0.5)',
                  letterSpacing: '2px',
                  marginBottom: '20px'
                }}>Our Trusted Partners</h2>
                <p style={{
                  color: 'white', 
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)',
                  lineHeight: '1.6'
                }}>Working with industry leaders worldwide</p>
              </div>
              <div className="partners-container">
                <div className="partners-track">
                  <div className="partner-item">
                    <img src="/images/image-213.png" alt="Partner 1"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-191.png" alt="Partner 2"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-220.png" alt="Partner 3"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-203.png" alt="Partner 4"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-204.png" alt="Partner 5"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-188-1.png" alt="Partner 6"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-209-1.png" alt="Partner 7"/>
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="partner-item">
                    <img src="/images/image-213.png" alt="Partner 1"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-191.png" alt="Partner 2"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-220.png" alt="Partner 3"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-203.png" alt="Partner 4"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-204.png" alt="Partner 5"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-188-1.png" alt="Partner 6"/>
                  </div>
                  <div className="partner-item">
                    <img src="/images/image-209-1.png" alt="Partner 7"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Projects Section */}
        <section id="latest-projects" className="section latest-projects-section" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/jded.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
          <div className="projects-overlay">
            <div className="container">
              <div className="section-header">
                <h2>Discover Our Recent Successfully Completed Projects</h2>
                <p>Discover our recent successful logistics operations and achievements</p>
              </div>
              <div className="latest-projects-grid">
                <div className="project-preview-card">
                  <img src="/images/WhatsApp Image 2025-06-26 at 2.40.56 PM.jpeg" alt="Project 1" />
                </div>
                <div className="project-preview-card">
                  <img src="/images/WhatsApp Image 2025-06-26 at 2.40.58 PM (1).jpeg" alt="Project 2" />
                </div>
                <div className="project-preview-card">
                  <img src="/images/WhatsApp Image 2025-06-26 at 2.40.58 PM.jpeg" alt="Project 3" />
                </div>
              </div>
              <div className="projects-cta">
                <Link to="/projects" className="btn btn-primary view-projects-btn">
                  Explore all projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section advanced-contact-section" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_54933137.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
          <div className="contact-overlay">
            <div className="container">
              <div className="section-header">
                <h2>Contact Us</h2>
                <p>Get in touch with our logistics experts for your shipping needs</p>
              </div>
              <div className="advanced-contact-content">
                <div className="contact-form-container">
                  <div className="contact-form-card">
                    <h3>Send us a Message</h3>
                    <form className="advanced-contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                          <input type="email" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="Subject" required />
                      </div>
                      <div className="form-group">
                        <textarea placeholder="Your Message" rows="4" required></textarea>
                      </div>
                      <button type="submit" className="contact-submit-btn">
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <Router>
      <ScrollToTop />
    <div className="App">
        {/* Header with Top Bar and Navigation */}
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
                  <a href="#sea-shipping" onClick={() => scrollToSection('sea-shipping')}>Sea Shipping</a>
                  <a href="#land-transport" onClick={() => scrollToSection('land-transport')}>Land Transport</a>
                  <a href="#air-freight" onClick={() => scrollToSection('air-freight')}>Air Freight</a>
                  <Link to="/custom-service">Custom Service</Link>
                </div>
              </li>
              <li><a href="#sponsors" onClick={() => scrollToSection('sponsors')}>{text.navPartners}</a></li>
              <li><Link to="/projects">{text.navProjects}</Link></li>
              <li><a href="#order" onClick={() => scrollToSection('order')}>{text.navOrder}</a></li>
            </ul>
            <button className="lang-selector" onClick={handleLangChange}>
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects text={text} lang={lang} />} />
            <Route path="/custom-service" element={<CustomService text={text} lang={lang} />} />
            <Route path="/about" element={<About text={text} lang={lang} />} />
          </Routes>
        </main>

        {/* WhatsApp Button */}
        <div className="whatsapp-float">
          <a href="https://wa.me/966540777775" target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp-logo.svg" alt="WhatsApp"/>
          </a>
        </div>

        {/* Enhanced Footer */}
        <footer className="advanced-footer">
          <div className="footer-background" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/oo.avif)`}}></div>
          <div className="footer-overlay"></div>
          <div className="container">
            <div className="footer-content">
              <div className="footer-section footer-company">
                <div className="footer-logo">
                  <img src="/images/logo.png" alt="1st Luxury Logo" className="footer-logo-img"/>
                  <div className="footer-logo-text">
                    <h3>1st Luxury</h3>
                    <span>LOGISTICS SERVICES</span>
                  </div>
                </div>
                <p className="footer-description">
                  Your trusted partner in logistics and shipping solutions. We provide comprehensive services worldwide with reliability and excellence.
                </p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><button onClick={() => scrollToSection('about')} className="footer-link-btn">About</button></li>
                  <li><Link to="/projects">Our Projects</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><button onClick={() => scrollToSection('contact')} className="footer-link-btn">Contact</button></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Our Services</h4>
                <ul>
                  <li>Air Freight Services</li>
                  <li>Sea Freight Services</li>
                  <li>Custom Clearance</li>
                  <li>Local Transportation</li>
                  <li>Cargo Insurance</li>
                  <li>Order Management</li>
                  <li>Saber Certificates</li>
                  <li>SFDA Certificates</li>
                  <li>ATA Carnet</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact Info</h4>
                <div className="contact-info">
                  <p><i className="fas fa-map-marker-alt"></i> Saudi Arabia - Jeddah, Prince Sultan Street</p>
                  <p><i className="fas fa-envelope"></i> info@1st-luxury.com</p>
                  <p><i className="fas fa-phone"></i> +966540777775</p>
                </div>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://wa.me/966540777775" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p>&copy; 2024 1st Luxury Logistics Services. All rights reserved.</p>
                <div className="footer-bottom-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
    </Router>
  );
}

export default App;
