const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = 3000;
let tasks = [];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Get all tasks
app.get("/todo", (req, res) => {
  res.json({ tasks });
});
app.post("/todo", (req, res) => {
  const { title } = req.body;
  const id = crypto.randomUUID();
  tasks.push({ id, title });
  res.redirect("/");
});
// Update a task
app.put("/todo", (req, res) => {
  const { title } = req.body;
  const { id } = req.query;
  const updated = tasks.findIndex((ele) => {
    return ele.id == id;
  });
  tasks[updated] = { id, title };
  res.json({
    success: true,
    message: "user updated",
  });
});
app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const exists = tasks.find((t) => t.id === id);
  if (!exists) {
    return res.json(
      { success: false, 
        message: "Task not found" 
      });
  }
  tasks = tasks.filter((t) => t.id !== id);
  res.json({ success: true, message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
