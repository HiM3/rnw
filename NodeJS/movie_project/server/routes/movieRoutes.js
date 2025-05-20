const express = require('express');
const router = express.Router();
const upload = require("../config/upload");
const {
    createMovie,
    getAllMovies,
    getMovie,
    updateMovie,
    deleteMovie
} = require('../controller/movieController');

// Configure multer for image upload


// Routes
router.post('/', upload.single('thumbnail'), createMovie);
router.get('/', getAllMovies);
router.get('/:id', getMovie);
router.put('/:id', upload.single('thumbnail'), updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router; 