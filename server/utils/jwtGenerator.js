const jwt = require('jsonwebtoken')
require('dotenv').config()

function jwtGenerator  (user_id, username, isadmin) {
    const payload = {
        user: { 
            id: user_id, username, isadmin 
        }
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '3h'})
}

module.exports = jwtGenerator;
