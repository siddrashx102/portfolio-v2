import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
    { number: "10+", label: "Technologies" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div variants={itemVariants}>
                <div className="about-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                    alt="About Me" 
                    className="about-image"
                  />
                  <div className="about-image-overlay"></div>
                </div>
              </motion.div>
            </div>
            
            <div className="col-lg-6">
              <motion.div variants={itemVariants} className="about-content">
                <h2 className="section-title">About Me</h2>
                <p className="about-text">
                  I'm a passionate full-stack developer with over 3 years of experience 
                  creating digital solutions that make a difference. My journey began with 
                  a curiosity about how websites work, and it has evolved into a deep 
                  passion for crafting exceptional user experiences.
                </p>
                
                <p className="about-text">
                  I specialize in modern web technologies and have a keen eye for design. 
                  Whether it's building responsive web applications, creating intuitive 
                  user interfaces, or optimizing performance, I approach every project 
                  with attention to detail and a commitment to excellence.
                </p>
                
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span>Problem-solving enthusiast</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Always learning new technologies</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💡</span>
                    <span>Creative and innovative thinker</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🤝</span>
                    <span>Team player and collaborator</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="stats-section"
          >
            <div className="row text-center">
              {stats.map((stat, index) => (
                <div className="col-md-3 col-sm-6" key={index}>
                  <motion.div 
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;