const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(user_id, username, isadmin) {
  const payload = {
    user: {
      id: user_id, username, isAdmin: isadmin,
    },
  };
  return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '3h'});
}

module.exports = jwtGenerator;

function jwtRegistration(user_id, username) {
  const payload = {
    user: {
      id: user_id, username
    },
  };
  return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '3h'});
}

module.exports = jwtRegistration;