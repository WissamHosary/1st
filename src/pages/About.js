import React from 'react';

const About = ({ text, lang }) => {
  return (
    <div className="about-page">
      {/* Hero Section - Back to Original with Background */}
      <section className="about-hero">
        <div className="hero-background">
          <img src="/images/AdobeStock_62811947.jpeg" alt="About Hero" className="hero-image" />
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{lang === 'ar' ? 'من نحن' : 'About Us'}</h1>
            <p>{lang === 'ar' ? 'نحن متخصصون في حلول لوجستية مبتكرة، نقدم خدمات شحن احترافية وفعالة لضمان رضا العملاء' : 'We specialize in innovative logistics solutions, delivering professional and efficient shipping services to ensure customer satisfaction.'}</p>
            <button className="btn btn-primary">{lang === 'ar' ? 'اطلب الآن' : 'Order Now'}</button>
          </div>
        </div>
      </section>

      {/* CEO Section - Modern Design */}
      <section className="ceo-section-modern">
        <div className="ceo-background-image">
          <img src="/images/ez.jpeg" alt="Background" />
        </div>
        <div className="ceo-overlay">
        <div className="container">
            <div className="section-header-simple">
              <span className="section-badge">{lang === 'ar' ? 'الرئيس التنفيذي' : 'Chief Executive Officer'}</span>
              <h2>{lang === 'ar' ? 'أحمد خليفة' : 'Ahmed Khalifa'}</h2>
              <p className="section-subtitle">{lang === 'ar' ? 'الشريك المؤسس والرئيس التنفيذي' : 'Co-Founder & Chief Executive Officer'}</p>
            </div>
            
          <div className="ceo-content-modern">
              {/* Left Side - Quote and Company Info */}
            <div className="ceo-text-modern">
                <div className="ceo-quote-card">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
              </div>
                  <blockquote>
                {lang === 'ar' 
                      ? 'تأسست شركة ترف الأولى للخدمات اللوجستية في عام 2022 بالشراكة مع خبراء لديهم أكثر من 20 عاماً من الخبرة في مجالات التسويق والمحاسبة والصناعات البحرية الدولية.'
                      : '1st Luxury Logistics Shipping Services was established in 2022 in partnership with experts who have over 20 years of experience in marketing, accounting, and international shipping industries.'
                    }
                  </blockquote>
                </div>
                
                <div className="ceo-expertise-grid">
                  <div className="expertise-item">
                    <div className="expertise-content">
                      <h4>{lang === 'ar' ? 'خبرة عالمية' : 'Global Expertise'}</h4>
                      <p>{lang === 'ar' ? '20+ سنة خبرة دولية' : '20+ Years International'}</p>
                    </div>
                  </div>
                  
                  <div className="expertise-item">
                    <div className="expertise-content">
                      <h4>{lang === 'ar' ? 'فريق محترف' : 'Professional Team'}</h4>
                      <p>{lang === 'ar' ? 'مقره المملكة العربية السعودية' : 'Saudi Arabia Based'}</p>
                    </div>
                  </div>
                  
                  <div className="expertise-item">
                    <div className="expertise-content">
                      <h4>{lang === 'ar' ? 'رؤية 2030' : 'Vision 2030'}</h4>
                      <p>{lang === 'ar' ? 'متوافق مع رؤية المملكة' : 'Kingdom Vision Aligned'}</p>
                    </div>
                  </div>
                  
                  <div className="expertise-item">
                    <div className="expertise-content">
                      <h4>{lang === 'ar' ? 'نمو مستمر' : 'Continuous Growth'}</h4>
                      <p>{lang === 'ar' ? 'تطوير مهني طويل الأجل' : 'Long-term Development'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - CEO Image and Stats */}
              <div className="ceo-image-modern">
                <div className="ceo-image-container">
                  <div className="image-frame">
                    <img src="/images/ahmad.png" alt="Ahmed Khalifa - CEO" />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h3>{lang === 'ar' ? 'أحمد خليفة' : 'Ahmed Khalifa'}</h3>
                        <p>{lang === 'ar' ? 'الرئيس التنفيذي' : 'Chief Executive Officer'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="ceo-achievement-cards">
                  <div className="achievement-card">
                    <div className="achievement-number">5000+</div>
                    <div className="achievement-label">{lang === 'ar' ? 'عملية شحن ناجحة' : 'Successful Operations'}</div>
                  </div>
                  
                  <div className="achievement-card">
                    <div className="achievement-number">2022</div>
                    <div className="achievement-label">{lang === 'ar' ? 'سنة التأسيس الرسمي' : 'Year Established'}</div>
                  </div>
                  
                  <div className="achievement-card">
                    <div className="achievement-number">20+</div>
                    <div className="achievement-label">{lang === 'ar' ? 'سنة خبرة جماعية' : 'Years Combined Experience'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast and Reliable Services Section - Simple */}
      <section className="services-section-simple">
          <div className="container">
          <div className="section-header-simple">
              <h2>{lang === 'ar' ? 'خدمات شحن سريعة وموثوقة' : 'Fast and Reliable Shipping Services'}</h2>
              <p>
                {lang === 'ar'
                  ? 'تأسست في عام 2016 وتم تسجيلها في عام 2022، وتتخصص شركة ترف الأولى للخدمات اللوجستية في التجارة الإلكترونية وسلسلة التوريد واللوجستيات. مقرها في المملكة العربية السعودية، يقود فريقنا الخبير النمو مع تعزيز التطوير المهني على المدى الطويل.'
                  : 'Founded in 2016 and incorporated in 2022, 1st Luxury Logistics Services specializes in e-commerce, supply chain, and logistics. Based in KSA, our expert team drives growth while fostering long-term professional development.'
                }
              </p>
            </div>
          
          <div className="services-grid-simple">
            <div className="service-item-simple">
              <div className="service-number">1</div>
              <h3>{lang === 'ar' ? 'خبرة رائدة في حلول لوجستية مبتكرة' : 'Pioneering Expertise in Innovative Logistics'}</h3>
              </div>
            <div className="service-item-simple">
              <div className="service-number">2</div>
              <h3>{lang === 'ar' ? 'خدمات شحن سريعة وآمنة' : 'Fast & Secure Shipping Services'}</h3>
              </div>
            <div className="service-item-simple">
              <div className="service-number">3</div>
              <h3>{lang === 'ar' ? 'شراكات طويلة الأجل' : 'Long-term Strategic Partnerships'}</h3>
              </div>
            <div className="service-item-simple">
              <div className="service-number">4</div>
              <h3>{lang === 'ar' ? 'تقنيات متقدمة' : 'Advanced Technologies & Solutions'}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Simple with Background */}
      <section className="stats-section-simple stats-with-background">
        <div className="container">
          <div className="section-header-simple">
            <h2>{lang === 'ar' ? 'إحصائياتنا' : 'Our Statistics'}</h2>
            <p>{lang === 'ar' ? 'أرقام تتحدث عن نجاحنا وخبرتنا' : 'Numbers that speak about our success and expertise'}</p>
          </div>
          
          <div className="stats-grid-simple">
            <div className="stat-card-simple">
              <h3>25K+</h3>
              <p>{lang === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients'}</p>
            </div>
            <div className="stat-card-simple">
              <h3>2100+</h3>
              <p>{lang === 'ar' ? 'تسليم مكتمل' : 'Completed Delivery'}</p>
            </div>
            <div className="stat-card-simple">
              <h3>15+</h3>
              <p>{lang === 'ar' ? 'جائزة فائز' : 'Awards Winner'}</p>
            </div>
            <div className="stat-card-simple">
              <h3>800+</h3>
              <p>{lang === 'ar' ? 'عضو فريق' : 'Team Members'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal Section - Simple with Background */}
      <section className="mvp-section-simple mvp-with-background">
        <div className="container">
          <div className="mvp-grid-simple">
            <div className="mvp-item-simple">
              <h2>{lang === 'ar' ? 'هدفنا' : 'Our Goal'}</h2>
              <p>
                {lang === 'ar'
                  ? 'هدفنا هو تقديم أفضل خيارات الشحن لك، بغض النظر عن مكان إقامتك. كل يوم، نقدم إلى مئات العملاء في جميع أنحاء المملكة، مما يضمن أننا نقدم أعلى مستويات الاستجابة لك في جميع الأوقات.'
                  : 'Our goal is to offer you the best shipping options, no matter where you live. Every day, we deliver to hundreds of customers across the Kingdom, ensuring that we provide the highest levels of responsiveness to you at all times.'
                }
              </p>
            </div>
            <div className="mvp-item-simple">
              <h2>{lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h2>
              <p>
                {lang === 'ar'
                  ? 'مع رؤية 2030، تتمتع المملكة العربية السعودية بإمكانات نمو في التجارة الإلكترونية وسلسلة التوريد واللوجستيات. والطلب يتزايد بسرعة مما يعطي فرصة لجميع الشركات الجديدة القادمة لتصنيف أنفسهم لفترة غير محددة.'
                  : 'With the vision of 2030, Saudi Arabia has potential growth of E-commerce, supply chain and logistics. And the demand is increasing rapidly which gives a chance for all upcoming new companies to brand them for an indefinite period.'
                }
              </p>
            </div>
            <div className="mvp-item-simple">
              <h2>{lang === 'ar' ? 'مهمتنا' : 'Our Mission'}</h2>
              <p>
                {lang === 'ar'
                  ? 'تأسست شركة ترف الأولى للخدمات اللوجستية في أواخر عام 2016 ولكن تم تسجيلها في عام 2022 بالشراكة مع خبراء لديهم أكثر من 20 عاماً من الخبرة في التسويق والمحاسبة وصناعة الشحن. تدير الشركة فريق من المحترفين مقره المملكة العربية السعودية.'
                  : '1st Luxury Logistics Services was found in late 2016 but incorporated in 2022 by joint partner with their 20+ years of experience in the marketing, accounting and freight industry. The company is run by a team of professionals located in KSA.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Simple with Background */}
      <section className="why-choose-simple why-choose-with-background">
          <div className="container">
          <div className="section-header-simple">
            <h2>{lang === 'ar' ? 'لماذا نحن؟' : 'Why Choose Us?'}</h2>
            <p>
              {lang === 'ar'
                ? 'نحن شريكك المثالي في الخدمات اللوجستية. نقدم خدمات استثنائية تلبي توقعاتك، نجمع بين الجودة والابتكار والالتزام لنكون شريكك الموثوق في تحقيق النجاح'
                : 'We Are Your Ideal Partner in Logistics Services. We deliver exceptional services that meet your expectations, combining quality, innovation, and commitment to be your trusted partner in achieving success'
              }
            </p>
          </div>
          
          <div className="features-grid-simple">
            <div className="feature-item-simple">
              <div className="feature-number-simple">1</div>
                <h3>{lang === 'ar' ? 'تعبئة آمنة' : 'Safe Packing'}</h3>
                <p>{lang === 'ar' ? 'تعبئة احترافية وآمنة لضمان وصول شحنتك بحالة مثالية' : 'Professional and secure packaging to ensure your shipment arrives in perfect condition'}</p>
            </div>
            <div className="feature-item-simple">
              <div className="feature-number-simple">2</div>
                <h3>{lang === 'ar' ? 'أسعار شفافة' : 'Transparent Pricing'}</h3>
                <p>{lang === 'ar' ? 'أسعار واضحة وشفافة بدون رسوم مخفية' : 'Clear and transparent pricing with no hidden fees'}</p>
            </div>
            <div className="feature-item-simple">
              <div className="feature-number-simple">3</div>
                <h3>{lang === 'ar' ? 'تسليم في الوقت المحدد' : 'Right Time Delivery'}</h3>
                <p>{lang === 'ar' ? 'التزامنا بتسليم شحنتك في الوقت المحدد' : 'Our commitment to deliver your shipment on time'}</p>
            </div>
            <div className="feature-item-simple">
              <div className="feature-number-simple">4</div>
                <h3>{lang === 'ar' ? 'أسرع شحن' : 'Fastest Shipping'}</h3>
                <p>{lang === 'ar' ? 'خدمات شحن سريعة وفعالة لجميع وجهاتك' : 'Fast and efficient shipping services to all your destinations'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Section - Simple with Background */}
      <section className="supply-chain-simple supply-chain-with-background">
        <div className="container">
          <div className="supply-chain-content-simple">
            <h2>
              {lang === 'ar'
                ? 'نحن نستكشف جميع مستويات سلسلة التوريد من الشحن العالمي، والتخليص الجمركي وخدمات التسليم، والتخزين والتوزيع، والتأمين البحري، وإدارة المخاطر'
                : 'We are exploring all levels of supply chain from Global Forwarding, Clearance and Delivery Services, Warehousing and Distribution, Marine Insurance, Risk Management'
              }
            </h2>
            <div className="supply-chain-logo-simple">
              <img src="/images/logo.png" alt="1st Luxury Logo" />
            </div>
            <p>
              {lang === 'ar'
                ? 'في الحالات التي يواجه فيها المستخدم أي مشاكل لوجستية، يجب عليهم طلب مشورة من مزود مستقل.'
                : 'In cases where the user has any Logistics issues, they should seek independence advice provider.'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 