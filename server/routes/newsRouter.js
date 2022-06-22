const Router = require('express')
const router = Router()
const checkRole = require('../middleware/checkRoleMiddleware')
const {
    getAllNews,
    getOneNews,
    createNews,
    updateNews,
} = require('../controllers/newsController')

router.get('/', getAllNews)

router.get('/:id', getOneNews)

router.post('/', checkRole(true), createNews)

router.put('/:id', checkRole(true), updateNews)

module.exports = router
