module.exports = (req, res, next) => {
  const delay = Number(req.query.delay);

  if (!isNaN(delay) && delay > 0) {
    setTimeout(next, delay);
  } else {
    next();
  }
};

