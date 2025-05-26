import { Container, Row, Col, Card } from 'react-bootstrap';

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      icon: "💻",
      description: "Latest tech news, tutorials, and insights",
      postCount: 25
    },
    {
      id: 2,
      name: "Travel",
      icon: "✈️",
      description: "Travel guides, tips, and adventures",
      postCount: 18
    },
    {
      id: 3,
      name: "Food",
      icon: "🍔",
      description: "Recipes, restaurant reviews, and culinary adventures",
      postCount: 32
    },
    {
      id: 4,
      name: "Lifestyle",
      icon: "🌟",
      description: "Life tips, wellness, and personal development",
      postCount: 15
    },
    {
      id: 5,
      name: "Career",
      icon: "💼",
      description: "Career advice, job hunting tips, and professional growth",
      postCount: 20
    },
    {
      id: 6,
      name: "Health",
      icon: "❤️",
      description: "Health tips, fitness advice, and wellness guides",
      postCount: 22
    }
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Blog Categories</h1>
      <p className="lead mb-5">
        Explore our diverse range of topics and find content that interests you.
      </p>
      <Row className="g-4">
        {categories.map(category => (
          <Col key={category.id} md={6} lg={4}>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Body className="text-center">
                <div className="display-1 mb-3">{category.icon}</div>
                <Card.Title className="h3 mb-3">{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <div className="mt-3">
                  <span className="badge bg-primary rounded-pill">
                    {category.postCount} Posts
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories; 