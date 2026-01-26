const express = require("express");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

app.use(express.json());
app.use(requestLogger);

// Routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "demo-ecommerce" });
});

module.exports = app;
