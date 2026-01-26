module.exports = (req, res, next) => {
  if (req.query.forceError === "true") {
    return res.status(500).json({
      error: "Forced internal server error (demo)"
    });
  }
  next();
};

