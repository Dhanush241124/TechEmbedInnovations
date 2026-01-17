import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Internships from './pages/Internships'
import Projects from './pages/Projects'
import Workshops from './pages/Workshops'
import NotFound from './pages/NotFound'
import Error500 from './pages/Error500'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/500" element={<Error500 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
