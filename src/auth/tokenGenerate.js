const jwt = require('jsonwebtoken');

module.exports = (user, jwtConfig) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
};