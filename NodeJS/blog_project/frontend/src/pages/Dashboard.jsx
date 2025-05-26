import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogPosts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/blog/getAllPosts`, { withCredentials: true });
      setBlogPosts(res?.data?.data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch user data
    axios.get(`${import.meta.env.VITE_API_URL}/blog/isAuth`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error('Error fetching user:', err);
        navigate('/login');
      });

    // Fetch user's blog posts
    fetchBlogPosts();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/blog/logout`, { withCredentials: true });
      navigate('/login');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/blog/deletePost/${id}`, { 
        withCredentials: true 
      });

      if (res.data.success) {
        // Remove the deleted post from the state immediately
        setBlogPosts(prevPosts => prevPosts.filter(post => post._id !== id));
        alert('Post deleted successfully');
      } else {
        throw new Error(res.data.message || 'Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to delete post');
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="py-4">
      <Row>
        {/* Sidebar Navigation */}
        <Col md={3} lg={2} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <div className="text-center mb-4">
                <img
                  src={user?.avatar || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="rounded-circle mb-3"
                  width="100"
                  height="100"
                />
                <h5>{user?.name || 'User'}</h5>
                <p className="text-muted small">Blog Author</p>
              </div>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/dashboard" className="active">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard/create">
                  Create Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard/profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard/settings">
                  Settings
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="text-danger">
                  Logout
                </Nav.Link>
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>My Blog Posts</h2>
            <Button as={Link} to="/dashboard/create" variant="primary">
              Create New Post
            </Button>
          </div>

          {/* Blog Posts List */}
          <Row className="g-4">
            {blogPosts?.length === 0 ? (
              <Col>
                <Card className="text-center p-5">
                  <Card.Body>
                    <h4>No posts yet</h4>
                    <p className="text-muted">Start writing your first blog post!</p>
                    <Button as={Link} to="/dashboard/create" variant="primary">
                      Create New Post
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              blogPosts?.map(post => (
                <Col key={post._id} md={6} lg={4}>
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="badge bg-primary">{post.category}</span>
                        <span className={`badge ${post.status === 'published' ? 'bg-success' : 'bg-secondary'}`}>
                          {post.status}
                        </span>
                      </div>
                      <Card.Title className="h5">{post.title}</Card.Title>
                      <Card.Text className="text-muted small">
                        Posted on {new Date(post.createdAt).toLocaleDateString()}
                      </Card.Text>
                      <div className="d-flex gap-2 mt-3">
                        <Button
                          as={Link}
                          to={`/singleview/${post._id}`}
                          variant="outline-primary"
                          size="sm"
                        >
                          View
                        </Button>
                        <Button
                          as={Link}
                          to={`/dashboard/update/${post._id}`}
                          variant="outline-secondary"
                          size="sm"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(post._id)}
                          variant="outline-danger"
                          size="sm"
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard; 