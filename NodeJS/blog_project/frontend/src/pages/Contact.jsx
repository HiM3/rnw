import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending message...' });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'danger', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    }
  };

  const contactInfo = {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-4 mb-4">Get in Touch</h1>
          <p className="lead">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h2 className="h4 mb-4">Send me a Message</h2>
              {status.message && (
                <div className={`alert alert-${status.type} mb-4`}>
                  {status.message}
                </div>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
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

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message here..."
                    required
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                  disabled={status.type === 'info'}
                >
                  {status.type === 'info' ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h2 className="h4 mb-4">Contact Information</h2>
              <div className="d-flex align-items-center mb-4">
                <FaEnvelope className="me-3 text-primary" size={24} />
                <div>
                  <h3 className="h6 mb-1">Email</h3>
                  <p className="mb-0">{contactInfo.email}</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaPhone className="me-3 text-primary" size={24} />
                <div>
                  <h3 className="h6 mb-1">Phone</h3>
                  <p className="mb-0">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaMapMarkerAlt className="me-3 text-primary" size={24} />
                <div>
                  <h3 className="h6 mb-1">Location</h3>
                  <p className="mb-0">{contactInfo.location}</p>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="h5 mb-3">Follow Me</h3>
                <div className="d-flex gap-3">
                  <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <FaGithub size={24} />
                  </a>
                  <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <FaTwitter size={24} />
                  </a>
                  <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact; 