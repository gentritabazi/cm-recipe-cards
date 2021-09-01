const getIntInRange = (min, max) => {
  return parseInt(Math.random() * (max - min) + min, 10);
};

const isSuccess = () => {
  // Let's emulate request failures. One call in 100 will fail.
  const int = getIntInRange(1, 100);
  return int !== 1;
};

module.exports = (req, res, next) => {
  if (!isSuccess()) {
    return res.sendStatus(500);
  }

  next();
};
