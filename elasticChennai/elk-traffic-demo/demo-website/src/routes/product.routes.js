const express = require("express");
const products = require("../data/products");

const router = express.Router();

// GET /products
router.get("/", (req, res) => {
  res.json(products);
});

// GET /products/:id
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

module.exports = router;

