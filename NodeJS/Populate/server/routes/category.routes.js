const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const { verifyuser } = require("../middlewares/verifyuser");

router.post("/create", verifyuser, categoryController.createCategory);
router.get("/", verifyuser, categoryController.getAllCategories);
router.put("/:id", verifyuser, categoryController.updateCategory);
router.delete("/:id", verifyuser, categoryController.deleteCategory);

module.exports = router;
