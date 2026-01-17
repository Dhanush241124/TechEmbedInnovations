import React from 'react'

export default function Error500(){
  return (
    <div className="container py-5 text-center">
      <div className="error-icon mb-4"><i className="fas fa-bug"></i></div>
      <h1 className="display-4 neon-text">500 — Server Error</h1>
      <p className="text-light">Something went wrong on the server. Try again later.</p>
      <a href="/" className="btn btn-neon mt-3">Go Home</a>
    </div>
  )
}
