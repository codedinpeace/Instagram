const jwt = require("jsonwebtoken");

function createToken(userId, username, res) {
  const token = jwt.sign({ userId, username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token);
}

module.exports = createToken;
