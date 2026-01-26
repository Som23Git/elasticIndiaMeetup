const express = require("express");
const products = require("../data/products");

const router = express.Router();

// In-memory cart store
const carts = {};

// POST /cart/:cartId/add
router.post("/:cartId/add", (req, res) => {
  const { productId, quantity } = req.body;

  // Validate input
  if (!productId || !quantity || quantity <= 0) {
    return res.status(400).json({
      error: "Invalid input: productId and quantity (>0) are required",
    });
  }

  // Check product existence
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  // Initialize cart if not present
  if (!carts[req.params.cartId]) {
    carts[req.params.cartId] = [];
  }

  // Add item to cart
  carts[req.params.cartId].push({
    productId,
    quantity,
    price: product.price,
  });

  res.json({ message: "Item added to cart" });
});

// GET /cart/:cartId
router.get("/:cartId", (req, res) => {
  res.json(carts[req.params.cartId] || []);
});

module.exports = router;
