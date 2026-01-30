const axios = require("axios");
const sleep = require("../utils/sleep");

let controller = { running: false };

async function startTraffic({ baseUrl, rps, duration, endpoints }) {
  if (controller.running) return;
  controller.running = true;

  const endAt = Date.now() + duration * 1000;
  const intervalMs = Math.max(1, Math.floor(1000 / rps));

  while (controller.running && Date.now() < endAt) {
    // fire-and-forget (do not await)
    const ep = endpoints[Math.floor(Math.random() * endpoints.length)];
    axios
      .request({
        method: ep.method || "GET",
        url: `${baseUrl}${ep.path}`,
        data: ep.body,
      })
      .catch(() => {
        /* ignore errors on purpose */
      });

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
