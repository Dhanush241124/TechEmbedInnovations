import React from 'react'

export default function Internships(){
  return (
    <div className="container py-5">
      <section className="mb-5 mt-5">
        <h1 className="display-4 neon-text mb-3">Internship Programs</h1>
        <p className="lead text-muted">Gain Real-World Experience with Industry Mentors</p>
      </section>

      <section className="mb-5">
        <h2 className="section-title neon-text mb-4">Choose Your Path</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="internship-card neon-card h-100">
              <div className="program-badge">AI Internship</div>
              <div className="program-icon mb-3"><i className="fas fa-brain"></i></div>
              <h4 className="neon-text">AI & Machine Learning</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 3-6 months</p>
              <p className="text-light mb-4">Master AI/ML algorithms, work on real datasets, build intelligent models.</p>
              <div className="tech-stack mb-4">
                <span className="badge bg-neon me-2">Python</span>
                <span className="badge bg-neon me-2">TensorFlow</span>
                <span className="badge bg-neon">Data Science</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="internship-card neon-card h-100">
              <div className="program-badge">Full-Stack Internship</div>
              <div className="program-icon mb-3"><i className="fas fa-code"></i></div>
              <h4 className="neon-text">Full-Stack Development</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 3-6 months</p>
              <p className="text-light mb-4">Build complete web applications from frontend to backend deployment.</p>
              <div className="tech-stack mb-4">
                <span className="badge bg-neon me-2">MERN Stack</span>
                <span className="badge bg-neon me-2">React</span>
                <span className="badge bg-neon me-2">Node.js</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="internship-card neon-card h-100">
              <div className="program-badge">Embedded Internship</div>
              <div className="program-icon mb-3"><i className="fas fa-microchip"></i></div>
              <h4 className="neon-text">Embedded Systems</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 3-6 months</p>
              <p className="text-light mb-4">Work with IoT boards and develop real embedded systems solutions.</p>
              <div className="tech-stack mb-4">
                <span className="badge bg-neon me-2">Arduino</span>
                <span className="badge bg-neon me-2">RPi</span>
                <span className="badge bg-neon">C/C++</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="neon-card">
          <h3 className="neon-text mb-4"><i className="fas fa-star"></i> Why Intern With TechEmbed?</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Real-world project experience</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Mentorship from industry experts</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Certificate & letter of recommendation</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Flexible timings</span></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Stipend opportunities</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Placement assistance after completion</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Lifetime community access</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Conversion to full-time opportunities</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title neon-text mb-4">Apply Now</h2>
        <div className="row">
          <div className="col-lg-8">
            <div className="neon-card">
              <form className="needs-validation" onSubmit={async (e)=>{
                  e.preventDefault();
                  const f = e.target;
                  const payload = { name: f.name.value, email: f.email.value, phone: f.phone.value, program: f.program.value, message: f.message.value };
                  try{
                    const res = await fetch('/internships', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload)});
                    if(res.ok){ if(window.showSuccessMessage) window.showSuccessMessage('Application submitted.'); f.reset(); } else { alert('Error submitting application'); }
                  }catch(err){ alert('Network error'); }
                }}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label text-light">Full Name *</label>
                  <input type="text" className="form-control form-control-neon" id="name" name="name" required />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-light">Email Address *</label>
                  <input type="email" className="form-control form-control-neon" id="email" name="email" required />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label text-light">Phone Number *</label>
                  <input type="tel" className="form-control form-control-neon" id="phone" name="phone" required />
                </div>

                <div className="mb-4">
                  <label htmlFor="program" className="form-label text-light">Program *</label>
                  <select className="form-select form-control-neon" id="program" name="program" required>
                    <option value="">Select a program</option>
                    <option value="AI & Machine Learning">AI & Machine Learning Internship</option>
                    <option value="Full-Stack Development">Full-Stack Development Internship</option>
                    <option value="Embedded Systems">Embedded Systems Internship</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-light">Tell us about yourself *</label>
                  <textarea className="form-control form-control-neon" id="message" name="message" rows="4" placeholder="Your experience, goals, and why you want to intern with us..." required></textarea>
                </div>

                <button type="submit" className="btn btn-neon btn-lg w-100">
                  <i className="fas fa-paper-plane"></i> Submit Application
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="neon-card">
              <h5 className="neon-text mb-4"><i className="fas fa-info-circle"></i> Application Info</h5>
              <p className="text-light mb-3"><strong>Duration:</strong> 3-6 months (flexible)</p>
              <p className="text-light mb-3"><strong>Eligibility:</strong> Students and freshers</p>
              <p className="text-light mb-3"><strong>Mode:</strong> Online & Offline</p>
              <p className="text-light mb-3"><strong>Selection:</strong> Continuous rolling basis</p>
              <hr className="neon-hr my-3" />
              <p className="text-light mb-2"><i className="fas fa-envelope text-neon"></i> <a href="mailto:techembedinnovations@gmail.com" className="text-neon">techembedinnovations@gmail.com</a></p>
              <p className="text-light mb-2"><i className="fas fa-phone text-neon"></i> <a href="tel:+919008405328" className="text-neon">+91 9008405328</a></p>
              <p className="text-light small">Applications are reviewed on a rolling basis. We notify selected candidates within 5-7 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
