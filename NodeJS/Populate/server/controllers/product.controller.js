const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { title, price, parentCategory, subCategory } = req.body;
    const existingProduct = await Product.findOne({
      title,
    });
    const existingcategory = await Product.findOne({
      parentCategory,
    });
    const existingsubcategory = await Product.findOne({
      subCategory,
    });

    if (existingProduct && existingcategory && existingsubcategory) {
      return res.json({
        success: false,
        message: "Product already Exists",
      });
    } else {
      if (!title || !price || !parentCategory || !subCategory) {
        return res.status(400).json({
          success: false,
          message: "Title, price, parentCategory, and subcategory are required",
        });
      }

      const product = new Product({
        title,
        price,
        parentCategory,
        subCategory,
        createdBy: req.user._id,
      });

      await product.save();

      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: product,
      });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("parentCategory", "name")
      .populate("subCategory", "name")
      .populate("createdBy", "username");

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("parentCategory", "name")
      .populate("subCategory", "name")
      .populate("createdBy", "username");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { title, price, parentCategory, subCategory } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    product.title = title || product.title;
    product.price = price || product.price;
    product.parentCategory = parentCategory || product.parentCategory;
    product.subCategory = subCategory || product.subCategory;

    await product.save();

    res.json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
