const express = require("express");

const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "traffic-generator",
  });
});

module.exports = app;
