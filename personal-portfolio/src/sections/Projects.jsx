import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={titleVariants} className="text-center mb-5">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>
          
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          
          <motion.div 
            variants={titleVariants}
            className="text-center mt-5"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-custom"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="me-2">📁</span>
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;