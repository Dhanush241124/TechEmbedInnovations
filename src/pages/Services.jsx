import React from 'react'

export default function Services(){
  return (
    <div className="container py-5">
      <section className="mb-5 mt-5">
        <h1 className="display-4 neon-text mb-3">Our Services</h1>
        <p className="lead text-light">Comprehensive Solutions for Your Technology Needs</p>
      </section>

      <section className="mb-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="service-card neon-card h-100">
              <div className="service-icon mb-3"><i className="fas fa-brain"></i></div>
              <h4 className="neon-text">AI Development</h4>
              <p className="text-light mb-3">Create intelligent systems powered by machine learning and deep learning. From data analysis to predictive modeling.</p>
              <div className="tech-stack">
                <span className="badge bg-neon me-2">Python</span>
                <span className="badge bg-neon me-2">TensorFlow</span>
                <span className="badge bg-neon">Scikit-Learn</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="service-card neon-card h-100">
              <div className="service-icon mb-3"><i className="fas fa-code"></i></div>
              <h4 className="neon-text">Full-Stack Development</h4>
              <p className="text-light mb-3">End-to-end web application development with modern frameworks and best practices.</p>
              <div className="tech-stack">
                <span className="badge bg-neon me-2">React</span>
                <span className="badge bg-neon me-2">Node.js</span>
                <span className="badge bg-neon">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="service-card neon-card h-100">
              <div className="service-icon mb-3"><i className="fas fa-microchip"></i></div>
              <h4 className="neon-text">Embedded Systems</h4>
              <p className="text-light mb-3">IoT solutions and embedded programming for smart devices and real-time systems.</p>
              <div className="tech-stack">
                <span className="badge bg-neon me-2">Arduino</span>
                <span className="badge bg-neon me-2">Raspberry Pi</span>
                <span className="badge bg-neon">C/C++</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="section-title neon-text mb-5">What's Included in Our Services</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="neon-card">
              <h5 className="neon-text mb-3"><i className="fas fa-graduation-cap"></i> Training Programs</h5>
              <ul className="list-unstyled text-light">
                <li className="mb-2">✓ Structured curriculum with progressive learning</li>
                <li className="mb-2">✓ Live coding sessions and demonstrations</li>
                <li className="mb-2">✓ Assignment-based learning approach</li>
                <li className="mb-2">✓ One-on-one mentoring sessions</li>
                <li className="mb-2">✓ Industry expert guidance</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="neon-card">
              <h5 className="neon-text mb-3"><i className="fas fa-project-diagram"></i> Project Support</h5>
              <ul className="list-unstyled text-light">
                <li className="mb-2">✓ Real-world project exposure</li>
                <li className="mb-2">✓ Portfolio-building opportunities</li>
                <li className="mb-2">✓ Code review and feedback</li>
                <li className="mb-2">✓ Deployment guidance</li>
                <li className="mb-2">✓ Open-source contribution support</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="neon-card">
              <h5 className="neon-text mb-3"><i className="fas fa-certificate"></i> Certifications</h5>
              <ul className="list-unstyled text-light">
                <li className="mb-2">✓ Course completion certificates</li>
                <li className="mb-2">✓ Recognized industry certifications</li>
                <li className="mb-2">✓ Skills badges and badges</li>
                <li className="mb-2">✓ LinkedIn profile optimization</li>
                <li className="mb-2">✓ Resume building support</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="neon-card">
              <h5 className="neon-text mb-3"><i className="fas fa-briefcase"></i> Career Support</h5>
              <ul className="list-unstyled text-light">
                <li className="mb-2">✓ Job placement assistance</li>
                <li className="mb-2">✓ Interview preparation</li>
                <li className="mb-2">✓ Networking opportunities</li>
                <li className="mb-2">✓ Salary negotiation guidance</li>
                <li className="mb-2">✓ Lifetime community access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 cta-section text-center mt-5">
        <h2 className="neon-text mb-4">Ready to Get Started?</h2>
        <p className="lead text-light mb-4">Contact us: <a href="mailto:techembedinnovations@gmail.com" className="text-neon">techembedinnovations@gmail.com</a> | <a href="tel:+919008405328" className="text-neon">+91 9008405328</a></p>
        <div>
          <a href="/internships" className="btn btn-lg btn-neon me-3">
            <i className="fas fa-graduation-cap"></i> Apply for Internship
          </a>
          <a href="/workshops" className="btn btn-lg btn-neon-outline">
            <i className="fas fa-calendar"></i> Register for Workshop
          </a>
        </div>
      </section>
    </div>
  )
}
