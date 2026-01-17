import React from 'react'

export default function NotFound(){
  return (
    <div className="container py-5 text-center">
      <div className="error-icon mb-4"><i className="fas fa-exclamation-triangle"></i></div>
      <h1 className="display-4 neon-text">404 — Page Not Found</h1>
      <p className="text-light">The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-neon mt-3">Go Home</a>
    </div>
  )
}
