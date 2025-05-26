import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const CreateBlog = () => {
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    useEffect(() => {
        if (isEditMode) {
            fetchBlog();
        }
    }, [id]);

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/blog/getPost/${id}`);
            const blog = res?.data?.data;

            setValue('title', blog.title);
            setValue('content', blog.content);
            setValue('category', blog.category);
        } catch (error) {
            console.error('Error fetching blog:', error);
            alert('Failed to fetch blog details');
            navigate('/dashboard');
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('content', data.content);
            formData.append('category', data.category);
            if (data.thumbnail?.[0]) {
                formData.append('thumbnail', data.thumbnail[0]);
            }

            let res;
            if (isEditMode) {
                res = await axios.put(`${import.meta.env.VITE_API_URL}/blog/updatePost/${id}`, formData, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert("Blog updated successfully");
            } else {
                res = await axios.post(`${import.meta.env.VITE_API_URL}/blog/createPost`, formData, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert("Blog created successfully");
            }

            if (res.data.success) {
                navigate('/dashboard');
            } else {
                throw new Error(res.data.message || 'Operation failed');
            }
        } catch (error) {
            console.error('Form submission error:', error.response?.data || error.message);
            alert(isEditMode ? "Failed to update blog" : "Failed to create blog");
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Card className="shadow-sm">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4">
                                {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
                            </h2>
                            <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                                <Form.Group className="mb-3">
                                    <Form.Label>Blog Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter blog title"
                                        {...register("title", { required: true })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select {...register("category", { required: true })}>
                                        <option value="">Select a category</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Food">Food</option>
                                        <option value="Health">Health</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={10}
                                        placeholder="Write your blog content here..."
                                        {...register("content", { required: true })}
                                        style={{ resize: 'vertical' }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Thumbnail</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        {...register("thumbnail", { required: !isEditMode })}
                                    />
                                    {isEditMode && (
                                        <Form.Text className="text-muted">
                                            Leave empty to keep the current image
                                        </Form.Text>
                                    )}
                                </Form.Group>

                                <div className="d-flex gap-2">
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => navigate('/dashboard')}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        {isEditMode ? 'Update Blog' : 'Create Blog'}
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateBlog;
