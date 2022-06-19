const ApiError = require('../error/ApiError')
const pool = require('./../db')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwtGenerator = require('../utils/jwtGenerator')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await pool.query(
            "SELECT * FROM users ORDER BY user_id"
            )
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
}

const userLogin = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE user_name = $1",[
                username
            ]);
        if (user.rows.length === 0) {
            return res.status(401).json("Пользователь не найден");
        }
        const validPassword = password === user.rows[0].user_password;
        if (!validPassword) {
            return res.status(401).json("Неправильный пароль");
        }
        const token = jwtGenerator(user.rows[0].user_id, username, user.rows[0].isadmin)
        return res.json({token})

    } catch (err) {
        console.error(err.message);
    }
}

const userCheck = async(req, res, next) => {
    const token = jwtGenerator(req.user.id, req.user.username, req.user.isadmin)
    return res.json({token}) 

}

module.exports = {
    userCheck,
    getAllUsers,
    userLogin,
}
