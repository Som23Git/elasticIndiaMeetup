module.exports = (req, res, next) => {
  const failureRate = Number(req.query.failRate); // 0–100

  if (!isNaN(failureRate)) {
    const roll = Math.random() * 100;
    if (roll < failureRate) {
      return res.status(503).json({
        error: "Random service failure (demo)"
      });
    }
  }

  next();
};

