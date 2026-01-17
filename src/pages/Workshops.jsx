import React from 'react'

export default function Workshops(){
  return (
    <div className="container py-5">
      <section className="mb-5 mt-5">
        <h1 className="display-4 neon-text mb-3">Intensive Workshops</h1>
        <p className="lead text-light">Accelerate Your Learning with Expert-Led Bootcamps</p>
      </section>

      <section className="mb-5">
        <h2 className="section-title neon-text mb-4">Upcoming Workshops</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="workshop-card neon-card h-100">
              <div className="workshop-badge">Bootcamp</div>
              <div className="workshop-icon mb-3"><i className="fas fa-brain"></i></div>
              <h4 className="neon-text">AI & ML Bootcamp</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 2 weeks • 40 hours</p>
              <p className="text-light mb-3">Intensive course covering AI fundamentals, neural networks, and real ML projects.</p>
              <button className="btn btn-neon w-100" data-bs-toggle="modal" data-bs-target="#workshopModal" data-workshop="AI & ML Bootcamp">Register Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="workshop-card neon-card h-100">
              <div className="workshop-badge">Workshop</div>
              <div className="workshop-icon mb-3"><i className="fas fa-python"></i></div>
              <h4 className="neon-text">Python Essentials</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 1 week • 20 hours</p>
              <p className="text-light mb-3">Learn Python from basics to advanced with real-world applications.</p>
              <button className="btn btn-neon w-100" data-bs-toggle="modal" data-bs-target="#workshopModal" data-workshop="Python Essentials">Register Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="workshop-card neon-card h-100">
              <div className="workshop-badge">Bootcamp</div>
              <div className="workshop-icon mb-3"><i className="fas fa-code"></i></div>
              <h4 className="neon-text">Full-Stack Workshop</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 3 weeks • 60 hours</p>
              <p className="text-light mb-3">Build complete web applications using MERN stack with live projects.</p>
              <button className="btn btn-neon w-100" data-bs-toggle="modal" data-bs-target="#workshopModal" data-workshop="Full-Stack Workshop">Register Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="workshop-card neon-card h-100">
              <div className="workshop-badge">Workshop</div>
              <div className="workshop-icon mb-3"><i className="fas fa-microchip"></i></div>
              <h4 className="neon-text">IoT & Embedded</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 2 weeks • 35 hours</p>
              <p className="text-light mb-3">Hands-on introduction to IoT and embedded systems with Arduino.</p>
              <button className="btn btn-neon w-100" data-bs-toggle="modal" data-bs-target="#workshopModal" data-workshop="IoT & Embedded">Register Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="workshop-card neon-card h-100">
              <div className="workshop-badge">Workshop</div>
              <div className="workshop-icon mb-3"><i className="fas fa-database"></i></div>
              <h4 className="neon-text">Data Science Crash Course</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 10 days • 30 hours</p>
              <p className="text-light mb-3">Fast-track your data science journey with practical datasets.</p>
              <button className="btn btn-neon w-100" data-bs-toggle="modal" data-bs-target="#workshopModal" data-workshop="Data Science Crash Course">Register Now</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="workshop-card neon-card h-100">
              <div className="workshop-badge">Workshop</div>
              <div className="workshop-icon mb-3"><i className="fas fa-code-branch"></i></div>
              <h4 className="neon-text">DevOps Fundamentals</h4>
              <p className="text-light small mb-3"><strong>Duration:</strong> 2 weeks • 25 hours</p>
              <p className="text-light mb-3">Master Docker, Kubernetes, and CI/CD pipelines for modern development.</p>
              <button className="btn btn-neon w-100" data-bs-toggle="modal" data-bs-target="#workshopModal" data-workshop="DevOps Fundamentals">Register Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="neon-card text-center">
          <h4 className="neon-text mb-3">Have Questions? Contact Us!</h4>
          <p className="text-light mb-2"><i className="fas fa-envelope"></i> <a href="mailto:techembedinnovations@gmail.com" className="text-neon">techembedinnovations@gmail.com</a></p>
          <p className="text-light"><i className="fas fa-phone"></i> <a href="tel:+919008405328" className="text-neon">+91 9008405328</a> / <a href="tel:+919986967709" className="text-neon">+91 9986967709</a></p>
        </div>
      </section>

      <section className="mb-5">
        <div className="neon-card">
          <h3 className="neon-text mb-4"><i className="fas fa-lightbulb"></i> Why Attend Our Workshops?</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Industry experts as instructors</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Hands-on project-based learning</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Live coding demonstrations</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Certificate of completion</span></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Lifetime access to course materials</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Job placement support</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Community support and networking</span></li>
                <li className="mb-3"><i className="fas fa-check neon-text"></i> <span className="ms-2 text-light">Affordable workshop fees</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal (Bootstrap handles show) */}
      <div className="modal fade" id="workshopModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border-neon">
            <div className="modal-header border-neon">
              <h5 className="modal-title neon-text">Workshop Registration</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={async (e)=>{
                  e.preventDefault();
                  const f = e.target;
                  const payload = { name: f.name.value, email: f.email.value, phone: f.phone.value, workshop: f.workshop.value };
                  try{
                    const res = await fetch('/workshops', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload)});
                    if(res.ok){ if(window.showSuccessMessage) window.showSuccessMessage('Registration successful.'); f.reset(); const modal = bootstrap.Modal.getInstance(document.getElementById('workshopModal')); if(modal) modal.hide(); } else { alert('Error during registration'); }
                  }catch(err){ alert('Network error'); }
                }}>
                <div className="mb-3">
                  <label htmlFor="modalName" className="form-label text-light">Full Name *</label>
                  <input type="text" className="form-control form-control-neon" id="modalName" name="name" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="modalEmail" className="form-label text-light">Email Address *</label>
                  <input type="email" className="form-control form-control-neon" id="modalEmail" name="email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="modalPhone" className="form-label text-light">Phone Number *</label>
                  <input type="tel" className="form-control form-control-neon" id="modalPhone" name="phone" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="modalWorkshop" className="form-label text-light">Workshop *</label>
                  <input type="hidden" id="workshopInput" name="workshop" />
                  <input type="text" className="form-control form-control-neon" id="modalWorkshop" readOnly />
                </div>

                <button type="submit" className="btn btn-neon w-100"><i className="fas fa-check"></i> Complete Registration</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
