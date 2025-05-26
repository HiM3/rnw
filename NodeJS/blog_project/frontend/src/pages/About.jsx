import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/yourusername"
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/yourusername"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/yourusername"
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:your.email@example.com"
    }
  ];

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-4 mb-4">About Me</h1>
          <p className="lead">
            Hi there! I'm [Your Name], a passionate writer and developer sharing insights
            about technology, programming, and digital experiences.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4} className="mb-4 mb-md-0">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Author"
            className="img-fluid rounded-circle shadow"
          />
        </Col>
        <Col md={8}>
          <h2 className="mb-4">My Story</h2>
          <p>
            With over [X] years of experience in the industry, I've had the privilege of
            working on various projects and sharing my knowledge with the community.
            My journey in technology began when [Your Story].
          </p>
          <p>
            I believe in continuous learning and sharing knowledge. This blog is my way
            of giving back to the community and helping others grow in their journey.
          </p>
          <div className="d-flex gap-3 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <h2 className="text-center mb-4">What I Write About</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h5">Technology</h3>
                  <p>
                    Latest tech trends, programming tutorials, and development insights
                    to help you stay ahead in the digital world.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h5">Career Development</h3>
                  <p>
                    Tips and advice for career growth, job hunting, and professional
                    development in the tech industry.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h5">Personal Growth</h3>
                  <p>
                    Insights on productivity, learning strategies, and personal
                    development to help you achieve your goals.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h5">Community</h3>
                  <p>
                    Stories and experiences from the tech community, highlighting
                    amazing projects and inspiring individuals.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="mb-4">Let's Connect</h2>
          <p className="lead mb-4">
            I'm always excited to connect with fellow developers and tech enthusiasts.
            Feel free to reach out through any of the social links above or drop me an email.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About; 