import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

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

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Your City, Country',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </motion.div>
          
          <Row>
            <Col lg={8} className="mx-auto">
              <Row>
                <Col md={6}>
                  <motion.div variants={itemVariants}>
                    <div className="contact-info">
                      <h3 className="contact-info-title">Let's Connect</h3>
                      <p className="contact-info-text">
                        I'm always interested in new opportunities and exciting projects. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                      </p>
                      
                      <div className="contact-details">
                        {contactInfo.map((info, index) => (
                          <motion.div 
                            key={index}
                            className="contact-detail"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="contact-icon">{info.icon}</span>
                            <div className="contact-detail-content">
                              <div className="contact-detail-title">{info.title}</div>
                              <a 
                                href={info.link} 
                                className="contact-detail-value"
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              >
                                {info.value}
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Col>
                
                <Col md={6}>
                  <motion.div variants={itemVariants}>
                    <Form onSubmit={handleSubmit} className="contact-form">
                      {showSuccess && (
                        <Alert variant="success" className="mb-4">
                          <Alert.Heading>Message Sent!</Alert.Heading>
                          Thank you for reaching out. I'll get back to you soon!
                        </Alert>
                      )}
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project..."
                          required
                        />
                      </Form.Group>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="btn btn-primary btn-custom w-100"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="loading me-2"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <span className="me-2">📤</span>
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </Form>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;