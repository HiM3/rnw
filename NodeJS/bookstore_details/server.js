const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://meetmehta1050:hIZj2wzYRuStyeAE@cluster0.iyd3lqn.mongodb.net/bookstore")
  .then(() => console.log("📚 Book Store DB Connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  category: String,
});

const Book = mongoose.model("Book", bookSchema);

app.post("/api/books", async (req, res) => {
  const { title, author, price, category } = req.body;
  if (!title || !author || !price || !category) {
    return res.json({ success: false, message: "All fields required" });
  }

  await Book.create({ title, author, price, category });
  res.json({ success: true, message: "Book added successfully" });
});

app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json({ success: true, books });
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json({ success: true, book });
  } catch (err) {
    res.json({ success: false, message: "Book not found" });
  }
});

app.put("/api/books", async (req, res) => {
  const { id } = req.query;
  const { title, author, price, category } = req.body;

  try {
    await Book.findByIdAndUpdate(id, { title, author, price, category });
    res.json({ success: true, message: "Book updated successfully" });
  } catch (err) {
    res.json({ success: false, message: "Failed to update" });
  }
});

app.delete("/api/books/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Book deleted successfully" });
  } catch (err) {
    res.json({ success: false, message: "Failed to delete" });
  }
});

app.listen(PORT, () => console.log(`🚀http://localhost:${PORT}/api/books`));
