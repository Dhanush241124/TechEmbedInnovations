import React from 'react'
import SEOHead from '../components/SEOHead'

export default function Home() {
  // Schema markup for Organization
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechEmbed Innovation",
    "url": "https://techembedinnovation.in",
    "logo": "https://techembedinnovation.in/public/images/favicon.svg",
    "description": "TechEmbed Innovation - Leading provider of IT solutions, AI training, and full-stack development",
    "sameAs": [
      "https://www.instagram.com/techembed",
      "https://www.facebook.com/techembed"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9008405328",
      "contactType": "Customer Service",
      "email": "techembedinnovations@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Karnataka",
      "streetAddress": "Hassan, Bengaluru"
    }
  }

  return (
    <div>
      <SEOHead 
        title="Home" 
        description="TechEmbed Innovation - Leading provider of IT solutions, AI training, full-stack development, and embedded systems. Expert-led training programs for students and professionals."
        keywords="AI training, machine learning, full-stack development, embedded systems, IT solutions, internships, workshops, coding bootcamp"
        ogUrl="https://techembedinnovation.in"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      <section className="hero-section py-5 mt-5">
        <div className="container text-center">
          <div className="hero-content mb-5">
            <div className="hero-icon mb-4">
              <i className="fas fa-brain neon-icon"></i>
            </div>
            <h1 className="display-3 fw-bold neon-text mb-3 animate-fade-in">TechEmbed Innovation</h1>
            <p className="lead text-light mb-4 animate-fade-in">Innovating Intelligence. Empowering Future.</p>
            <p className="h5 text-light mb-5 animate-fade-in">Leading Provider of IT Solutions, AI Training, and Full-Stack Development</p>
            <div className="hero-buttons mt-5 d-flex flex-wrap gap-3 justify-content-center">
              <a href="/services" className="btn btn-lg btn-neon"> <i className="fas fa-rocket"></i> Explore Programs</a>
              <a href="/contact" className="btn btn-lg btn-neon-outline"> <i className="fas fa-envelope"></i> Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 offerings-section">
        <div className="container">
          <h2 className="section-title neon-text text-center mb-5">What We Offer</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="neon-card h-100">
                <div className="card-icon"><i className="fas fa-robot"></i></div>
                <h4 className="neon-text">AI & ML Training</h4>
                <p className="text-light">Master artificial intelligence and machine learning with hands-on projects and expert guidance.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="neon-card h-100">
                <div className="card-icon"><i className="fas fa-code"></i></div>
                <h4 className="neon-text">Full-Stack Development</h4>
                <p className="text-light">Learn modern web development from frontend to backend with real-world applications.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="neon-card h-100">
                <div className="card-icon"><i className="fas fa-microchip"></i></div>
                <h4 className="neon-text">Embedded Systems</h4>
                <p className="text-light">Dive into IoT and embedded programming with cutting-edge hardware projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
