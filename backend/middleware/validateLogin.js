// backend/auth/middleware/validateLogin.js
module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }
  next();
};
