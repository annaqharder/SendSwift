module.exports = (req, res, next) => {
  if (req.user.credit < 1) {
    // status code 403 Forbidden
    return res.status(403).send({ error: "Not enough credits!" });
  }
  next();
};
