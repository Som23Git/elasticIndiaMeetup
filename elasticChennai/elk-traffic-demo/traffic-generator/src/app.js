const express = require("express");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
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
