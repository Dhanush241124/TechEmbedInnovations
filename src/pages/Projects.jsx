import React from 'react'
import { Link } from 'react-router-dom'

const projectsData = [
  { id: 'ai-chatbot', category: 'ai', title: 'AI-Powered Chatbot', tag: 'AI/ML', icon: 'fas fa-comments', difficulty: 'Intermediate', description: 'Build an intelligent chatbot using NLP and ML algorithms with real-time response generation.', techs: ['Python', 'NLP', 'TensorFlow'] },
  { id: 'image-classification', category: 'ai', title: 'Image Classification System', tag: 'AI/ML', icon: 'fas fa-image', difficulty: 'Beginner', description: 'Create a deep learning model to classify images using CNN with custom datasets.', techs: ['Python', 'PyTorch', 'OpenCV'] },
  { id: 'stock-predictor', category: 'ai', title: 'Stock Price Predictor', tag: 'AI/ML', icon: 'fas fa-chart-line', difficulty: 'Advanced', description: 'Build ML models to predict stock prices using historical data and time series analysis.', techs: ['Python', 'LSTM', 'Pandas'] },
  { id: 'ecommerce-platform', category: 'fullstack', title: 'E-Commerce Platform', tag: 'Full-Stack', icon: 'fas fa-shopping-cart', difficulty: 'Advanced', description: 'Complete e-commerce solution with product catalog, cart, and payment gateway integration.', techs: ['React', 'Node.js', 'MongoDB'] },
  { id: 'task-management', category: 'fullstack', title: 'Task Management App', tag: 'Full-Stack', icon: 'fas fa-tasks', difficulty: 'Intermediate', description: 'Collaborative task management app with real-time updates and user authentication.', techs: ['React', 'Express', 'PostgreSQL'] },
  { id: 'video-streaming', category: 'fullstack', title: 'Video Streaming Platform', tag: 'Full-Stack', icon: 'fas fa-video', difficulty: 'Advanced', description: 'Build a Netflix-like platform with video hosting, streaming, and user subscriptions.', techs: ['MERN Stack', 'AWS', 'FFmpeg'] },
  { id: 'smart-home', category: 'embedded', title: 'Smart Home Automation', tag: 'Embedded', icon: 'fas fa-lightbulb', difficulty: 'Intermediate', description: 'IoT project controlling lights, temperature, and appliances via mobile app.', techs: ['Arduino', 'IoT', 'C++'] },
  { id: 'line-robot', category: 'embedded', title: 'Line Following Robot', tag: 'Embedded', icon: 'fas fa-robot', difficulty: 'Beginner', description: 'Build an autonomous robot that follows marked paths using sensors.', techs: ['Robotics', 'C', 'RPi'] },
  { id: 'weather-station', category: 'embedded', title: 'Weather Station', tag: 'Embedded', icon: 'fas fa-thermometer-half', difficulty: 'Intermediate', description: 'IoT weather monitoring system with cloud data storage and visualization.', techs: ['Arduino', 'Sensors', 'Firebase'] }
]

export default function Projects(){
  const [filteredProjects, setFilteredProjects] = React.useState(projectsData)
  const [activeFilter, setActiveFilter] = React.useState('all')

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    if (filter === 'all') {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === filter))
    }
  }

  return (
    <div className="container py-5">
      <section className="mb-5 mt-5">
        <h1 className="display-4 neon-text mb-3"><strong>Real-World Projects</strong></h1>
        <p className="lead text-light">Build Portfolio-Worthy Projects with Industry Mentorship</p>
      </section>

      <section className="mb-5">
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button onClick={() => handleFilter('all')} className={`btn btn-sm filter-btn ${activeFilter === 'all' ? 'btn-neon' : 'btn-outline-neon'}`}>All Projects</button>
          <button onClick={() => handleFilter('ai')} className={`btn btn-sm filter-btn ${activeFilter === 'ai' ? 'btn-neon' : 'btn-outline-neon'}`}>AI/ML</button>
          <button onClick={() => handleFilter('fullstack')} className={`btn btn-sm filter-btn ${activeFilter === 'fullstack' ? 'btn-neon' : 'btn-outline-neon'}`}>Full-Stack</button>
          <button onClick={() => handleFilter('embedded')} className={`btn btn-sm filter-btn ${activeFilter === 'embedded' ? 'btn-neon' : 'btn-outline-neon'}`}>Embedded</button>
        </div>
      </section>

      <section className="mb-5">
        <div className="row g-4" id="projectsContainer">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 project-card">
              <div className="neon-card h-100 d-flex flex-column">
                <div className="project-header mb-3">
                  <span className="project-tag">{project.tag}</span>
                  <div className="project-icon"><i className={project.icon}></i></div>
                </div>
                <h4 className="neon-text mb-2">{project.title}</h4>
                <p className="text-light small mb-3">Difficulty: {project.difficulty}</p>
                <p className="text-light mb-3 flex-grow-1">{project.description}</p>
                <div className="tech-stack mb-3">
                  {project.techs.map((tech, idx) => (
                    <span key={idx} className="badge bg-neon me-2">{tech}</span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className="btn btn-neon btn-sm w-100"><i className="fas fa-arrow-right"></i> View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 cta-section text-center">
        <h2 className="neon-text mb-4">Start Building Your Portfolio</h2>
        <p className="lead text-light mb-3">Get assigned to real projects with mentorship and industry guidance</p>
        <p className="text-light mb-4"><i className="fas fa-envelope"></i> <a href="mailto:techembedinnovations@gmail.com" className="text-neon">techembedinnovations@gmail.com</a> | <i className="fas fa-phone"></i> <a href="tel:+919008405328" className="text-neon">+91 9008405328</a></p>
        <a href="/internships" className="btn btn-lg btn-neon">
          <i className="fas fa-play"></i> Join Our Program
        </a>
      </section>
    </div>
  )
}
