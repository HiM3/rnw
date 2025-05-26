const express = require("express");
const { login, register, logout, verifyuser } = require("../controller/user.controller");
const postController = require('../controller/post.controller');
const upload = require("../config/upload")
const router = express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/isAuth",verifyuser)
router.post('/createPost', upload.single('thumbnail'), postController.createPost);
router.get('/getAllPosts', postController.getAllPosts);
router.get('/getPost/:id', postController.getPost);
router.put('/updatePost/:id', upload.single('thumbnail'), postController.updatePost);
router.delete('/deletePost/:id', postController.deletePost);
module.exports = router;