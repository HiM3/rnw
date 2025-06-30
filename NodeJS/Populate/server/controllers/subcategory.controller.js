const SubCategory = require("../models/SubCategory");
const Category = require("../models/Category");

// ✅ Create SubCategory under a Category
exports.createSubCategory = async (req, res) => {
  try {
    const { name, parentCategory } = req.body;

    const category = await Category.findById(parentCategory);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Parent category not found" });
    }

    const existing = await SubCategory.findOne({ name, parentCategory });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Subcategory already exists for this category",
      });
    }

    const subCategory = new SubCategory({ name, parentCategory });
    await subCategory.save();

    res.status(201).json({
      success: true,
      message: "Subcategory created",
      data: subCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating subcategory",
      error: error.message,
    });
  }
};

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find()
      .populate("parentCategory", "name")
      .sort({ name: 1 });

    res.json({ success: true, data: subCategories });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching subcategories",
      error: error.message,
    });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, parentCategory } = req.body;

    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      id,
      { name, parentCategory },
      { new: true }
    );

    if (!updatedSubCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }

    res.json({
      success: true,
      message: "Subcategory updated",
      data: updatedSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating subcategory",
      error: error.message,
    });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const subCategory = await SubCategory.findByIdAndDelete(id);
    if (!subCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }

    res.json({ success: true, message: "Subcategory deleted" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting subcategory",
      error: error.message,
    });
  }
};
