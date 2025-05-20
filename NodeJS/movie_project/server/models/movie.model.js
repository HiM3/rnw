const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movie_name: {
        type: String,
        required: [true, 'Movie name is required'],
        trim: true
    },
    movie_description: {
        type: String,
        required: [true, 'Movie description is required'],
        trim: true
    },
    movie_rating: {
        type: Number,
        required: [true, 'Movie rating is required'],
        min: [0, 'Rating cannot be less than 0'],
        max: [10, 'Rating cannot be more than 10']
    },
    thumbnail: {
        type: String,
        required: [true, 'Movie thumbnail is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema); 