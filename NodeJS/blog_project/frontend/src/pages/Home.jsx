import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  // Mock data for featured posts
  const featuredPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      description: "Learn the basics of React and build your first application",
      author: "John Doe",
      date: "2024-03-15",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      description: "Master modern CSS with these advanced techniques",
      author: "Jane Smith",
      date: "2024-03-14",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      description: "Learn how to write better Node.js applications",
      author: "Mike Johnson",
      date: "2024-03-13",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  // Mock data for categories
  const categories = [
    { id: 1, name: "Technology", icon: "💻" },
    { id: 2, name: "Travel", icon: "✈️" },
    { id: 3, name: "Food", icon: "🍔" },
    { id: 4, name: "Lifestyle", icon: "🌟" },
    { id: 5, name: "Career", icon: "💼" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Welcome to BlogName – Ideas Worth Sharing</h1>
              <p className="lead">Discover amazing stories, insights, and knowledge from our community.</p>
              <Button variant="light" size="lg">Start Reading</Button>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Hero"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Posts */}
      <Container className="mb-5">
        <h2 className="mb-4">Featured Posts</h2>
        <Row>
          {featuredPosts.map(post => (
            <Col key={post.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      By {post.author} • {post.date}
                    </small>
                    <Button variant="outline-primary" size="sm">Read More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Categories Section */}
      <Container className="mb-5">
        <h2 className="mb-4">Categories</h2>
        <Row className="g-3">
          {categories.map(category => (
            <Col key={category.id} xs={6} md={4} lg={2}>
              <Card className="text-center h-100 shadow-sm">
                <Card.Body>
                  <div className="display-4 mb-2">{category.icon}</div>
                  <Card.Title>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Recent Posts */}
      <Container className="mb-5">
        <h2 className="mb-4">Recent Posts</h2>
        <Row>
          {featuredPosts.map(post => (
            <Col key={post.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={post.image}
                      className="h-100 object-fit-cover"
                      alt={post.title}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title className="h5">{post.title}</Card.Title>
                      <Card.Text className="small">{post.description}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          By {post.author} • {post.date}
                        </small>
                        <Button variant="link" size="sm" className="p-0">
                          Read More →
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* About Section */}
      <Container className="mb-5">
        <Row className="align-items-center">
          <Col md={4}>
            <img
              src="https://via.placeholder.com/400x400"
              alt="Author"
              className="img-fluid rounded-circle shadow"
            />
          </Col>
          <Col md={8}>
            <h2>About the Author</h2>
            <p className="lead">
              Hi, I'm [Your Name], a passionate writer and developer sharing insights about technology,
              programming, and digital experiences.
            </p>
            <p>
              With years of experience in the industry, I love sharing knowledge and helping others
              grow in their journey. Follow me on social media to stay connected!
            </p>
            <div className="d-flex gap-3">
              <Button variant="outline-primary">Read More About Me</Button>
              <Button variant="outline-secondary">Contact Me</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home; 