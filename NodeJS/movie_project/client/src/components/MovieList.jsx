import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movies`);
            setMovies(response?.data?.data || []);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError('Failed to load movies');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this movie?')) {
            try {
                const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/movies/${id}`);
                if (response.data?.success) {
                    fetchMovies();
                    alert('Movie deleted successfully!');
                } else {
                    alert('Delete failed');
                }
            } catch (error) {
                console.error('Error deleting movie:', error);
                alert('Failed to delete movie');
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/form/${id}`);
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-warning">🎬 Movie Collection</h2>
                <button className="btn btn-primary" onClick={() => navigate('/form')}>
                    Add New Movie
                </button>
            </div>

            {movies.length === 0 ? (
                <div className="text-center text-muted">No movies found.</div>
            ) : (
                <div className="row g-4">
                    {movies.map((movie) => (
                        <div key={movie._id} className="col-md-4">
                            <div className="card h-100 shadow">
                                <img
                                    src={`${import.meta.env.VITE_IMAGE_URL}/${movie.thumbnail}`}
                                    className="card-img-top"
                                    alt={movie.movie_name}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-dark">{movie.movie_name}</h5>
                                    <p className="card-text text-muted">{movie.movie_description}</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="badge bg-warning text-dark">
                                            ⭐ {movie.movie_rating}/10
                                        </span>
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn btn-sm btn-outline-primary"
                                                title="Edit"
                                                onClick={() => handleEdit(movie._id)}
                                            >
                                                <FaPen />
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                title="Delete"
                                                onClick={() => handleDelete(movie._id)}
                                            >
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieList;
