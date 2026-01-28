const fs = require("fs");
const path = require("path");

// Logs inside project (safe for dev & Docker volume)
const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOG_DIR, "app.log");

// Ensure log directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function log(entry) {
  try {
    const logEntry = JSON.stringify({
      timestamp: new Date().toISOString(),
      service: "demo-ecommerce",
      ...entry,
    });

    fs.appendFileSync(LOG_FILE, logEntry + "\n");
  } catch (err) {
    // NEVER crash the app because of logging
    console.error("Logging failed:", err.message);
  }
}

module.exports = { log };
