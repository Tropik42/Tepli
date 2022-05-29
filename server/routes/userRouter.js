const Router = require('express')
const router = Router()
const userController = require('../controllers/userController')

router.post('/login', userController.login) // ? ЛОГИНИТСЯ БУДЕТ ТОЛЬКО АДМИН, РЕГИСТРАЦИЯ НЕ НУЖНА?
router.get('/auth', userController.check)

module.exports = router

