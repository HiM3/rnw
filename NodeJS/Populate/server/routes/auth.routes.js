const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const Router = express.Router();

Router.post("/signup", register);
Router.post("/login", login);

module.exports = Router;
