const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Access denied. No token provided." });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid or expired token." });

    req.user = user; // ✅ Attach decoded user to request
    console.log("Authenticated user:", user); // 🔍 Useful for debugging
    next();
  });
};

module.exports = authenticateToken;

