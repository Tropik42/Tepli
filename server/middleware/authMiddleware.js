const jwt = require('jsonwebtoken')
require("dotenv").config()

module.exports = function(req, res, next) {
  const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(403).json({ massage: "Авторизация отклонена"})
    }
    try {
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verify.user
        next()
    } catch (err) {
        res.status(401).json({ massage: 'Токен недействителен'})
    }
}
