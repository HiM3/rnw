const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Technology', 'Lifestyle', 'Travel', 'Food', 'Health']
  },
  thumbnail: {
    type: String,
    default: 'https://via.placeholder.com/800x400'
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema); 