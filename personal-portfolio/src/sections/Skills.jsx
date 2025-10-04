import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/projects';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
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
    <section id="skills" className="skills-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={titleVariants} className="text-center mb-5">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>
          
          <Row className="justify-content-center">
            {skills.map((skill, index) => (
              <Col lg={3} md={4} sm={6} xs={6} key={index} className="mb-4">
                <SkillBadge skill={skill} index={index} />
              </Col>
            ))}
          </Row>
          
          <motion.div 
            variants={titleVariants}
            className="skills-summary mt-5"
          >
            <Row className="align-items-center">
              <Col md={6}>
                <h3 className="skills-summary-title">Continuous Learning</h3>
                <p className="skills-summary-text">
                  I believe in staying up-to-date with the latest technologies and 
                  best practices. I'm always exploring new frameworks, tools, and 
                  methodologies to improve my skills and deliver better solutions.
                </p>
              </Col>
              <Col md={6}>
                <div className="learning-stats">
                  <div className="learning-stat">
                    <div className="stat-icon">📚</div>
                    <div className="stat-content">
                      <div className="stat-title">Always Learning</div>
                      <div className="stat-desc">New technologies every month</div>
                    </div>
                  </div>
                  <div className="learning-stat">
                    <div className="stat-icon">🎯</div>
                    <div className="stat-content">
                      <div className="stat-title">Goal-Oriented</div>
                      <div className="stat-desc">Focused on delivering results</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;