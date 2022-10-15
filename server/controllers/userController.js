const bcrypt = require('bcrypt');
const ApiError = require('../error/ApiError.js');
const pool = require('../db');
require('dotenv').config();
const jwtGenerator = require('../utils/jwtGenerator');
const queries = require('../queries/users');
const jwt = require('jsonwebtoken')


const getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query(
      queries.getAllUsers,
      );
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
};




const registration = async (req, res, next) => {
  const {userEmail, password,  username} = req.body
  if (!userEmail || !password) {
    return next(ApiError.BAD_REQUEST('некоректный email или пароль'));

  }
  const candidate = async (req, res) => {
    const {userEmail, username, password} = req.body;
    try {
    const candidate = await pool.query(queries.createUser, [
      userEmail
    ]);
    if (candidate.rows === {userEmail}) {
      return next(ApiError.BAD_REQUEST('email занят'));
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await req.createUser({userEmail, isAdmin, username, password: hashPassword})
    const jwt = jwtGenerator(req.user.id, req.user.username, req.user.isAdmin, req.user.userEmail)
      return res.json({jwt});
    } catch (err) {
      console.error(err.message);
    }

  }; }






const userLogin = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await pool.query(queries.userLogin,[
      email
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json('Пользователь не найден');
    }
    const {userId, isAdmin, username, userPassword} = user.rows[0];
    const validPassword = password === userPassword;
    if (!validPassword) {
      return res.status(401).json('Неправильный пароль');
    }
    const token = jwtGenerator(userId, userEmail, username, isAdmin);

    return res.json({token});
  } catch (err) {
    console.error(err.message);
  }
};

  const userCheck = async (req, res, next) => {
  const token = jwtGenerator(req.user.id, req.user.username, req.user.isAdmin, req.user.userEmail);
  return res.json({token});
};

module.exports = {
  userCheck,
  getAllUsers,
  registration,
  userLogin
};
