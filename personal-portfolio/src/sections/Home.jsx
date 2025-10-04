import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="home-content">
                <motion.h1 
                  className="home-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Hi, I'm <span className="highlight">Your Name</span>
                </motion.h1>
                
                <motion.h2 
                  className="home-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Full Stack Developer & UI/UX Designer
                </motion.h2>
                
                <motion.p 
                  className="home-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  I create beautiful, functional, and user-centered digital experiences. 
                  Passionate about turning ideas into reality through code and design.
                </motion.p>
                
                <motion.div 
                  className="home-buttons"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    className="btn btn-primary btn-custom me-3"
                    onClick={scrollToProjects}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work
                  </motion.button>
                  
                  <motion.button
                    className="btn btn-outline-custom"
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="home-image-container"
            >
              <div className="home-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face" 
                  alt="Profile" 
                  className="profile-image"
                />
                <div className="image-overlay"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="floating-element element-1"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💻
              </motion.div>
              
              <motion.div
                className="floating-element element-2"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                🎨
              </motion.div>
              
              <motion.div
                className="floating-element element-3"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                🚀
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;