import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-decoration-none">Terms of Service</a></li>
              <li><a href="/contact" className="text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Newsletter</h5>
            <p>Subscribe to get the latest posts in your inbox</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer; 