const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(user_id, username, isAdmin, userEmail, password) {
  const payload = {
    user: {
      id: user_id, username, isAdmin, userEmail, password
    },
  };
  return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '3h'});
}

module.exports = jwtGenerator;
