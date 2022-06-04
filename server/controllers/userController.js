const ApiError = require('../error/ApiError')
const pool = require('./../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateJwt = (user_id) => {
    const payload = {
        user: {id: user_id}
    }
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3h" })
}

// CЛОЖНА СЛОЖНА СЛОЖНА, а может не сложно нужно только разобраться, закончу дома.
const cryptUserPassword = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await pool.query
        ("SELECT * FROM users WHERE user_name = $1",
                [username]);
        if (username === user.rows[0].user_name && password === user.rows[0].user_password) {
            const salt = await bcrypt.genSalt(10)
            const bcryptPassword = await bcrypt.hash(password, salt)
            let newPassword = await pool.query
            ("INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *",
            [username, bcryptPassword]
            )

            const jwtToken = jwtGenerator(newPassword.rows[0].user_id)
            return res.json({jwtToken})
        } else { res.json(user.rows) }

    } catch (err) {
        console.log(err.message);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await pool.query
            ("SELECT * FROM users ORDER BY user_id")
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
}


const userLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await pool.query
            ("SELECT * FROM users WHERE user_name = $1",
                [username]);
        if (!user) {
            return res.status(401).json("Пользователь не найден");
        }

        // const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        const validPassword = password === user.rows[0].user_password;
        if (!validPassword) {
            return res.status(401).json("Неправильный пароль");
        }

        const token = generateJwt(user.rows[0].user_id)
        return res.json({ token })

    } catch (err) {
        console.error(err.message);
    }
}

const userAuth = async (req, res, next) => {
    const { id } = req.query
    if (!id) {
        return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(id)
}

module.exports = {
    cryptUserPassword,
    getAllUsers,
    userLogin,
    userAuth
}

