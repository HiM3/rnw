const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");
const { verifyuser } = require("../middlewares/verifyuser");

router.post("/create", verifyuser, createProduct);

router.get("/all", getAllProducts);

router.get("/:id", getProductById);

router.put("/:id", verifyuser, updateProduct);


router.delete("/:id", verifyuser, deleteProduct);

module.exports = router;
