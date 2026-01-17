import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="hero-section py-5 mt-5">
        <div className="container text-center">
          <div className="hero-content mb-5">
            <div className="hero-icon mb-4">
              <i className="fas fa-brain neon-icon"></i>
            </div>
            <h1 className="display-3 fw-bold neon-text mb-3 animate-fade-in">TechEmbed Innovations</h1>
            <p className="lead text-light mb-4 animate-fade-in">Innovating Intelligence. Empowering Future.</p>
            <p className="h5 text-light mb-5 animate-fade-in">Leading Provider of IT Solutions, AI Training, and Full-Stack Development</p>
            <div className="hero-buttons mt-5">
              <a href="/services" className="btn btn-lg btn-neon me-3"> <i className="fas fa-rocket"></i> Explore Programs</a>
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
