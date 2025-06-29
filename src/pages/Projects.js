import React, { useState, useEffect } from 'react';

const Projects = ({ text, lang }) => {
  const [modalContent, setModalContent] = useState(null);

  // Ensure page starts at top when component mounts
  useEffect(() => {
    // Multiple attempts to ensure scroll to top works
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Additional attempts with delays to handle any async issues
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 100);
    
    // Set document scroll position as backup
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const projects = [
    {
      id: 'uim',
      title: "UIM - First Luxury Logistics Services",
      description: "First Luxury Logistics Services Company is proud to be part of a historic event for the first time in Saudi Arabia🏆",
      subtitle: "The 2024 UIM XCAT World Championship X-CAT project",
      badge: "Featured Project",
      image: "/images/WhatsApp Image 2025-06-27 at 12.32.05 AM.jpeg",
      achievements: [
        "Historic first-time event in Saudi Arabia",
        "UIM XCAT World Championship 2024",
        "Comprehensive logistics and event management",
        "International championship coordination",
        "Advanced race management system",
        "Multi-venue operations support"
      ],
      videos: [
        {
          title: "UIM XCAT Championship",
          src: "/images/WhatsApp Video 2025-06-26 at 2.41.02 PM.mp4",
          description: "Historic UIM XCAT World Championship in Saudi Arabia"
        },
        {
          title: "Event Management System",
          src: "/images/WhatsApp Video 2025-06-26 at 2.41.04 PM.mp4",
          description: "Comprehensive event management and logistics"
        },
        {
          title: "Race Operations",
          src: "/images/WhatsApp Video 2025-06-26 at 2.42.05 PM.mp4",
          description: "Advanced race operations and coordination"
        }
      ],
      screenshots: [
        {
          src: "/images/WhatsApp Image 2025-06-26 at 2.40.56 PM.jpeg",
          title: "UIM Championship Dashboard",
          description: "Main championship management dashboard"
        },
        {
          src: "/images/WhatsApp Image 2025-06-26 at 2.40.57 PM.jpeg",
          title: "Race Management Center",
          description: "Real-time race management and tracking"
        },
        {
          src: "/images/WhatsApp Image 2025-06-26 at 2.40.57 PM (1).jpeg",
          title: "Event Coordination",
          description: "International event coordination system"
        },
        {
          src: "/images/WhatsApp Image 2025-06-26 at 2.40.58 PM.jpeg",
          title: "Logistics Operations",
          description: "Comprehensive logistics management"
        },
        {
          src: "/images/WhatsApp Image 2025-06-26 at 2.40.58 PM (1).jpeg",
          title: "Participant Management",
          description: "International participant registration"
        },
        {
          src: "/images/WhatsApp Image 2025-06-26 at 2.40.58 PM (2).jpeg",
          title: "Results and Analytics",
          description: "Real-time results and championship analytics"
        }
      ]
    },
    {
      id: 'air-freight',
      title: "Air Freight Project",
      description: "Comprehensive air freight logistics and cargo management system for global operations",
      badge: "Logistics Project",
      image: "/images/air.jpg",
      achievements: [
        "Streamlined cargo tracking and management",
        "Real-time flight monitoring and scheduling",
        "Automated documentation processing",
        "Multi-airport operations support",
        "Advanced reporting and analytics",
        "Customer portal integration"
      ],
      videos: [
        {
          title: "System Overview",
          src: "/images/WhatsApp Video 2025-06-27 at 12.27.20 AM.mp4",
          description: "Complete air freight system demonstration"
        },
        {
          title: "Cargo Management",
          src: "/images/WhatsApp Video 2025-06-27 at 12.27.20 AM (1).mp4",
          description: "Cargo tracking and management features"
        }
      ],
      screenshots: [
        {
          src: "/images/WhatsApp Image 2025-06-27 at 12.29.25 AM (1).jpeg",
          title: "Air Freight Dashboard",
          description: "Main air freight operations dashboard"
        },
        {
          src: "/images/WhatsApp Image 2025-06-27 at 12.29.25 AM (2).jpeg",
          title: "Cargo Tracking",
          description: "Real-time cargo tracking interface"
        },
        {
          src: "/images/WhatsApp Image 2025-06-27 at 12.29.25 AM (3).jpeg",
          title: "Flight Management",
          description: "Flight scheduling and management"
        }
      ]
    }
];

  const openModal = (project) => {
    setModalContent(project);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="projects-page">
      {/* Hero Section with Video Background */}
      <section className="projects-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop className="hero-video">
            <source src="/images/WhatsApp Video 2025-06-26 at 2.41.03 PM.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>{lang === 'ar' ? 'مشاريعنا' : 'Our Projects Portfolio'}</h1>
          <p>{lang === 'ar' ? 'اكتشف حلولنا المبتكرة وقصص نجاحنا' : 'Discover our innovative solutions and success stories'}</p>
        </div>
      </section>

      {/* Projects Background Container - Covers all sections below */}
      <div className="projects-background-container" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/AdobeStock_262696967.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="projects-background-overlay">
          
          {/* Featured Project - UIM */}
          <section className="featured-project">
            <div className="container">
              <div className="featured-header">
                <span className="featured-badge">Featured Project</span>
                <h2>UIM XCAT World Championship 2024</h2>
              </div>
              <div className="featured-content">
                <div className="featured-image">
                  <img 
                    src="/images/WhatsApp Image 2025-06-27 at 12.32.05 AM.jpeg" 
                    alt="UIM Project" 
                    onClick={() => openModal(projects[0])}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="featured-info">
                  <h3>First Luxury Logistics Services</h3>
                  <p className="featured-description">
                    First Luxury Logistics Services Company is proud to be part of a historic event for the first time in Saudi Arabia🏆
                  </p>
                  <p className="featured-subtitle">The 2024 UIM XCAT World Championship X-CAT project</p>
                  <button 
                    className="view-projects-btn"
                    onClick={() => openModal(projects[0])}
                  >
                    View Project Details
                  </button>
                </div>
            </div>
          </div>
        </section>

          {/* Air Freight Section */}
          <section className="featured-project">
          <div className="container">
              <div className="featured-header">
                <span className="featured-badge">Logistics Project</span>
                <h2>Air Freight Management System</h2>
              </div>
              <div className="featured-content">
                <div className="featured-info">
                  <h3>Air Freight Project</h3>
                  <p className="featured-description">
                    Comprehensive air freight logistics and cargo management system for global operations
                  </p>
                  <button 
                    className="view-projects-btn"
                    onClick={() => openModal(projects[1])}
                  >
                    View Project Details
                  </button>
                  </div>
                <div className="featured-image">
                  <img 
                    src="/images/air.jpg" 
                    alt="Air Freight Project" 
                    onClick={() => openModal(projects[1])}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
            </div>
          </div>
        </section>

        </div>
      </div>

        {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <span className="featured-tag">{modalContent.badge}</span>
              <h3>{modalContent.title}</h3>
            </div>
            
            <div className="modal-details">
              <p className="modal-main-description">{modalContent.description}</p>
              <p className="modal-subtitle">{modalContent.subtitle}</p>
              
              <div className="modal-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {modalContent.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {modalContent.videos && modalContent.videos.length > 0 && (
                <div className="modal-videos">
                  <h4>Project Videos</h4>
                  <div className="videos-grid">
                    {modalContent.videos.map((video, index) => (
                      <div key={index} className="video-item">
                        <video controls>
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="video-info">
                          <h5>{video.title}</h5>
                          <p>{video.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {modalContent.screenshots && modalContent.screenshots.length > 0 && (
                <div className="featured-gallery">
                  <h4>Project Gallery</h4>
                  <div className="projects-grid">
                    {modalContent.screenshots.map((screenshot, index) => (
                      <div key={index} className="project-item">
                        <img src={screenshot.src} alt={screenshot.title} />
                      </div>
                    ))}
            </div>
          </div>
        )}
      </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 