const Router = require('express')
const router = Router()
const {
    cryptUserPassword,
    getAllUsers,
    userLogin,
    userAuth,
} = require('../controllers/userController')

router.put('/crypt', cryptUserPassword)
router.get('/', getAllUsers)
router.post('/login', userLogin)
router.get('/auth', userAuth)

module.exports = router
