const mongoose = require("mongoose");

const dbConfig = () => {
  mongoose.connect(process.env.MongoURL)
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log("Database connection error:", err));
};

module.exports = dbConfig;
