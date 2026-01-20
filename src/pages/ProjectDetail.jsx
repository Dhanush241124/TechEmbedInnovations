import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const projectsData = {
  'ai-chatbot': {
    id: 'ai-chatbot',
    title: 'AI-Powered Chatbot',
    category: 'AI/ML',
    difficulty: 'Intermediate',
    icon: 'fas fa-comments',
    description: 'Build an intelligent chatbot using NLP and ML algorithms with real-time response generation.',
    fullDescription: 'In this project, you will learn how to build a sophisticated AI-powered chatbot that can understand natural language and respond intelligently. You\'ll work with NLP techniques, train ML models, and deploy them as a functional chatbot application.',
    techStack: ['Python', 'NLP', 'TensorFlow', 'Flask', 'Scikit-learn'],
    learnings: [
      'Natural Language Processing fundamentals',
      'Building and training ML models',
      'Intent recognition and entity extraction',
      'Chatbot deployment and testing',
      'Real-time response generation'
    ],
    duration: '4 weeks',
    level: 'Intermediate'
  },
  'image-classification': {
    id: 'image-classification',
    title: 'Image Classification System',
    category: 'AI/ML',
    difficulty: 'Beginner',
    icon: 'fas fa-image',
    description: 'Create a deep learning model to classify images using CNN with custom datasets.',
    fullDescription: 'Learn how to build and train convolutional neural networks (CNN) for image classification. You\'ll work with popular datasets, implement data augmentation, and deploy your model.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Matplotlib'],
    learnings: [
      'CNN architecture and principles',
      'Image preprocessing and augmentation',
      'Model training and validation',
      'Accuracy optimization',
      'Model deployment and inference'
    ],
    duration: '3 weeks',
    level: 'Beginner'
  },
  'stock-predictor': {
    id: 'stock-predictor',
    title: 'Stock Price Predictor',
    category: 'AI/ML',
    difficulty: 'Advanced',
    icon: 'fas fa-chart-line',
    description: 'Build ML models to predict stock prices using historical data and time series analysis.',
    fullDescription: 'Create advanced machine learning models for stock price prediction using LSTM networks and time series analysis. You\'ll learn to work with financial data, implement ensemble methods, and evaluate model performance.',
    techStack: ['Python', 'LSTM', 'Pandas', 'TensorFlow', 'Yahoo Finance API'],
    learnings: [
      'Time series data analysis',
      'LSTM networks for sequence prediction',
      'Feature engineering for financial data',
      'Ensemble methods',
      'Backtesting strategies'
    ],
    duration: '5 weeks',
    level: 'Advanced'
  },
  'ecommerce-platform': {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Full-Stack',
    difficulty: 'Advanced',
    icon: 'fas fa-shopping-cart',
    description: 'Complete e-commerce solution with product catalog, cart, and payment gateway integration.',
    fullDescription: 'Build a complete e-commerce platform from scratch. Implement user authentication, product management, shopping cart, order processing, and integrate payment gateways.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    learnings: [
      'Full-stack architecture design',
      'User authentication and authorization',
      'Database design and optimization',
      'Payment gateway integration',
      'Security best practices'
    ],
    duration: '6 weeks',
    level: 'Advanced'
  },
  'task-management': {
    id: 'task-management',
    title: 'Task Management App',
    category: 'Full-Stack',
    difficulty: 'Intermediate',
    icon: 'fas fa-tasks',
    description: 'Collaborative task management app with real-time updates and user authentication.',
    fullDescription: 'Create a collaborative task management application with real-time updates, user management, and team collaboration features.',
    techStack: ['React', 'Express', 'PostgreSQL', 'Socket.io', 'JWT'],
    learnings: [
      'Real-time communication with WebSockets',
      'RESTful API design',
      'Database relationships',
      'User authentication',
      'Team collaboration features'
    ],
    duration: '4 weeks',
    level: 'Intermediate'
  },
  'video-streaming': {
    id: 'video-streaming',
    title: 'Video Streaming Platform',
    category: 'Full-Stack',
    difficulty: 'Advanced',
    icon: 'fas fa-video',
    description: 'Build a Netflix-like platform with video hosting, streaming, and user subscriptions.',
    fullDescription: 'Develop a comprehensive video streaming platform with video hosting, adaptive bitrate streaming, user subscriptions, and content management.',
    techStack: ['MERN Stack', 'AWS S3', 'FFmpeg', 'HLS Streaming', 'Stripe'],
    learnings: [
      'Video hosting and processing',
      'Adaptive bitrate streaming',
      'CDN integration',
      'Subscription management',
      'Cloud infrastructure'
    ],
    duration: '7 weeks',
    level: 'Advanced'
  },
  'smart-home': {
    id: 'smart-home',
    title: 'Smart Home Automation',
    category: 'Embedded',
    difficulty: 'Intermediate',
    icon: 'fas fa-lightbulb',
    description: 'IoT project controlling lights, temperature, and appliances via mobile app.',
    fullDescription: 'Create a complete smart home automation system with IoT devices, mobile app control, and cloud connectivity.',
    techStack: ['Arduino', 'IoT', 'C++', 'MQTT', 'Mobile App'],
    learnings: [
      'IoT sensor integration',
      'Wireless communication protocols',
      'Mobile app development',
      'Cloud connectivity',
      'Home automation systems'
    ],
    duration: '5 weeks',
    level: 'Intermediate'
  },
  'line-robot': {
    id: 'line-robot',
    title: 'Line Following Robot',
    category: 'Embedded',
    difficulty: 'Beginner',
    icon: 'fas fa-robot',
    description: 'Build an autonomous robot that follows marked paths using sensors.',
    fullDescription: 'Design and build an autonomous robot that can follow a marked path using sensors and motor control.',
    techStack: ['Robotics', 'C', 'RPi', 'Sensors', 'Motors'],
    learnings: [
      'Robot design principles',
      'Sensor integration',
      'Motor control',
      'Autonomous systems',
      'Debugging embedded systems'
    ],
    duration: '3 weeks',
    level: 'Beginner'
  },
  'weather-station': {
    id: 'weather-station',
    title: 'Weather Station',
    category: 'Embedded',
    difficulty: 'Intermediate',
    icon: 'fas fa-thermometer-half',
    description: 'IoT weather monitoring system with cloud data storage and visualization.',
    fullDescription: 'Build a complete weather monitoring station with multiple sensors, cloud data synchronization, and web-based visualization.',
    techStack: ['Arduino', 'Sensors', 'Firebase', 'IoT', 'Web Dashboard'],
    learnings: [
      'Environmental sensor integration',
      'Data collection and storage',
      'Cloud synchronization',
      'Data visualization',
      'Weather forecasting basics'
    ],
    duration: '4 weeks',
    level: 'Intermediate'
  }
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData[id]

  if (!project) {
    return (
      <div className="container py-5 mt-5">
        <div className="text-center">
          <h1 className="display-4 neon-text mb-3">Project Not Found</h1>
          <p className="lead text-light mb-4">The project you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/projects')} className="btn btn-lg btn-neon">
            <i className="fas fa-arrow-left"></i> Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <section className="mb-5 mt-5">
        <button onClick={() => navigate('/projects')} className="btn btn-outline-neon btn-sm mb-4">
          <i className="fas fa-arrow-left"></i> Back to Projects
        </button>
        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <div className="neon-card">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="project-icon" style={{ fontSize: '3rem' }}>
                  <i className={`${project.icon}`}></i>
                </div>
                <div>
                  <span className="badge bg-neon mb-2" style={{ display: 'inline-block' }}>
                    {project.category}
                  </span>
                  <h1 className="neon-text mb-2">{project.title}</h1>
                  <p className="text-light">
                    <strong>Difficulty:</strong> {project.difficulty} | <strong>Duration:</strong> {project.duration}
                  </p>
                </div>
              </div>

              <h3 className="neon-text mb-3">Project Overview</h3>
              <p className="text-light lead mb-4">{project.fullDescription}</p>

              <h3 className="neon-text mb-3">What You'll Learn</h3>
              <ul className="list-unstyled mb-4">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="mb-2">
                    <i className="fas fa-check neon-text me-2"></i>
                    <span className="text-light">{learning}</span>
                  </li>
                ))}
              </ul>

              <h3 className="neon-text mb-3">Tech Stack</h3>
              <div className="mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="badge bg-neon me-2 mb-2">{tech}</span>
                ))}
              </div>

              <h3 className="neon-text mb-3">Project Requirements</h3>
              <ul className="text-light mb-4">
                <li>Basic programming knowledge</li>
                <li>Dedication and willingness to learn</li>
                <li>Access to required tools and resources</li>
                <li>Time commitment of {project.duration}</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="neon-card mb-4 sticky-top" style={{ top: '100px' }}>
              <h5 className="neon-text mb-4">Project Details</h5>
              
              <div className="mb-4">
                <p className="text-light small mb-1"><strong>Category:</strong></p>
                <p className="text-light">{project.category}</p>
              </div>

              <div className="mb-4">
                <p className="text-light small mb-1"><strong>Difficulty Level:</strong></p>
                <p className="text-light">{project.difficulty}</p>
              </div>

              <div className="mb-4">
                <p className="text-light small mb-1"><strong>Duration:</strong></p>
                <p className="text-light">{project.duration}</p>
              </div>

              <div className="mb-4">
                <p className="text-light small mb-1"><strong>Technologies:</strong></p>
                <div>
                  {project.techStack.slice(0, 5).map((tech, index) => (
                    <span key={index} className="badge bg-neon me-2 mb-2">{tech}</span>
                  ))}
                </div>
              </div>

              <a href="/internships" className="btn btn-lg btn-neon w-100 mb-3">
                <i className="fas fa-play"></i> Get Started
              </a>
              <a href="/contact" className="btn btn-lg btn-neon-outline w-100">
                <i className="fas fa-envelope"></i> Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
