import React from 'react';
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
      <div className="container">
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
          
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={index}>
                <SkillBadge skill={skill} index={index} />
              </div>
            ))}
          </div>
          
          <motion.div 
            variants={titleVariants}
            className="skills-summary mt-5"
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="skills-summary-title">Continuous Learning</h3>
                <p className="skills-summary-text">
                  I believe in staying up-to-date with the latest technologies and 
                  best practices. I'm always exploring new frameworks, tools, and 
                  methodologies to improve my skills and deliver better solutions.
                </p>
              </div>
              <div className="col-md-6">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;