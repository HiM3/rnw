import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaBookmark, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

function BlogView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/blog/getPost/${id}`);
        setBlogPost(res?.data?.data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load the blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  if (error || !blogPost) {
    return (
      <Container className="py-5 text-center">
        <h4>{error || 'Blog post not found.'}</h4>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="text-center mb-4">
            <h1 className="display-4 mb-3">{blogPost.title}</h1>
            <div className="d-flex justify-content-center align-items-center gap-3 text-muted mb-4">
              <span>By {'Unknown Author'}</span>
              <span>•</span>
              <span>{new Date(blogPost.createdAt).toLocaleDateString()}</span>
              <span>•</span>
              <span className="badge bg-primary">{blogPost.category}</span>
            </div>
            <img
              src={blogPost.image || 'https://via.placeholder.com/800x400'}
              alt={blogPost.title}
              className="img-fluid rounded mb-4"
            />
          </div>

          <Card className="shadow-sm mb-5">
            <Card.Body className="p-4">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="d-flex gap-2">
              <Button variant="outline-primary" size="sm">
                <FaFacebook className="me-2" />
                Share
              </Button>
              <Button variant="outline-info" size="sm">
                <FaTwitter className="me-2" />
                Tweet
              </Button>
              <Button variant="outline-secondary" size="sm">
                <FaLinkedin className="me-2" />
                Share
              </Button>
            </div>
            <Button variant="outline-dark" size="sm">
              <FaBookmark className="me-2" />
              Bookmark
            </Button>
          </div>

          <div className="text-center mt-5">
            <Button 
              variant="outline-primary" 
              size="lg"
              onClick={() => navigate(-1)}
              className="px-4"
            >
              <FaArrowLeft className="me-2" />
              Back to Previous Page
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogView;
