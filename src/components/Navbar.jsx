import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [lightMode, setLightMode] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'light';
    } catch { return false }
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
    const body = document.body;
    if(lightMode){
      body.classList.add('light-theme');
      localStorage.setItem('theme','light');
    } else {
      body.classList.remove('light-theme');
      localStorage.setItem('theme','dark');
    }
  },[lightMode]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const nav = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      if (nav && !nav.contains(e.target) && !hamburger.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const toggleTheme = () => setLightMode(v=>!v);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar neon-border-bottom">
      {/* Mobile menu overlay */}
      <div 
        className={`nav-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      
      <div className="container d-flex justify-content-between align-items-center">
        <button
          className={`hamburger ${menuOpen ? 'is-active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <NavLink to="/" className="navbar-brand hover-neon d-flex align-items-center">
          <img
            src="/images/darshanlog.png"
            alt="TechEmbed Logo"
            className="brand-logo"
          />
          <span
            style={{
              fontSize: "1.2rem",
              letterSpacing: "1px",
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            TechEmbed Innovation
          </span>
        </NavLink>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "me-3 hover-neon active" : "me-3 hover-neon"
            }
          >
            {({ isActive }) => (
              <>
                Home {isActive && <span className="nav-active-icon">✓</span>}
              </>
            )}
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "me-3 hover-neon active" : "me-3 hover-neon"
            }
          >
            {({ isActive }) => (
              <>
                About {isActive && <span className="nav-active-icon">✓</span>}
              </>
            )}
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "me-3 hover-neon active" : "me-3 hover-neon"
            }
          >
            {({ isActive }) => (
              <>
                Services {isActive && <span className="nav-active-icon">✓</span>}
              </>
            )}
          </NavLink>
          <NavLink
            to="/internships"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "me-3 hover-neon active" : "me-3 hover-neon"
            }
          >
            {({ isActive }) => (
              <>
                Internships {isActive && <span className="nav-active-icon">✓</span>}
              </>
            )}
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "me-3 hover-neon active" : "me-3 hover-neon"
            }
          >
            {({ isActive }) => (
              <>
                Projects {isActive && <span className="nav-active-icon">✓</span>}
              </>
            )}
          </NavLink>
          <NavLink
            to="/workshops"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "me-3 hover-neon active" : "me-3 hover-neon"
            }
          >
            {({ isActive }) => (
              <>
                Workshops {isActive && <span className="nav-active-icon">✓</span>}
              </>
            )}
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "hover-neon active" : "hover-neon"
            }
          >
            {({ isActive }) => (
              <>
                Contact {isActive && <span className="nav-active-icon">✓</span>}
              </>
            )}
          </NavLink>
          {/* <li className="nav-item d-flex align-items-center">
            <div className="theme-switch-wrapper" title={lightMode ? 'Switch to dark' : 'Switch to light'}>
              <label className="theme-switch">
                <input type="checkbox" checked={lightMode} onChange={toggleTheme} aria-label="Toggle light theme" />
                <span className="slider round"></span>
              </label>
            </div>
          </li> */}
        </nav>
      </div>
    </header>
  );
}
