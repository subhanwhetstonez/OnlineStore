const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../modules/config.js");

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Token not provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("Failed to authenticate token:", err);
      return res.status(401).json({ error: "Failed to authenticate token" });
    }

    req.userId = decoded.userId; // Attach userId to request object
    next();
  });
}

module.exports = verifyToken;
