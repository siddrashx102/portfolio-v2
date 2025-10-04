import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="project-card h-100">
        <div className="project-image-container">
          <Card.Img 
            variant="top" 
            src={project.image || '/api/placeholder/400/250'} 
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-tech">
              {project.technologies?.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <Card.Body className="d-flex flex-column">
          <Card.Title className="project-title">
            {project.title}
          </Card.Title>
          
          <Card.Text className="project-description flex-grow-1">
            {project.description}
          </Card.Text>
          
          <div className="project-buttons mt-auto">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm me-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="me-1">📁</span>
                Code
              </motion.a>
            )}
            
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="me-1">🚀</span>
                Live Demo
              </motion.a>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;