const express = require("express");
const movieRoute = require("./routes/movieRoutes");
const app = express();
const path = require('path');
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const dbConfig = require("./config/Movie");
dbConfig();

// Routes
app.get("/", (req, res) => res.send("Movie API is running"));
app.use("/movies", movieRoute);

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Movie API: http://localhost:${PORT}/movies`);
    console.log(`Uploads directory: http://localhost:${PORT}/uploads`);
});
