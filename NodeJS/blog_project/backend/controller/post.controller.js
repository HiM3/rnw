const Post = require('../models/Post');
const fs = require('fs');
const path = require('path');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const thumbnail = req.file ? req.file.filename : '';

        const post = new Post({
            title,
            content,
            category,
            thumbnail
        });

        await post.save();
        res.json({
            success: true,
            message: 'Post created successfully',
            data: post
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error creating post',
        });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({
            success: true,
            data: posts
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error fetching posts',
        });
    }
};

// Get single post
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.json({
                success: false,
                message: 'Post not found'
            });
        }
        res.json({
            success: true,
            data: post
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error fetching post',
        });
    }
};

// Update post
exports.updatePost = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const updateData = {
            title,
            content,
            category
        };

        if (req.file) {
            updateData.thumbnail = req.file.filename;
        }

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!post) {
            return res.json({
                success: false,
                message: 'Post not found'
            });
        }

        res.json({
            success: true,
            message: 'Post updated successfully',
            data: post
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error updating post',
        });
    }
};

// Delete post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.json({
                success: false,
                message: 'Post not found'
            });
        }

        // Only try to delete the file if it exists and is not the default thumbnail
        if (post.thumbnail && post.thumbnail !== 'https://via.placeholder.com/800x400') {
            const filePath = path.join(__dirname, '..', 'uploads', post.thumbnail);
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (fileError) {
                console.error('Error deleting thumbnail file:', fileError);
                // Continue with post deletion even if file deletion fails
            }
        }

        await Post.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Post deleted successfully'
        });
    } catch (error) {
        console.error('Error in deletePost:', error);
        res.json({
            success: false,
            message: 'Error deleting post'
        });
    }
};