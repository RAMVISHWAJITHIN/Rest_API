const express = require("express");
const Product = require("../models/product.model");
const {
  createProducts,
  getProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
} = require("../controllers/product.controller");
const router = express.Router();

router.post("/", createProducts);
router.get("/", getProducts);

router.get("/:id", getProductsById);

router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);
module.exports = router;
