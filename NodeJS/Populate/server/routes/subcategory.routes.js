const express = require("express");
const router = express.Router();
const subCategoryController = require("../controllers/subcategory.controller");
const { verifyuser } = require("../middlewares/verifyuser");

router.post("/create", verifyuser, subCategoryController.createSubCategory);
router.get("/", verifyuser, subCategoryController.getAllSubCategories);
router.put("/:id", verifyuser, subCategoryController.updateSubCategory);
router.delete("/:id", verifyuser, subCategoryController.deleteSubCategory);

module.exports = router;
