import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    useEffect(() => {
        if (isEditMode) {
            fetchMovie();
        }
    }, [id]);

    const fetchMovie = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movies/${id}`);
            const movie = response.data.data;
            setValue('movie_name', movie.movie_name);
            setValue('movie_description', movie.movie_description);
            setValue('movie_rating', movie.movie_rating);
        } catch (error) {
            console.error('Error fetching movie:', error);
            alert('Failed to fetch movie details');
            navigate('/MovieList');
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('movie_name', data.movie_name);
            formData.append('movie_description', data.movie_description);
            formData.append('movie_rating', data.movie_rating);
            if (data.thumbnail?.[0]) {
                formData.append('thumbnail', data.thumbnail[0]);
            }

            let response;
            if (isEditMode) {
                response = await axios.put(`${import.meta.env.VITE_BASE_URL}/movies/${id}`, formData);
                alert("Movie updated successfully");
            } else {
                response = await axios.post(`${import.meta.env.VITE_BASE_URL}/movies`, formData);
                alert("Movie added successfully");
            }

            if (response.data.success) {
                reset();
                navigate('/MovieList');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert(isEditMode ? "Failed to update movie" : "Failed to add movie");
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light">
            <div className="card w-100" style={{ maxWidth: "600px" }}>
                <div className="card-body bg-secondary text-white p-4">
                    <h4 className="card-title text-center text-warning mb-4">
                        {isEditMode ? 'Edit Movie' : 'Add New Movie'}
                    </h4>
                    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        <div className="mb-3">
                            <label className="form-label text-warning">Movie Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter movie name"
                                {...register("movie_name", { required: true })}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-warning">Description</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter movie description"
                                rows="3"
                                {...register("movie_description", { required: true })}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-warning">Rating (0-10)</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter rating"
                                min="0"
                                max="10"
                                step="0.1"
                                {...register("movie_rating", { required: true })}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label text-warning">Thumbnail</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                {...register("thumbnail", { required: !isEditMode })}
                            />
                            {isEditMode && (
                                <div className="form-text text-light">
                                    Leave empty to keep the current image
                                </div>
                            )}
                        </div>

                        <div className="d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-outline-light"
                                onClick={() => navigate('/MovieList')}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-warning text-dark fw-bold">
                                {isEditMode ? 'Update Movie' : 'Add Movie'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MovieForm;
