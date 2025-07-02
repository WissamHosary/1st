import React from 'react';

const CustomService = ({ text, lang }) => {
  return (
    <div className="custom-service-page">
      {/* Hero Section with Video Background */}
      <section className="custom-service-hero">
        <div className="hero-background">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            controls={false}
            className="hero-video"
            onError={(e) => console.log('Video error:', e)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/images/WhatsApp Video 2025-06-26 at 2.41.02 PM (1).mp4" type="video/mp4" />
            <source src="/images/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{lang === 'ar' ? text.customClearanceTitle : 'Custom Clearance'}</h1>
            <p>{lang === 'ar' ? text.customClearanceDesc : 'We provide secure and efficient customs clearance through our air and sea port partners, ensuring compliance with trade laws. Our reliable freight and logistics services offer safe, cost-effective transport for all shipment types.'}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">{lang === 'ar' ? text.aboutUs : 'About Us'}</button>
              <button className="btn btn-secondary">{lang === 'ar' ? text.orderNow : 'Order Now'}</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section (Features) */}
      <section className="about-us-section" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_242125799.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="about-overlay">
          <div className="container about-us-grid">
            <div className="about-us-image">
              <div className="image-container">
                <img src="/images/new6.png" alt="Customs Service" />
                <div className="image-overlay">
                  <i className="fas fa-clipboard-check"></i>
                </div>
              </div>
            </div>
            <div className="about-us-content">
              <h3 className="about-us-title">{lang === 'ar' ? text.aboutUs : 'About Us'}</h3>
              <h2 className="about-us-heading">{lang === 'ar' ? text.customClearanceTitle : 'Custom Clearance'}</h2>
              <p className="about-us-desc">
                {lang === 'ar' ? text.customClearanceDesc : 'We provide secure and efficient customs clearance through our air and sea port partners, ensuring compliance with trade laws. Our reliable freight and logistics services offer safe, cost-effective transport for all shipment types.'}
              </p>
              <ul className="about-us-features">
                <li><span className="check-icon"><i className="fas fa-check"></i></span> {lang === 'ar' ? text.dailyReports : 'Daily Reports'}</li>
                <li><span className="check-icon"><i className="fas fa-check"></i></span> {lang === 'ar' ? text.solveProblems : 'Solve problems and obstacles'}</li>
                <li><span className="check-icon"><i className="fas fa-check"></i></span> {lang === 'ar' ? text.translationService : 'Translation Service'}</li>
                <li><span className="check-icon"><i className="fas fa-check"></i></span> {lang === 'ar' ? text.customsInfo : 'Customs information'}</li>
              </ul>
              <button className="btn btn-primary explore-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/new.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="services-overlay">
          <div className="container">
            <div className="section-header">
              <h2>{lang === 'ar' ? text.ourServices : 'Our Services'}</h2>
              <p>{lang === 'ar' ? text.servicesSubtitle : 'We provide comprehensive and integrated solutions to streamline your customs clearance processes. Our goal is to ensure the swift and efficient clearance'}</p>
            </div>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-number">01</div>
                <div className="service-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <div className="service-content">
                  <h3>{lang === 'ar' ? text.consultancy : 'Consultancy Services'}</h3>
                  <p>{lang === 'ar' ? text.consultancyDesc : 'Expert consultation on customs procedures and regulations'}</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-number">02</div>
                <div className="service-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <div className="service-content">
                  <h3>{lang === 'ar' ? text.dutyEstimation : 'Customs Duty Estimation'}</h3>
                  <p>{lang === 'ar' ? text.dutyEstimationDesc : 'Accurate estimation of customs duties and taxes'}</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-number">03</div>
                <div className="service-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <div className="service-content">
                  <h3>{lang === 'ar' ? text.quickRelease : 'Quick Release of Goods'}</h3>
                  <p>{lang === 'ar' ? text.quickReleaseDesc : 'Expedited customs clearance for faster delivery'}</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-number">04</div>
                <div className="service-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="service-content">
                  <h3>{lang === 'ar' ? text.coordination : 'Coordination with Authorities'}</h3>
                  <p>{lang === 'ar' ? text.coordinationDesc : 'Direct coordination with customs authorities'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="process-steps" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/new1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="steps-overlay">
          <div className="container">
            <div className="section-header">
              <h2>Our Process</h2>
              <p>Simple and efficient customs clearance process</p>
            </div>
            <div className="advanced-steps">
              <div className="advanced-step">
                <div className="step-image">
                  <img src="/images/communcation.jpg" alt="Documentation Review" />
                </div>
                <div className="step-content">
                  <h3>Documentation Review</h3>
                  <p>We carefully review all your shipping documents and ensure compliance with customs regulations</p>
                </div>
                <div className="step-number">01</div>
              </div>
              <div className="advanced-step">
                <div className="step-image">
                  <img src="/images/planning.jpeg" alt="Customs Processing" />
                </div>
                <div className="step-content">
                  <h3>Customs Processing</h3>
                  <p>Our experts handle all customs procedures and coordinate with authorities for smooth clearance</p>
                </div>
                <div className="step-number">02</div>
              </div>
              <div className="advanced-step">
                <div className="step-image">
                  <img src="/images/delivery.jpg" alt="Cargo Release" />
                </div>
                <div className="step-content">
                  <h3>Cargo Release</h3>
                  <p>Once cleared, we ensure swift release and delivery of your cargo to the final destination</p>
                </div>
                <div className="step-number">03</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_443956767.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="section-overlay">
          <div className="container">
            <div className="section-header">
              <h2 style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{lang === 'ar' ? text.whyChooseUs : 'Why Choose Us'}</h2>
              <p style={{color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>{lang === 'ar' ? text.whyChooseUsDesc : 'Discover why choose us. Learn how we make customs clearance faster, safer, and more efficient.'}</p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="feature-content">
                  <h3>Fast Processing</h3>
                  <p>Quick customs clearance with minimal delays</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="feature-content">
                  <h3>Secure Handling</h3>
                  <p>Safe and secure processing of all documents</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-content">
                  <h3>Expert Team</h3>
                  <p>Experienced customs professionals</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="feature-content">
                  <h3>Global Coverage</h3>
                  <p>Worldwide customs clearance services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_54933137.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="cta-overlay">
          <div className="container">
            <div className="cta-content">
              <h2>{lang === 'ar' ? text.readyToStart : 'Ready to Get Started?'}</h2>
              <p>{lang === 'ar' ? text.contactUsToday : 'Contact us today for professional customs clearance services'}</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">{lang === 'ar' ? text.getQuote : 'Get Quote'}</button>
                <button className="btn btn-secondary">{lang === 'ar' ? text.contactUs : 'Contact Us'}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomService; 