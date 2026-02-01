const axios = require("axios");
const sleep = require("../utils/sleep");

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let controller = { running: false };

async function startTraffic({
  baseUrl,
  rps,
  duration,
  endpoints,
  pattern = "steady",
}) {
  if (controller.running) return;
  controller.running = true;

  const endAt = Date.now() + duration * 1000;

  while (controller.running && Date.now() < endAt) {
    let currentRps = rps;

    if (pattern === "burst") {
      currentRps = rps * 3;
    }

    if (pattern === "chaos") {
      currentRps = randomBetween(1, rps * 3);
    }

    const intervalMs = Math.max(1, Math.floor(1000 / currentRps));
    const ep = pickRandom(endpoints);

    axios
      .request({
        method: ep.method || "GET",
        url: `${baseUrl}${ep.path}`,
        params: ep.params,
        data: ep.body,
      })
      .catch(() => {});

    await sleep(intervalMs);
  }

  controller.running = false;
}

function stopTraffic() {
  controller.running = false;
}

function status() {
  return { running: controller.running };
}

module.exports = { startTraffic, stopTraffic, status };
