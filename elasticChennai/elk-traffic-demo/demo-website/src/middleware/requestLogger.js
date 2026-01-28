const { log } = require("../utils/logger");

module.exports = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    log({
      method: req.method,
      route: req.originalUrl,
      status: res.statusCode,
      latency_ms: Date.now() - start,
      user_agent: req.headers["user-agent"] || "unknown"
    });
  });

  next();
};

