import React from 'react'

export default function Contact(){
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        if (window.showSuccessMessage) window.showSuccessMessage('Your message was sent. We will contact you soon.');
        form.reset();
      } else {
        const text = await res.text();
        alert('Error: ' + text);
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  }

  return (
    <div className="container py-5">
      <section className="mb-5 mt-5">
        <h1 className="display-4 neon-text mb-3">Get In Touch</h1>
        <p className="lead text-light">We'd Love to Hear From You</p>
      </section>

      <section className="mb-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="neon-card">
              <h3 className="neon-text mb-4"><i className="fas fa-envelope"></i> Send us a Message</h3>
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label text-light">Full Name *</label>
                  <input type="text" className="form-control form-control-neon" id="name" name="name" required />
                  <div className="invalid-feedback text-danger">Please provide your name.</div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-light">Email Address *</label>
                  <input type="email" className="form-control form-control-neon" id="email" name="email" required />
                  <div className="invalid-feedback text-danger">Please provide a valid email address.</div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label text-light">Phone Number *</label>
                  <input type="tel" className="form-control form-control-neon" id="phone" name="phone" required />
                  <div className="invalid-feedback text-danger">Please provide a phone number.</div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-light">Message *</label>
                  <textarea className="form-control form-control-neon" id="message" name="message" rows="6" required></textarea>
                  <div className="invalid-feedback text-danger">Please provide a message.</div>
                </div>

                <button type="submit" className="btn btn-neon btn-lg">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="neon-card mb-4">
              <h5 className="neon-text mb-4"><i className="fas fa-info-circle"></i> Contact Information</h5>
              <div className="contact-item mb-4">
                <h6 className="neon-text mb-2"><i className="fas fa-envelope"></i> Email</h6>
                <p className="text-light">
                  <a href="mailto:techembedinnovations@gmail.com" className="text-neon">techembedinnovations@gmail.com</a>
                </p>
                <p className="text-light small">We'll respond within 24 hours</p>
              </div>

              <div className="contact-item mb-4">
                <h6 className="neon-text mb-2"><i className="fas fa-phone"></i> Phone</h6>
                <p className="text-light">
                  <a href="tel:+919008405328" className="text-neon">+91 9008405328</a><br />
                  <a href="tel:+919986967709" className="text-neon">+91 9986967709</a>
                </p>
                <p className="text-light small">Monday - Friday, 9 AM - 6 PM IST</p>
              </div>

              <div className="contact-item mb-4">
                <h6 className="neon-text mb-2"><i className="fas fa-map-marker-alt"></i> Location</h6>
                <p className="text-light">India</p>
                <p className="text-light small">Currently operating across India with online classes</p>
              </div>
            </div>

            <div className="neon-card">
              <h5 className="neon-text mb-4"><i className="fas fa-link"></i> Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="/internships" className="text-neon text-decoration-none hover-underline">
                    <i className="fas fa-arrow-right"></i> Apply for Internship
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/workshops" className="text-neon text-decoration-none hover-underline">
                    <i className="fas fa-arrow-right"></i> Register for Workshop
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/projects" className="text-neon text-decoration-none hover-underline">
                    <i className="fas fa-arrow-right"></i> View Our Projects
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/services" className="text-neon text-decoration-none hover-underline">
                    <i className="fas fa-arrow-right"></i> Explore Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title neon-text mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item bg-dark border-neon">
            <h2 className="accordion-header">
              <button className="accordion-button btn-neon-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                <span className="neon-text">How do I apply for an internship?</span>
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-light">
                Simply visit our <a href="/internships" className="text-neon">Internships page</a> and fill out the application form. You can select from AI, Full-Stack, or Embedded Systems programs. We review applications on a rolling basis.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark border-neon">
            <h2 className="accordion-header">
              <button className="accordion-button btn-neon-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                <span className="neon-text">What are the prerequisites?</span>
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-light">
                Basic knowledge of programming is recommended but not required. We provide foundational training for beginners. Passion for learning and dedication is what matters most.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark border-neon">
            <h2 className="accordion-header">
              <button className="accordion-button btn-neon-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                <span className="neon-text">Are there any fees for internships?</span>
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-light">
                Internship program fees are very affordable. Selected candidates may also receive stipends. Contact us for detailed pricing information.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark border-neon">
            <h2 className="accordion-header">
              <button className="accordion-button btn-neon-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                <span className="neon-text">Can I do an internship while studying?</span>
              </button>
            </h2>
            <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-light">
                Absolutely! We offer flexible schedules for working professionals and students. You can choose part-time or full-time internships based on your availability.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark border-neon">
            <h2 className="accordion-header">
              <button className="accordion-button btn-neon-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                <span className="neon-text">What about placement after internship?</span>
              </button>
            </h2>
            <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-light">
                We provide job placement assistance and maintain relationships with leading tech companies. High performers have strong conversion opportunities to full-time roles.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark border-neon">
            <h2 className="accordion-header">
              <button className="accordion-button btn-neon-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                <span className="neon-text">Is there online and offline mode?</span>
              </button>
            </h2>
            <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-light">
                Yes! We offer both online and offline training. Most programs are available in hybrid mode, giving you the flexibility to choose what works best for you.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
