import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }) => {
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="skill-badge"
    >
      <div className="skill-content">
        <div className="skill-icon">
          {skill.icon || '💻'}
        </div>
        <div className="skill-name">
          {skill.name}
        </div>
        {skill.level && (
          <div className="skill-level">
            <div className="skill-progress">
              <div 
                className="skill-progress-bar" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SkillBadge;