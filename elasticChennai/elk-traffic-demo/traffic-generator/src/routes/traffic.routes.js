const express = require("express");
const {
  startTraffic,
  stopTraffic,
  status,
} = require("../services/traffic.service");

const router = express.Router();

/**
 * POST /traffic/start
 * {
 *   "baseUrl": "http://localhost:3000",
 *   "rps": 10,
 *   "duration": 30,
 *   "endpoints": [
 *     { "method": "GET", "path": "/products" },
 *     { "method": "GET", "path": "/products/1" },
 *     { "method": "POST", "path": "/cart/demo/add", "body": { "productId": 1, "quantity": 1 } }
 *   ]
 * }
 */
router.post("/start", (req, res) => {
  const { baseUrl, rps, duration, endpoints } = req.body;

  if (
    !baseUrl ||
    !rps ||
    !duration ||
    !Array.isArray(endpoints) ||
    endpoints.length === 0
  ) {
    return res.status(400).json({ error: "Invalid config" });
  }

  startTraffic({ baseUrl, rps, duration, endpoints });
  res.json({ status: "started" });
});

router.post("/stop", (_req, res) => {
  stopTraffic();
  res.json({ status: "stopped" });
});

router.get("/status", (_req, res) => {
  res.json(status());
});

module.exports = router;
