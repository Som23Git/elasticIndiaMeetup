const express = require("express");
const trafficRoutes = require("./routes/traffic.routes");

const app = express();
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "traffic-generator",
  });
});
app.use("/traffic", trafficRoutes);
module.exports = app;
