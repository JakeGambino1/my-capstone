const jwt = require('jsonwebtoken');
const config = require('config');

// next is callback
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    // 401 not authorized
    return res.status(401).json({ msg: 'Authorization Denied.' });
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token invalid' });
  }
};
