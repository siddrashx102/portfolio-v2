import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false); // Close mobile menu
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? 'navbar-scrolled' : ''} ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="navbar-brand brand-text"
          >
            Portfolio
          </a>
        </motion.div>

        <button 
          className="navbar-toggler navbar-toggler-custom" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav" 
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <li className="nav-item">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="nav-link nav-link-custom"
                  >
                    {item.label}
                  </a>
                </li>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="ms-3"
            >
              <button
                onClick={toggleDarkMode}
                className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </motion.div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;