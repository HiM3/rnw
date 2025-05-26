const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const router = require("./routes/route");
const path = require("path");
const fs = require('fs');
require("dotenv").config();

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

// Body Parser Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get("/", (req, res) => res.send("Blog API is running"));
app.use("/blog", router);

//Database Connection
const dbConfig = require("./config/db");
dbConfig();

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}/blog`);
});