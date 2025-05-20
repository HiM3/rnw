const Movie = require('../models/movie.model');
const fs = require('fs');
const path = require('path');

// Create a new movie
exports.createMovie = async (req, res) => {
    try {
        const { movie_name, movie_description, movie_rating } = req.body;
        const thumbnail = req.file ? req.file.filename : '';

        const movie = new Movie({
            movie_name,
            movie_description,
            movie_rating,
            thumbnail
        });

        await movie.save();
        res.json({
            success: true,
            message: 'Movie created successfully',
            data: movie
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error creating movie',
        });
    }
};

// Get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json({
            success: true,
            data: movies
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error fetching movies',
        });
    }
};

// Get single movie
exports.getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.json({
                success: false,
                message: 'Movie not found'
            });
        }
        res.json({
            success: true,
            data: movie
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error fetching movie',
        });
    }
};

// Update movie
exports.updateMovie = async (req, res) => {
    try {
        const { movie_name, movie_description, movie_rating } = req.body;
        const updateData = {
            movie_name,
            movie_description,
            movie_rating
        };

        if (req.file) {
            updateData.thumbnail = req.file.filename;
        }

        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!movie) {
            return res.json({
                success: false,
                message: 'Movie not found'
            });
        }

        res.json({
            success: true,
            message: 'Movie updated successfully',
            data: movie
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error updating movie',
        });
    }
};

// Delete movie
exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.json({
                success: false,
                message: 'Movie not found'
            });
        }
        const filePath = path.join(__dirname, '..', 'uploads', movie.thumbnail);

        fs.unlinkSync(filePath);
        await Movie.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Movie deleted successfully',
            data: {}
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error deleting movie',
        });
    }
}; 